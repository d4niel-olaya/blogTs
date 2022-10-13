export interface IController<TRequest, TResponse>
{
    store?(req:TRequest, res:TResponse):Promise<void>

    index?(req:TRequest, res:TResponse):Promise<void>

    show?(req:TRequest, res:TResponse):Promise<void>

    update?(req:TRequest, res:TResponse):Promise<void>

    destroy?(req:TRequest, res:TResponse):Promise<void>




}


export interface IRepository<TReturn , TypeId>
{
    create?(data:TReturn):Promise<TReturn>

    getAll?():Promise<TReturn>

    get?(id:TypeId):Promise<TReturn>

    update?(id:TypeId, data:TReturn):Promise<TReturn>

    delete?(id:TypeId):Promise<TReturn>
}

