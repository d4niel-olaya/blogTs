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
        console.log(data);
        return super.response(201,'created');
    }
}

export default new InteraccionRepository();