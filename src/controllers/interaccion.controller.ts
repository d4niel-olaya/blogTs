import { ILikeController } from "../interfaces/interaccion.interfaces";
import { Request, Response } from "express";
import interaccionRepository from "../repositories/interaccion.repository";
import { IResponse } from "../interfaces/response.interface";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";


class InteraccionController implements ILikeController{
    async index(req: Request, res: Response): Promise<void> {
        const result:IResponse = await interaccionRepository.getAll();
        res.json(result);
    }   



    async store(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const user:number = parseInt(req.cookies["user"]);
        const post:number = parseInt(req.body.id_post)
        req.body.id_user = user;
        req.body.id_post = post;
        const responseLike:IResponse = await interaccionRepository.create(req.body);
        if(responseLike.code === 201){
            res.redirect('/posts')
            return
        }
        res.json(responseLike);
    }

    async destroy(req: Request, res: Response): Promise<void> {
        const id:number = parseInt(req.params.id);
        const deletedLike : IResponse = await interaccionRepository.deleted(id);
        if(deletedLike.code === 202){
            res.redirect('/posts');
            return
        }
        res.json(deletedLike);
    }
}


export default new InteraccionController();


