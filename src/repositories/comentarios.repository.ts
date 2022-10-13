import { IComentariosRepository } from "../interfaces/comentarios.interaface";
import { comentarios } from "@prisma/client";
import prisma from "../database/database";


class ComentarioRepository<comentarios> implements IComentariosRepository<comentarios>
{   
    async getAll(): Promise<comentarios> {
        const comentarios:any = await prisma.comentarios.findMany({
            include:{
                usuarios:true
            }
        });
        return comentarios; 
    }

    async get(id: number): Promise<comentarios> {
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