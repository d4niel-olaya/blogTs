import { Request, Response } from "express";
import usersRepository from "../repositories/users.repository";
import { IController } from "../interfaces/crud.interface";
import {Controller} from './controller';

class UsuariosController extends Controller implements IController<Request, Response>{

    constructor()
    {
        super();
    }
    async store(req: Request, res: Response): Promise<void> {
        

    }
    async show(req: Request, res: Response): Promise<void> {
        const id:number = parseInt(req.params.id);
        const result:any = await super.validateOne(id,usersRepository);
        res.status(result.code).json(result.data);
    }
}

export default new UsuariosController();