export interface IResponse<TORM> {
    orm:any;
}

export interface update<TModel>{
    code:number,
    data:string | Error
}