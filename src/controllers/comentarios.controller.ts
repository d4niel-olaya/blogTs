import { Request, Response } from "express";
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
}   


export default new ComentariosController();