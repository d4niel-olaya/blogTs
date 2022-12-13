import { IRepository, IController} from "./crud.interface";
import { Request, Response } from "express";

export interface IPostsController extends IController<Request, Response>{}


export interface IPostsRepository<TModel, TResponse> extends IRepository<TModel, number, TResponse>{}


export interface IPost{
    id:number  | null,
    id_user:number | null,
    id_category:number | null,
    titulo:string | null,
    contenido:string | null,
    fecha:string | null,
    interaccion_posts:[] | null,
    categorias:{} | null,
    comentarios:[] | null
}