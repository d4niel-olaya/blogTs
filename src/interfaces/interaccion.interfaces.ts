import { IRepository, IController } from "./crud.interface";
import { Request, Response } from "express";

export interface ILikeController extends IController<Request, Response>{}


export interface ILikeRepository<TModel, TResponse> extends IRepository<TModel, number, TResponse>{}