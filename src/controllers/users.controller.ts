import { Request, Response, NextFunction } from "express";
import usersRepository from "../repositories/users.repository";
import { IController } from "../interfaces/crud.interface";
import {Controller} from './controller';
import { usuarios } from "@prisma/client";
import { ResponseModel } from "../models/response/response.model";
import { IResponse } from "../interfaces/response.interface";
class UsuariosController implements IController<Request, Response>{
    /**
     * Create user
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     */
    async store(req: Request, res: Response): Promise<void> {
        const body:usuarios = req.body;
        const response:any = await usersRepository.create(body);
        if(response.code != 201){
            res.redirect('/');
        }
    }
    /**
     * Query user by id
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     */
    async show(req: Request, res: Response): Promise<void> {
        const id:number = parseInt(req.params.id)
        const result:IResponse = await usersRepository.get(id);
        console.log(result)
        res.render('profile', {code:result.code ,data:result.data, id:req.cookies.user})
    }
    /**
     * Update an user
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     */
    async update(req: Request, res: Response): Promise<void> {
        const user:usuarios = req.body;
        const id:number = parseInt(req.params.id);
        const response:IResponse = await usersRepository.update(id,user);
        res.json(response);
    }

    
    async postByWord(req:Request, res:Response){
        const id:number = parseInt(req.params.id)
        const search:any = req.query.word;
        const result:any = await usersRepository.getByWord(id,search)
        console.log(result)
        res.render('posts_by_word', {data:result[0], id:id})
        // console.log(req.params)
        // console.log(req.query)
        // res.redirect('/posts')
    }
}

export default new UsuariosController();