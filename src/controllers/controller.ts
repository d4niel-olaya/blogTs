import {IController} from '../interfaces/crud.interface';
import {Request, Response} from 'express';

export class Controller
{
    async validateTypeid(id:any)
    {
        if( typeof(id) != 'number') throw new Error('Invalid id');
    }   

    async validateData(data:any)
    {
        if( typeof(data) == null) throw new Error('Not found'); 
    }
    async validateOne(id:number, repo:any) 
    {
        
        if( isNaN(id) ) {
            return {code: 400 , data:'Bad request'}
        }
        const data = await repo.get(id);
        if( data === null ) return {code:404, data:'Not found'}
        return {code:200, data: data}
    }
}