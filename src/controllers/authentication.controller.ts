import autenticacionRepository from "../repositories/autenticacion.repository";
import { Request, Response } from "express";

class AuthenticacionController
{
    async Verify(req:Request, res:Response)
    {   
        const body = req.body.email;
        const count:any = await autenticacionRepository.verifyUser(body);
        if( count > 0 ) {
            const fount = await autenticacionRepository.verifySession(req.body.email, req.body.password)
            res.json(fount);
            return;
        } 
        res.sendStatus(404);
    }
}

export default new AuthenticacionController();