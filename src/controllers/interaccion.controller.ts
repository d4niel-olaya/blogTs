import { ILikeController } from "../interfaces/interaccion.interfaces";
import { Request, Response } from "express";
import interaccionRepository from "../repositories/interaccion.repository";
import { IResponse } from "../interfaces/response.interface";


class InteraccionController implements ILikeController{
    async index(req: Request, res: Response): Promise<void> {
        const result:IResponse = await interaccionRepository.getAll();
        res.json(result);
    }   
}


