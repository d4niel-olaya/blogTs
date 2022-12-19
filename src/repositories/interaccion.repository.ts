import { ResponseModel } from "../models/response/response.model";
import prisma from "../database/database";
import { ILikeRepository } from "../interfaces/interaccion.interfaces";
import { interaccion_posts } from "@prisma/client";
import { IResponse } from "../interfaces/response.interface";
/**
 * @class Interacccion Repository
 */
class InteraccionRepository extends ResponseModel implements ILikeRepository<interaccion_posts,IResponse>{

    constructor(){
        super();
    }
    async getAll(): Promise<IResponse> {
        return super.response(200, 'data');
    }
    async get(id: number): Promise<IResponse> {
        return super.response(200, 'data');
    }

    async create(data: interaccion_posts): Promise<IResponse> {
        try{
            const like : object = await prisma.interaccion_posts.create({
                data:data
            });
            const response:IResponse = await super.response(201,'created');
            return response;
        }catch(e:any){
            const error:IResponse = await super.getInstance(e);
            return error;
        }
    }
}

export default new InteraccionRepository();