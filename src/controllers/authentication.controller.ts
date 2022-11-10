import autenticacionRepository from "../repositories/autenticacion.repository";
import { Request, Response } from "express";
import {Controller} from './controller';
// import { usuarios } from "@prisma/client";

class AuthenticacionController
{
    /**
     * Render home
     * @param {Request} req HTTP Request 
     * @param {Response} res HTTP Response 
     * @render Render home view
     * 
     */
    async home(req:Request, res:Response) {
        res.render('home');
    }
    /**
     * 
     * @param {Request} req HTTP Request
     * @param {Response} res HTTP Response
     * @redirect Redirect to home
     */
    async verifySession(req:Request, res:Response) {
        if (!Object.keys(req.cookies).includes('session')){
            res.redirect('/')
        }
    }
    /**
     * 
     * @param {Request} req HTTP Request
     * @param {Response} res HTTP Response
     * @redirect Redirect to posts view or home
     */
    async login(req:Request, res:Response) {
        const user = req.body.user;
        const password = req.body.password;
        const response:any = await autenticacionRepository.verifyUser(user, password);  
        if(response == 1){
            const userId:any = await autenticacionRepository.getUser(user);
            const oneDayToSeconds = 24 * 60 * 60; // maxAge Cookie
            res.cookie('session', 'true', {maxAge:oneDayToSeconds});
            res.cookie('user',userId[0].id , {maxAge:oneDayToSeconds});
            res.redirect('/posts');
            return;
        }
        res.redirect('/');
    }
    /**
     * 
     * @param {Request} req HTTP Request
     * @param {Response} res HTTP Response
     * @redirect Redirect to home and clear all cookies
     */
    async logout(req:Request, res:Response) {
        res.clearCookie('session').clearCookie('user');
        res.redirect('/');
    }
}

export default new AuthenticacionController();