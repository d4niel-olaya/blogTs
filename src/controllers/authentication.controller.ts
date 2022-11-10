import autenticacionRepository from "../repositories/autenticacion.repository";
import { Request, Response } from "express";
import {Controller} from './controller';

class AuthenticacionController
{
    async home(req:Request, res:Response) {
        res.render('home');
    }

    async verifySession(req:Request, res:Response) {
        if (!Object.keys(req.cookies).includes('session')){
            res.redirect('/')
        }
    }
    async login(req:Request, res:Response) {
        const user = req.body.user;
        const password = req.body.password;
        const response:any = await autenticacionRepository.verifyUser(user, password);  
        if(response == 1){
            res.cookie('session', 'true');
            res.redirect('/posts');
            return;
        }
        res.redirect('/');
    }

    async logout(req:Request, res:Response) {
        res.clearCookie('session');
        res.redirect('/');
    }
}

export default new AuthenticacionController();