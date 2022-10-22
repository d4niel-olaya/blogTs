import { Request, Response } from "express";
import usersRepository from "../repositories/users.repository";
import { IController } from "../interfaces/crud.interface";
import {Controller} from './controller';

class UsuariosController implements IController<Request, Response>{

    async store(req: Request, res: Response): Promise<void> {
        const body:any = req.body;
        const response:any = await usersRepository.create(body);
    }
    async show(req: Request, res: Response): Promise<void> {

        const id:any = parseInt(req.params.id);
        const result:any = await usersRepository.get(id);
        res.json(result);
    }
    async update(req: Request, res: Response): Promise<void> {
        const user:any = req.body;
        const id:number = parseInt(req.params.id);
        const response:any = await usersRepository.update(id,user);
        res.json(response);
    }
}

export default new UsuariosController();