import {IController, IRepository} from './crud.interface';
import {Request,Response} from 'express';
import {IPost} from './posts.interface'
export interface IUsuariosController extends IController<Request,Response>{}


export interface IUsuariosRepository<TModel, TResponse> extends IRepository<TModel , number, TResponse>{}



export interface IUsuariosResponse{
    id:number  | null,
    nombre:string | null,
    email:string | null,
    password:string | null,
    posts:IPost[]
}