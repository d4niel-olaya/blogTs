import { IPostsRepository } from "../interfaces/posts.interface";
import prisma from "../database/database";
import { posts, Prisma } from "@prisma/client";
import { ResponseModel } from "../models/response/response.model";
import { IResponse } from "../interfaces/response.interface";
class PostsRepository extends ResponseModel implements IPostsRepository<posts ,IResponse>
{
    constructor() {
        super();
    }
    async getAll(idPag:number, idSkip:number): Promise<IResponse> {
        try{

            const posts:object | null = await prisma.posts.findMany({
                take:idPag,
                skip:idSkip,
                include:
                {
                    usuarios:true,
                    comentarios:{
                        include:{
                            usuarios:{
                                select:{
                                    id:true,
                                    nombre:true,
                                    foto:true
                                }
                            },
                            interaccion_comentarios:{
                                include:{
                                    usuarios:{
                                        select:{
                                            id:true,
                                            nombre:true,
                                            foto:true
                                        }
                                    }
                                }
                            }
                        },

                    },
                    interaccion_posts:{
                        include:{
                            usuarios:{
                                select:{
                                    id:true,
                                    nombre:true,
                                    foto:true
                                }
                            }
                        }
                    },
                    categorias:true
                }
            });
            const response:IResponse = await super.response(200, posts);
            return response;
        }
        catch(e:any) {
            const error:IResponse = await super.getInstance(e);
            return error;
        }
    }

    async get(id: number): Promise<IResponse> {
        try{
            const post:object | null = await prisma.posts.findUnique({
                where:
                {
                    id:id
                },
                include: {
                    usuarios:true,
                    categorias:true,
                    comentarios:{
                        include:{
                            usuarios:{
                                select:{
                                    id:true,
                                    nombre:true,
                                }
                            },
                            interaccion_comentarios:{
                                include:{
                                    usuarios:{
                                        select:{
                                            id:true,
                                            nombre:true
                                        }
                                    }
                                }
                            }
                        }
                    },
                    interaccion_posts:{
                        include:{
                            usuarios:{
                                select:{
                                    id:true,
                                    nombre:true,
                                    foto:true
                                }
                            }
                        }
                    },
                }
            });
            if(post === null) throw new Error('Not found');
            const response:IResponse = await super.response(200,post);
            return response;
        }
        catch(e:any) {
            const res:IResponse = await super.getInstance(e);
            return res;
        }
    }

    async create(data: posts): Promise<IResponse> {
        try{
           
            const post:object | null = await prisma.posts.create({
                data:data
            })
            const response:IResponse = await super.response(201,'Created');
            return response;
        }
        catch(e:any){
            return await super.getInstance(e);
        }
    }

    async update(id: number, data: posts): Promise<IResponse> {
        try{
            const post:object | null = await prisma.posts.update({
                where:{
                    id:id
                },
                data:data
            })
            return await super.updatedRes();
        }
        catch(e:any) {  
            return await super.getInstance(e);
        }
    }

    async deleted(id: number): Promise<IResponse> {
        try{
            const post:object | null = await prisma.posts.delete({
                where:{
                    id:id
                }
            });
            const response:IResponse = await super.deletedRes();
            return response;
        }
        catch(e:any) {
            return await super.getInstance(e);
        }
    }
    
}

export default new PostsRepository();