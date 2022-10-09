import { IPostsRepository } from "../interfaces/posts.interface";
import prisma from "../database/database";
import { posts } from "@prisma/client";



class PostsRepository implements IPostsRepository<posts>
{
    async getAll(): Promise<posts> {
        const posts:any = await prisma.posts.findMany({
            include:
            {
                comentarios:true,
                categorias:true
            }
        });

        return posts;
    }
    
    async get(id: number): Promise<posts> {
        const post:any = await prisma.posts.findUnique({
            where:
            {
                id:id
            }
        });
        return post;
    }

    async create(data: posts): Promise<posts> {
        const post:any = await prisma.posts.create({
            data:data
        })
        return post;
    }

    async update(id: number, data: posts): Promise<posts> {
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