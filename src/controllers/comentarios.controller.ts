import { comentarios } from "@prisma/client";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { IComentariosController } from "../interfaces/comentarios.interaface";
import { IResponse } from "../interfaces/response.interface";
import comentariosRepository from "../repositories/comentarios.repository";



class ComentariosController implements IComentariosController
{
    async show(req: Request, res: Response): Promise<void> {
        const id:number = parseInt(req.params.id)
        const comentario:IResponse = await comentariosRepository.get(id);
        console.log(comentario)
        res.json(comentario)
    }

    async index(req: Request, res: Response): Promise<void> {
        try{
            const comentarios = await comentariosRepository.getAll();
            res.json(comentarios).status(200);
        }
        catch(e){
            res.send(e).status(404)
        }
    }

    async store(req: Request, res: Response): Promise<void> {
        const user : number = parseInt(req.cookies['user']);
        const idPost : number = parseInt(req.body.id_post)
        req.body.id_user = user;
        req.body.id_post= idPost;
        const data : comentarios = req.body
        const response:IResponse = await comentariosRepository.create(data);
        if(response.code == 201){
            res.redirect('/posts')
            return
        }
    }
}   


export default new ComentariosController();