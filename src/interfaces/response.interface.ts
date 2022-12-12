export interface IResponse{
    code:number,
    data:Array<any> | string | Object
}

export interface update<TModel>{
    code:number,
    data:string | Error
}


