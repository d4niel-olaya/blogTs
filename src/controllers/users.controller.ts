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
        try{
            const data:any = req.body;
            const result = await usersRepository.create(data);
            res.sendStatus(201);
        }
        catch(e){
            res.sendStatus(409);
        }

    }
    async show(req: Request, res: Response): Promise<void> {
        try{
            const id:any = parseInt(req.params.id);
            const result:any = await super.validateOne(id,usersRepository);
            res.status(result.code).json(result.data);
        }
        catch(e) {
            res.sendStatus(409);
        }
    }
    async update(req: Request, res: Response): Promise<void> {
        try{
            const user:any = req.body;
            const id:any = parseInt(req.params.id);
            const result:any = await usersRepository.update(id,user);
            console.log(result);
            res.sendStatus(204)
        }
        catch(e) {
            res.sendStatus(409);
        }
    }
}

export default new UsuariosController();