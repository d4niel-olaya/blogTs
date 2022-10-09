import { ICreate, IGetOne, IGetAll, IController, IUpdateOne } from "./crud.interface";
import { Request, Response } from "express";

export interface IPostsController extends IController<Request, Response>{}


export interface IPostsRepository<TModel> extends IGetAll<TModel>, IGetOne<TModel, number>, ICreate<TModel>, IUpdateOne<TModel, number>{}
