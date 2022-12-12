import { IComentariosRepository } from "../interfaces/comentarios.interaface";
import { comentarios, Prisma } from "@prisma/client";
import prisma from "../database/database";
import {ResponseModel} from '../models/response/response.model';
import { IResponse } from "../interfaces/response.interface";

class ComentarioRepository extends ResponseModel implements IComentariosRepository<comentarios, IResponse>
{   
    constructor(){
        super()
    }
    async getAll(): Promise<IResponse> {
        try{
            const comentarios:object | null = await prisma.comentarios.findMany({
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
            const response:IResponse = await super.response(200, comentarios)
            return response;

        }
        catch(e:any){
            const error: IResponse = await super.getInstance(e);
            return error;
        }
    }

    async get(id: number): Promise<IResponse> {
        try{
            const comentario:object | null = await prisma.comentarios.findUnique({
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
            if(comentario === null) throw new Error('Not found')
            const response: IResponse = await super.response(200, comentario);
            return response;
        }
        catch(e:any){
            const error:IResponse = await super.getInstance(e);
            return error;
        }
    }
}

export default new ComentarioRepository();