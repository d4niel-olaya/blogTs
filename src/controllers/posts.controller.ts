import { Request, Response } from "express";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";

class PostsController implements IController<Request, Response>
{
    async index(req: Request, res: Response): Promise<void> {
        const posts = await postsRepository.getAll();
        res.render('index', {data:posts})
    }
    async store(req: Request, res: Response): Promise<void> {
        const data:any = {"id_user":parseInt(req.body.id_user),
                     "id_category":parseInt(req.body.id_category),
                     "titulo":req.body.titulo,
                     "contenido":req.body.contenido};
        const post = await postsRepository.create(data);
        res.sendStatus(201);
    }
}

export default new PostsController();