import { Request, Response } from "express";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";
import {Controller} from './controller';

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
        res.status(post.code).json(post.msg)
    }
    async store(req: Request, res: Response): Promise<void> {
        // try{
        //     const state = await Controller.verifyBody(req.body, ['id_user', 'id_category', 'titulo', 'contenido']);
        //     if(state){
        //         const data:any = {"id_user":parseInt(req.body.id_user),
        //                      "id_category":parseInt(req.body.id_category),
        //                      "titulo":req.body.titulo,
        //                      "contenido":req.body.contenido};
        //         const post = await postsRepository.create(data);
        //         res.sendStatus(201);
        //         return;
        //     }
        //     res.sendStatus(400);
        //     return;
        // }catch(e) {
        //     res.sendStatus(409);
        // }
        const body:any = req.body;
        const response:any = await postsRepository.create(body);
        res.status(response.code).json(response.msg);
    }
}

export default new PostsController();