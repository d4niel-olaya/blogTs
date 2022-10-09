export interface IController<TRequest, TResponse>
{
    create?(req:TRequest, res:TResponse):Promise<void>

    getAll?(req:TRequest, res:TResponse):Promise<void>

    getOne?(req:TRequest, res:TResponse):Promise<void>

    update?(req:TRequest, res:TResponse):Promise<void>

    delete?(req:TRequest, res:TResponse):Promise<void>




}

export interface ICreate<TReturn>
{
    create(data:TReturn):Promise<TReturn>
}

export interface IGetAll<TReturn>
{
    getAll():Promise<TReturn>
}
export interface IGetOne<TReturn, TypeId>
{
    get(id:TypeId):Promise<TReturn>
}

export interface IUpdateOne<TReturn, TypeId>
{
    update(id:TypeId, data:TReturn):Promise<TReturn>
}

export interface IDeleteOne<TReturn, TypeId>
{
    delete(id:TypeId):Promise<TReturn>
}

