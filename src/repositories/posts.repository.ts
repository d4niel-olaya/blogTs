import { IPostsRepository } from "../interfaces/posts.interface";
import prisma from "../database/database";
import { posts } from "@prisma/client";
import { Repository } from "./repository";

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
            await super.validTypeid(id);
            const post:any = await prisma.posts.findUnique({
                where:
                {
                    id:id
                },
                include: {
                    usuarios:true
                }
            });
            await super.verifyOrmResponse(post);
            const response:any = await super.response(200,post);
            return response;

        }
        catch(e:any) {
            const response:any = await super.badResponse(e);
            return response;
        }
    }

    async create(data: posts): Promise<Repository> {
        try{
            await super.verifyBody(data, prisma.posts);
            const post:any = await prisma.posts.create({
                data:data
            })
            const response:any = await super.response(201,post);
            return response;
        }
        catch(e:any){
            const response:any = await super.badResponse(e);
            return response;
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
    
}

export default new PostsRepository();