

import { IResponse } from "./response.interface";
export interface IValidate extends IResponse
{
    code:number;

    data:Array<any> | string;

    updatedRes():Promise<IResponse>;

    deletedRes():Promise<IResponse>;

    getInstance(error:Error):Promise<IResponse>;

    knowRequestError(error:Error):Promise<IResponse>;

    unknowRequestError(error:Error):Promise<IResponse>;

    rustPanicError(error:Error):Promise<IResponse>;

    initializationError(erro:Error):Promise<IResponse>;

    validationError(error:Error):Promise<IResponse>;

    empty(error:Error):Promise<IResponse>;

    response(code:number, data:Object | Array<any> | String): Promise<IResponse>;

}
