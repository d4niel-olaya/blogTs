export interface IController<TRequest, TResponse>
{
    store?(req:TRequest, res:TResponse):Promise<void>

    index?(req:TRequest, res:TResponse):Promise<void>

    show?(req:TRequest, res:TResponse):Promise<void>

    update?(req:TRequest, res:TResponse):Promise<void>

    destroy?(req:TRequest, res:TResponse):Promise<void>




}


export interface IRepository<TReturn , TypeId, TResponse>
{
    create?(data:TReturn):Promise<TResponse>

    getAll?():Promise<TResponse>

    get?(id:TypeId):Promise<TResponse>

    update?(id:TypeId, data:TReturn):Promise<TResponse>

    delete?(id:TypeId):Promise<TResponse>
}

