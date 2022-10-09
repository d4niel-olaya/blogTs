import { Request, Response } from "express";
import usersRepository from "../repositories/users.repository";
import { IController } from "../interfaces/crud.interface";

class UsuariosController implements IController<Request, Response>{
    async create(req: Request, res: Response): Promise<void> {
        const user = await usersRepository.create(req.body);
        res.sendStatus(201);
    }
}