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
    create?(data:TReturn):Promise<TReturn | TResponse>

    getAll?(idPag?:TypeId, idSkip?:TypeId):Promise<TReturn | TResponse>

    get?(id:TypeId):Promise<TReturn | TResponse>

    update?(id:TypeId, data:TReturn):Promise<TReturn | TResponse>

    deleted?(id:TypeId):Promise<TReturn | TResponse>
}

