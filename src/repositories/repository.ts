import {IRepository} from '../interfaces/repository.interface';

export class Repository implements IRepository
{
    ValidateAll(): Error {
        throw new Error('No hay una colleción');
    }

    ValidateDeleted(): Error {
        throw new Error('No fue posible borrar');
    }

    ValidateOne(data:any): Error {
        throw new Error('No existe');
    }

    ValidateUpdate(): Error {
        throw new Error('No fue posible actualizar');
    }
}