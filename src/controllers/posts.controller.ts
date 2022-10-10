import { Request, Response } from "express";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";

class PostsController implements IController<Request, Response>
{
    async getAll(req: Request, res: Response): Promise<void> {
        const posts = await postsRepository.getAll();
        res.render('index', {data:posts})
    }
}

export default new PostsController();