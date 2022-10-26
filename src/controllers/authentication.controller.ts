import autenticacionRepository from "../repositories/autenticacion.repository";
import { Request, Response } from "express";
import {Controller} from './controller';

class AuthenticacionController
{
    async home(req:Request, res:Response) {
        res.render('home');
    }

    async login(req:Request, res:Response) {
        const user = req.body.user;
        const password = req.body.password;
        const response:any = await autenticacionRepository.verifyUser(user, password);
        
        if(response == 1){
            res.redirect('/posts');
            return;
        }
        res.redirect('/');
    }
}

export default new AuthenticacionController();