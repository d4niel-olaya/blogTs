import { Request, Response } from "express";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";

class PostsController implements IController<Request, Response>
{
    async index(req: Request, res: Response): Promise<void> {
        try{
            const posts = await postsRepository.getAll();
            res.json(posts);
        } catch(e){
            res.sendStatus(409);
        }
    }

    async show(req:Request, res:Response):Promise<void>{
        const post:any = await postsRepository.get(parseInt(req.params.id));
        res.status(200).json(post)
    }
    async store(req: Request, res: Response): Promise<void> {
        const body:any = req.body;
        const response:any = await postsRepository.create(body);
        res.json(response);

    }

    async update(req: Request, res: Response): Promise<void> {
        const id:any = parseInt(req.params.id);
        const data:any = req.body;
        const response:any = await postsRepository.update(id,data);
        res.sendStatus(response.code)
    }
}

export default new PostsController();