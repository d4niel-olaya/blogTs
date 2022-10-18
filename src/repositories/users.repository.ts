
import { IUsuariosRepository } from "../interfaces/usuarios.interface";
import prisma from "../database/database";
import { usuarios } from "@prisma/client";
import { Repository } from "./repository";

/**
 * @implements {IUsuariosRepository<usuarios, Validate>}
 * 
 * @extends {Validate}
 */
class UsuariosRepository extends Repository implements IUsuariosRepository<usuarios,Repository>
{
    constructor() {
        super();
    }
    /**
    *@param {usuarios} data - Body request
    *@return {Promise<Validate>}  ValidateClass response
    */
    async create(data:usuarios):Promise<usuarios | Repository>
    {   
        try{
            const {nombre, email, password} = data;
            const user:any = await prisma.$queryRaw`INSERT INTO usuarios(nombre,email,password) VALUES(${nombre},${email},aes_encrypt(${password},'xyz'))`;
            return user;
        }
        catch(e:any){
            const response:any = await super.response(e);
            return response;
        }
    }   

    async get(id: number): Promise<usuarios | Repository> {
        try{
            await super.ValidTypeid(id);
            const user:any = await prisma.usuarios.findUnique({
                where:
                {
                    id:id
                },
                include:{
                    posts:true
                }
            });
            await super.VerifyParams(user);
            return user;

        }
        catch(e:any){
            const response:any = await super.response(e);
            return response
        }
    }
    async update(id: number, data: usuarios): Promise<Repository> {
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