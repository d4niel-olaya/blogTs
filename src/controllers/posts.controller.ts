import { Request, Response } from "express";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";
import {Controller} from './controller';

class PostsController implements IController<Request, Response>
{
    async index(req: Request, res: Response): Promise<void> {
        try{
            const posts = await postsRepository.getAll();
            res.render('index', {data:posts})
        } catch(e){
            res.sendStatus(409);
        }
    }
    async store(req: Request, res: Response): Promise<void> {
        try{
            const state = await Controller.verifyBody(req.body, ['id_user', 'id_category', 'titulo', 'contenido']);
            if(state){
                const data:any = {"id_user":parseInt(req.body.id_user),
                             "id_category":parseInt(req.body.id_category),
                             "titulo":req.body.titulo,
                             "contenido":req.body.contenido};
                const post = await postsRepository.create(data);
                res.sendStatus(201);
                return;
            }
            res.sendStatus(400);
            return;
        }catch(e) {
            res.sendStatus(409);
        }
    }
}

export default new PostsController();