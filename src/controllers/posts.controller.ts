import { Request, Response} from "express";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";
import cateogoryRepository from "../repositories/cateogory.repository";
import { posts } from '@prisma/client';
import { ResponseModel } from "../models/response/response.model";
import { IResponse } from "../interfaces/response.interface";
class PostsController implements IController<Request, Response>
{
    /**
     * Get all posts
     * @param {Request}res HTTP Request
     * @param {Response}req HTTP Response
     * @render index view
     */
    async index(req: Request, res: Response): Promise<void> {
        let num :any  = req.query.page
        if(num === undefined) num = 1;
        const idpag : number = parseInt(num) * 10
        const posts:IResponse = await postsRepository.getAll(10, idpag-10);
        const ctgs:object | null = await cateogoryRepository.getAll(); 
        const objResponse: object = { 
            data:posts.data,
            code:posts.code,
            categorias:ctgs,
            id:req.cookies.user,
            created:req.query.created || null,
            page:num
        }
        // res.json(objResponse);
        res.render('index', objResponse);
    }
    /**
     * Query post by id
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     * @render post view
     */
    async show(req:Request, res:Response):Promise<void>{
        const post:IResponse = await postsRepository.get(parseInt(req.params.id));
        res.render('post', {data:post.data, code:post.code, id:req.cookies['user']})
    }
    /**
     * Create a post
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     * @response Express response 
     */
    async store(req: Request, res: Response): Promise<void> {
        const user = parseInt(req.cookies['user']);
        const id_c = parseInt(req.body.id_category);
        req.body.id_user = user;
        req.body.id_category = id_c
        const body:posts = req.body;
        const response:IResponse = await postsRepository.create(body);
        if(response.code == 201){
            res.redirect('/posts?created=true');
            return;
        }

    }
    /**
     * Update a post
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     * @response Express response 
     * @example
     * 
     * {code:200, data:'No content'}
     */
    async update(req: Request, res: Response): Promise<void> {
        const id:number = parseInt(req.params.id);
        const data:posts = req.body;
        const response:IResponse = await postsRepository.update(id,data);
        if(response.code == 204){
            res.redirect('/posts')
            return;
        }
        res.status(response.code).json(response.data)
    }
    /**
     * Delete a post by id
     * @param {Request} req HTTP Request
     * @param {Response} res HTTP Response
     * @response Express response
     */
    async destroy(req: Request, res: Response): Promise<void> {
        const id:number = parseInt(req.params.id);
        const response:IResponse = await postsRepository.deleted(id);
        res.redirect('/posts')
    }

    async getAll(req:Request, res:Response):Promise<void>{
        let num : any = req.query.page
        if(num == undefined) num = 1
        const idpag:number = parseInt(num) * 10
        const posts:IResponse = await postsRepository.getAll(10, idpag-10);
        res.json(posts.data);
    }
}

export default new PostsController();