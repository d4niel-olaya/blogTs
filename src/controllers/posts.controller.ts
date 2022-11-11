import { Request, Response } from "express";
import { IController } from "../interfaces/crud.interface";
import postsRepository from "../repositories/posts.repository";
import { posts } from '@prisma/client';
import { ResponseModel } from "../models/response/response.model";
class PostsController implements IController<Request, Response>
{
    /**
     * Get all posts
     * @param {Request}res HTTP Request
     * @param {Response}req HTTP Response
     * @render index view
     */
    async index(req: Request, res: Response): Promise<void> {
        const posts:ResponseModel = await postsRepository.getAll();
        // res.status(posts.code).json(posts.data);
        res.render('index', {data:posts.data, code:posts.code});
    }
    /**
     * Query post by id
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     * @render post view
     */
    async show(req:Request, res:Response):Promise<void>{
        const post:ResponseModel = await postsRepository.get(parseInt(req.params.id));
        // res.status(post.code).json(post.data)
        res.render('post', {data:post.data, code:post.code})
    }
    /**
     * Create a post
     * @param {Request}req HTTP Request
     * @param {Response}res HTTP Response
     * @response Express response 
     */
    async store(req: Request, res: Response): Promise<void> {
        const body:posts = req.body;
        const response:ResponseModel = await postsRepository.create(body);
        res.status(response.code).json(response.data);

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
        const response:ResponseModel = await postsRepository.update(id,data);
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
        const response:ResponseModel = await postsRepository.deleted(id);
        res.status(response.code).json(response.data);
    }
}

export default new PostsController();