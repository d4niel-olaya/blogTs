import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";

class PostsController implements IController<Request, Response>
{
    async index(req: Request, res: Response): Promise<void> {
        const posts:any = await postsRepository.getAll();
        res.status(posts.code).json(posts.data);
    }

    async show(req:Request, res:Response):Promise<void>{
        const post:any = await postsRepository.get(parseInt(req.params.id));
        res.status(post.code).json(post.data)
    }
    async store(req: Request, res: Response): Promise<void> {
        const body:any = req.body;
        const response:any = await postsRepository.create(body);
        res.status(response.code).json(response.data);

    }

    async update(req: Request, res: Response): Promise<void> {
        const id:any = parseInt(req.params.id);
        const data:any = req.body;
        const response:any = await postsRepository.update(id,data);
        res.status(response.code).json(response.data)
    }
    async destroy(req: Request, res: Response): Promise<void> {
        const id:any = parseInt(req.params.id);
        const response:any = await postsRepository.deleted(id);
        res.status(response.code).json(response.data);
    }
}

export default new PostsController();