import { IPostsRepository } from "../interfaces/posts.interface";
import prisma from "../database/database";
import { posts } from "@prisma/client";

import { Validate } from "./validate.repository";

class PostsRepository implements IPostsRepository<posts ,Validate>
{
    async getAll(): Promise<Validate> {
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

    async get(id: number): Promise<Validate> {
        const post:any = await prisma.posts.findUnique({
            where:
            {
                id:id
            }
        });
        return post;
    }

    async create(data: posts): Promise<Validate> {
        const post:any = await prisma.posts.create({
            data:data
        })
        return post;
    }

    async update(id: number, data: posts): Promise<Validate> {
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