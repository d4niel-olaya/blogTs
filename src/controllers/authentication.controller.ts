import autenticacionRepository from "../repositories/autenticacion.repository";
import { Request, Response } from "express";
import {Controller} from './controller';

class AuthenticacionController
{
    async Verify(req:Request, res:Response)
    {   
        const state = await Controller.verifyBody(req.body, ['email', 'password']);
        if( state ){
            const count:any = await autenticacionRepository.verifyUser(req.body.email);
            if( count > 0 ) {
                const found = await autenticacionRepository.verifySession(req.body.email, req.body.password);
                res.status(201).json(found);
                return;
            }
            res.sendStatus(404)
            return;
        }   
        res.sendStatus(400);
    }
}

export default new AuthenticacionController();