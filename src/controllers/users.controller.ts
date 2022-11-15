import { Request, Response } from "express";
import usersRepository from "../repositories/users.repository";
import { IController } from "../interfaces/crud.interface";
import {Controller} from './controller';
import { usuarios } from "@prisma/client";
class UsuariosController implements IController<Request, Response>{
    /**
     * Create user
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     */
    async store(req: Request, res: Response): Promise<void> {
        const body:usuarios = req.body;
        const response:any = await usersRepository.create(body);
    }
    /**
     * Query user by id
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     */
    async show(req: Request, res: Response): Promise<void> {

        const id:number = parseInt(req.params.id);
        const result:any = await usersRepository.get(id);
        res.render('profile', {data:result, id:req.cookies.user})
        // res.json(result)
    }
    /**
     * Update an user
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     */
    async update(req: Request, res: Response): Promise<void> {
        const user:usuarios = req.body;
        const id:number = parseInt(req.params.id);
        const response:any = await usersRepository.update(id,user);
        res.json(response);
    }
}

export default new UsuariosController();