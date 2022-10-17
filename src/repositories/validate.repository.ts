import { IValidate } from "../interfaces/validate.interface";
import { ResponseError } from "../models/response/response";

export class Validate implements IValidate<ResponseError>
{
    /** 
    *@param {Object} data - Body Request

    *@param {Object} objSearch - Object with key: datatype-key to search
    
    *@return {Promise<Error | void>}  Exception
    */

    async VerifyBody(data: Object, objSearch:Object): Promise<Error | void> {
        for await(let key of Object.keys(objSearch)){
            if( !data.hasOwnProperty(key) ){
                throw new ResponseError(`Falta el ${key}`, 400);
            }
        }
        return;
    }

    /**
     * 
     * @param {object} data - Body Request
     * 
     * @returns true or false
     */
    async VerifyParams(data:object):Promise<Error | void>{
        if( data === null){
            throw new ResponseError('Not found', 404);
        }
        return;
    }

    /**
     * 
     * @param  {String} msg - Exception message
     * 
     * @returns {Object} JSON 
     * 
     * @example 
     * {code:404 , msg: "Not found"}
     * {code:400, msg: "Debe ser un número entero"}
     * 
     * 
     * 
     * 
     */

    async response(msg: ResponseError): Promise<Object> {
        return {"code":msg.code,"msg":msg.message};
    }

    async ValidTypeid(id:number): Promise<Error | void>{
        if( isNaN(id) ) throw new ResponseError('El número debe ser entero', 400);
    }
}



