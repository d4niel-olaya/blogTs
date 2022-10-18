import { IComentariosRepository } from "../interfaces/comentarios.interaface";
import { comentarios } from "@prisma/client";
import prisma from "../database/database";
import { Repository } from "./repository";

class ComentarioRepository<comentarios> implements IComentariosRepository<comentarios, Repository>
{   
    async getAll(): Promise<Repository> {
        const comentarios:any = await prisma.comentarios.findMany({
            include:{
                usuarios:true
            }
        });
        return comentarios; 
    }

    async get(id: number): Promise<Repository> {
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