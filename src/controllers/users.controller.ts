import { Request, Response } from "express";
import usersRepository from "../repositories/users.repository";
import { IController } from "../interfaces/crud.interface";

class UsuariosController implements IController<Request, Response>{
    async create(req: Request, res: Response): Promise<void> {
        try{
            const user = await usersRepository.create(req.body);
            res.sendStatus(201);

        }
        catch(e){
            res.sendStatus(409);
        }

    }
    async getOne(req: Request, res: Response): Promise<void> {
        try{
            const id:any = parseInt(req.params.id);
            const user = await usersRepository.get(id);
            res.json(user).status(200);
        }
        catch(e){
            res.json({code:404, msg:e}).status(404);
        }
    }
}

export default new UsuariosController();