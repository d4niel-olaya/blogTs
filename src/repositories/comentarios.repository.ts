import { IComentariosRepository } from "../interfaces/comentarios.interaface";
import { comentarios } from "@prisma/client";
import prisma from "../database/database";
import {ResponseModel} from '../models/response/response.model';

class ComentarioRepository<comentarios> implements IComentariosRepository<comentarios, ResponseModel>
{   

    async getAll(): Promise<ResponseModel> {
        const comentarios:any = await prisma.comentarios.findMany({
            include:{
                usuarios:true
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
                usuarios:true
            }
        })
        return comentario;
    }
}

export default new ComentarioRepository();