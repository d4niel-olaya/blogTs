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
            const state = await Controller.verifyBody(data, ['nombre', 'email', 'password'])
            if( state ){
                const result = await usersRepository.create(data);
                res.sendStatus(201);
                return;
            }
            res.sendStatus(400);
            return;
        }
        catch(e){
            res.status(409).json(e);
        }

    }
    async show(req: Request, res: Response): Promise<void> {

        const id:any = parseInt(req.params.id);
        const result:any = await usersRepository.get(id);
        res.send(result);
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