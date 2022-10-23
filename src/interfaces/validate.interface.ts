
export interface IValidate
{

    updated():Promise<any>;

    getInstance(error:Error):Promise<any>;

    typeException():Promise<Object>;

    knowRequestError(error:Error):Promise<Object>;

    unknowRequestError(error:Error):Promise<Object>;

    rustPanicError(error:Error):Promise<Object>;

    initializationError(erro:Error):Promise<Object>;

    validationError(error:Error):Promise<Object>;

    empty(error:Error):Promise<Object>;

    invalidTypeId():Promise<Object>;

    response(code:number, data:Object | Array<any> | String): Promise<Object>;

}
