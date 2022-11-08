import { Request, Response } from "express";
import {  IController , IRepository} from "./crud.interface";

export interface IComentariosController extends IController<Request,Response>{}


export interface IComentariosRepository<TModel, TResponse> extends IRepository<TModel, number, TResponse>{}




