import { IComentariosRepository } from "../interfaces/comentarios.interaface";
import { comentarios, Prisma } from "@prisma/client";
import prisma from "../database/database";
import {ResponseModel} from '../models/response/response.model';

class ComentarioRepository<comentarios> implements IComentariosRepository<comentarios, ResponseModel>
{   

    async getAll(): Promise<ResponseModel | comentarios> {
        const comentarios:any = await prisma.comentarios.findMany({
            include:{
                usuarios:{
                    select:{
                        id:true,
                        nombre:true,
                        email:true
                    }
                }
            }
        });
        return comentarios; 
    }

    async get(id: number): Promise<ResponseModel> {
        const comentario:any = await prisma.comentarios.findUnique({
            where:{
                id:id
            }
            ,
            include:
            {
                usuarios:{
                    select:{
                        id:true,
                        nombre:true,
                        email:true
                    }
                }
            }
        })
        return comentario;
    }
}

export default new ComentarioRepository();