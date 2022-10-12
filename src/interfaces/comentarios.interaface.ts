import { Request, Response } from "express";
import { ICreate, IGetOne, IGetAll, IController, IUpdateOne } from "./crud.interface";

export interface IComentariosController extends IController<Request,Response>{}


export interface IComentariosRepository<TModel> extends IGetAll<TModel>, IGetOne<TModel, number>{}




