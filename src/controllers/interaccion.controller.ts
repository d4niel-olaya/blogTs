import { ILikeController } from "../interfaces/interaccion.interfaces";
import { Request, Response } from "express";
import interaccionRepository from "../repositories/interaccion.repository";
import { IResponse } from "../interfaces/response.interface";


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
}


export default new InteraccionController();


