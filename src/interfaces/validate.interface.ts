
export interface IValidate
{

    updatedRes():Promise<any>;

    deletedRes():Promise<any>;

    getInstance(error:Error):Promise<any>;

    knowRequestError(error:Error):Promise<Object>;

    unknowRequestError(error:Error):Promise<Object>;

    rustPanicError(error:Error):Promise<Object>;

    initializationError(erro:Error):Promise<Object>;

    validationError(error:Error):Promise<Object>;

    empty(error:Error):Promise<Object>;

    response(code:number, data:Object | Array<any> | String): Promise<Object>;

}
