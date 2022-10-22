import { IPostsRepository } from "../interfaces/posts.interface";
import prisma from "../database/database";
import { posts, Prisma } from "@prisma/client";
import { Repository } from "./repository";
import response from "../models/response/response";
import { type } from "os";
class PostsRepository extends Repository implements IPostsRepository<posts ,Repository>
{
    async getAll(): Promise<Repository> {
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

    async get(id: number): Promise<Repository> {
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
            // const response:any = await super.response(200,post);
            // return response;
            return post;
        }
        catch(e:any) {
            // r
            const res:any = await response.getInstance(e);
            return res;
        }
    }

    async create(data: posts): Promise<Repository> {
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
            response.validationError(e);
            return e;
            // const response:any = await super.badResponse(e);
            // return response;
        }
    }

    async update(id: number, data: posts): Promise<Repository> {
        const post:any = await prisma.posts.update({
            where:{
                id:id
            },
            data:data
        })
        return post;
    }

    async delete(id: number): Promise<Repository> {
        const post:any = await prisma.posts.delete({
            where:{
                id:id
            }
        });
        return post;
    }
    
}

export default new PostsRepository();