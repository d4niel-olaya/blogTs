
import { IUsuariosRepository } from "../interfaces/usuarios.interface";
import prisma from "../database/database";
import { usuarios } from "@prisma/client";
import { ResponseModel } from '../models/response/response.model'; 
import { IResponse } from "../interfaces/response.interface";
import { IUsuariosResponse } from "../interfaces/usuarios.interface";
/**
 * @implements {IUsuariosRepository<usuarios, ResponseError>}
 * 
 * @extends {ResponseError}
 */
class UsuariosRepository extends ResponseModel implements IUsuariosRepository<usuarios,IResponse>
{
    constructor() {
        super();
    }
    /**
    *@param {usuarios} data - Body request
    *@return {Promise<IResponse>}  ValidateClass response
    */
    async create(data:usuarios):Promise<usuarios | IResponse>
    {   
        try{
            const {nombre, email, password} = data;
            const user:object | null = await prisma.usuarios.create({
                data:data
            })
            const responseUser:IResponse = await super.response(201,'created');
            return responseUser;
        }
        catch(e:any){
            const response:IResponse= await super.getInstance(e)
            return response
        }
    }   

    async get(id: number): Promise<IResponse> {
        try{
            const user:object | null = await prisma.usuarios.findUnique({
                where:
                {   
                    id:id,
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
            if( user === null) throw new Error('Not found');
            const response: IResponse = await super.response(200, user);
            return response;
        }
        catch(e:any){
            const error:IResponse = await super.getInstance(e);
            return error;
        }
    }
    async update(id: number, data: usuarios): Promise<IResponse> {
        try{

            const user:object = await prisma.usuarios.update({
                where:{
                    id:id
                },
                data:data
            });
            const response:IResponse = await super.response(204,'Updated')
            return response;
        }
        catch(e:any){
            const response: IResponse = await super.getInstance(e);
            return response; 
        }
    }
    async getByWord(id:number, word:string):Promise<IResponse>{
        try{

            const user:any = await prisma.usuarios.findMany({
                where:{
                    id:id,
                    posts:{
                        some:{
                            contenido:{
                                contains:word
                            }
                        }
                    }
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
            })
            return user;
        }
        catch(e:any){
            return e;
        }
    }
}

export default new UsuariosRepository();