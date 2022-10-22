
import { IValidate } from "../interfaces/validate.interface";
import response from "../models/response/response";
import { PrismaClient, Prisma } from "@prisma/client";
export class Repository
{   
    // /**
    //  * Method to return a custom an Error response
    //  * @param  {String} msg - Exception message
    //  * 
    //  * @returns {Object} JSON 
    //  * 
    //  * @example 
    //  * {code:404 , msg: "Not found"}
    //  * {code:400, msg: "Debe ser un número entero"}
    //  * {code :409, msg:"No se pudo realizar la operacion"}
    //  * {code:400, msg:"Falta el nombre"}
    //  */
    
    // async badResponse(msg: ResponseError): Promise<Object> {
    //     if(msg instanceof Prisma.PrismaClientValidationError) console.log(msg.message)
    //     if(msg.name == 'Error') return {"code":409, "msg":msg.message};
    //     return {"code":msg.code,"msg":msg.message};
    // }
    // /**
    //  * Return an custom response if the id passed isNaN
    //  * @param {number} id - url param 
    //  * @returns {Error | void} Custom Error | void 
    //  */
    // async validTypeid(id:number): Promise<Error | void>{
    //     if( isNaN(id) ) throw new ResponseError('El número debe ser entero', 400);

    // }

    // async response(code: number, msg: Object): Promise<Object> {
    //     return {code:code, msg:msg};
    // }
    // /** 
    // *@param {Object} data - Body Request

    // *@param {Object} objSearch - Object with key: datatype-key to search
    
    // *@return {Promise<Error | void>}  Exception
    // */

    // async verifyBody(data: any, objSearch:any): Promise<Error | void> {

    //     for await(let key of Object.keys(objSearch)){
    //         if( !data.hasOwnProperty(key) ){
    //             console.log(data);
    //             throw new ResponseError(`Falta el ${key}`, 400);
    //         }
    //     }
    //     return;
    // }

    // /**
    //  * 
    //  * @param {object} data - Body Request
    //  * 
    //  * @returns true or false
    //  */
    // async verifyOrmResponse(data:object):Promise<Error | void>{
    //     if( data === null){
    //         throw new ResponseError('Not found', 404);
    //     }
    //     return;
    // }

}