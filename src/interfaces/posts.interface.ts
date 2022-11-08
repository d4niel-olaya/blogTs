import { IRepository, IController} from "./crud.interface";
import { Request, Response } from "express";

export interface IPostsController extends IController<Request, Response>{}


export interface IPostsRepository<TModel, TResponse> extends IRepository<TModel, number, TResponse>{}
