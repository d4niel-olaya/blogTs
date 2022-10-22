import { IPostsRepository } from "../interfaces/posts.interface";
import prisma from "../database/database";
import { posts } from "@prisma/client";
import { ResponseModel } from "../models/response/response.model";
class PostsRepository extends ResponseModel implements IPostsRepository<posts ,ResponseModel>
{
    constructor() {
        super();
    }
    async getAll(): Promise<ResponseModel> {
        const posts:any = await prisma.posts.findMany({
            include:
            {
                usuarios:true,
                comentarios:{
                    include:{
                        usuarios:true
                    }
                },
                categorias:true
            }
        });

        return posts;
    }

    async get(id: number): Promise<ResponseModel> {
        try{
            const post:any = await prisma.posts.findUnique({
                where:
                {
                    id:id
                },
                include: {
                    usuarios:true,
                    categorias:true
                }
            });
            const response:any = await super.response(200,post);
            return response;
        }
        catch(e:any) {
            // r
            const res:any = await super.getInstance(e);
            return res;
        }
    }

    async create(data: posts): Promise<ResponseModel> {
        try{
           
            const post:any = await prisma.posts.create({
                data:data
            })
            // const response:any = await super.response(201,post);
            // return response;
            return post;
        }
        catch(e:any){
            // console.log(e.stack);
            super.validationError(e);
            return e;
            // const response:any = await super.badResponse(e);
            // return response;
        }
    }

    async update(id: number, data: posts): Promise<ResponseModel> {
        const post:any = await prisma.posts.update({
            where:{
                id:id
            },
            data:data
        })
        return post;
    }

    async delete(id: number): Promise<ResponseModel> {
        const post:any = await prisma.posts.delete({
            where:{
                id:id
            }
        });
        return post;
    }
    
}

export default new PostsRepository();