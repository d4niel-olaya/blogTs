import {IController, IRepository} from './crud.interface';
import {Request,Response} from 'express';

export interface IUsuariosController extends IController<Request,Response>{}


export interface IUsuariosRepository<TModel, TResponse> extends IRepository<TModel , number, TResponse>{}