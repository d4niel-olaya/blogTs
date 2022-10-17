import { IValidate } from "../interfaces/validate.interface";


export class Validate implements IValidate
{
    /** 
    *@param {Object} data - Body Request

    *@param {Object} objSearch - Object with key: datatype-key to search
    
    *@return {Promise<Error | void>}  Exception
    */

    async VerifyBody(data: Object, objSearch:Object): Promise<Error | void> {
        for await(let key of Object.keys(objSearch)){
            if( !data.hasOwnProperty(key) ){
                throw new Error(`No esta incluido ${key}`);
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
            throw new Error('Not found');
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
     * {"msg": "Not found"}
     * {"msg": "Debe ser un número entero"}
     * 
     * 
     * 
     * 
     */

    async Response(msg: String): Promise<Object> {
        return {"msg":msg};
    }

    async ValidTypeid(id:number): Promise<Error | void>{
        if( isNaN(id) ) throw new Error('Debe ser un número entero');
    }
}



