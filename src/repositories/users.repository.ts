
import { IUsuariosRepository } from "../interfaces/usuarios.interface";
import prisma from "../database/database";
import { usuarios } from "@prisma/client";
import { ResponseModel } from '../models/response/response.model'; 

/**
 * @implements {IUsuariosRepository<usuarios, ResponseError>}
 * 
 * @extends {ResponseError}
 */
class UsuariosRepository extends ResponseModel implements IUsuariosRepository<usuarios,ResponseModel>
{
    constructor() {
        super();
    }
    /**
    *@param {usuarios} data - Body request
    *@return {Promise<Validate>}  ValidateClass response
    */
    async create(data:usuarios):Promise<usuarios | ResponseModel>
    {   
        try{
            const {nombre, email, password} = data;
            const user:any = await prisma.$queryRaw`INSERT INTO usuarios(nombre,email,password) VALUES(${nombre},${email},aes_encrypt(${password},'xyz'))`;
            return user;
        }
        catch(e:any){
            // const response:any = await super.badResponse(e);
            // return response;
            return e;
        }
    }   

    async get(id: number): Promise<usuarios | ResponseModel> {
        try{
            const user:any = await prisma.usuarios.findUnique({
                where:
                {
                    id:id
                },
                include:{
                    posts:{
                        include:{
                            interaccion_posts:true,
                            categorias:{
                                select:{
                                    nombre:true
                                }
                            },
                            comentarios:{
                                include:{
                                    usuarios:{
                                        select:{
                                            id:true,
                                            nombre:true,
                                            email:true
                                        }
                                    }
                                }
                            }
                        }
                    },
                }
            });
            return user;

        }
        catch(e:any){
            return e;
        }
    }
    async update(id: number, data: usuarios): Promise<ResponseModel> {
        const user:any = await prisma.usuarios.update({
            where:{
                id:id
            },
            data:data
        });
        return user;
    }
}

export default new UsuariosRepository();