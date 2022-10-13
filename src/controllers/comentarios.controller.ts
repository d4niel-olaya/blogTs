import { Request, Response } from "express";
import { IComentariosController } from "../interfaces/comentarios.interaface";
import comentariosRepository from "../repositories/comentarios.repository";



class ComentariosController implements IComentariosController
{
    async show(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id)
        try{
            const comentario = await comentariosRepository.get(id);
            res.send(comentario).status(200);
        }
        catch(e){
            res.sendStatus(404);
        }
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