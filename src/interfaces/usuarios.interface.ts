import {ICreate, IDeleteOne, IGetAll, IGetOne, IController} from './crud.interface';
import {Request,Response} from 'express';

export interface IUsuariosController extends IController<Request,Response>{}


export interface IUsuariosRepository<TModel> extends ICreate<TModel>, IGetOne<TModel,number>{}