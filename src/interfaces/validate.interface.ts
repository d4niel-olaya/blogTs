
export interface IValidate
{
    getInstance(error:Error):Promise<any>;

    typeException():Promise<Object>;

    knowRequestError():Promise<Object>;

    unknowRequestError():Promise<Object>;

    rustPanicError():Promise<Object>;

    initializationError(erro:Error):Promise<Object>;

    validationError(error:Error):Promise<Object>;

    empty():Promise<Object>;

    invalidTypeId():Promise<Object>;

    response(code:number, data:Object | Array<any> | String): Promise<Object>;

}
