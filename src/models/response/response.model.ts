import { Prisma, PrismaClient } from "@prisma/client";
import { IValidate } from '../../interfaces/validate.interface';
import { IResponse } from "../../interfaces/response.interface";
export class ResponseModel implements IValidate
{
    public code: number = 200;
    public data: string | any[] = [];

    /**
     * Returns HTTP Delete method successfully response
     * @returns {object} 
     * @example {code:202, data:'Deleted'}
     */
    async deletedRes(): Promise<IResponse> {
        return {code:202, data:'Deleted'}
    }

    /**
     * Returns HTTP Not found request
     * @param error 
     * @returns {object} Object
     * @example
     * {code:404, 'Not found'}
     */
    async empty(error:Error):Promise<IResponse> {
        return {code:404, data:error.message};
    }

    /**
     * ORM Exception
     * @param error 
     * @returns {object}
     */
    async knowRequestError(error:Prisma.PrismaClientKnownRequestError):Promise<IResponse>{   
        return {code:500, data:error.message};
    }

    /**
     * ORM Exception
     * @param error 
     * @returns 
     */
    async rustPanicError(error:Prisma.PrismaClientRustPanicError): Promise<IResponse> {
        return {code:500,data:error.message};
    }
    

    /**
     * ORM Exception
     * @param error 
     * @returns 
     */
    async validationError(error:Prisma.PrismaClientValidationError): Promise<IResponse> {
        const index:number = error.message.search('Argument');
        const arg:string= error.message.slice(index);
        return {code:400, data:arg};
    }

    /**
     * Returns successfull response
     * @param code HTTP Code
     * @param data Object | Array | string
     * @returns {object}
     * @example 
     * {code:200, data:[{id : 1, contenido:'loremipsu'}]}
     */
    async response(code:number,data:object | Array<any> | string): Promise<IResponse> {
        return {code:code, data:data};
    }

    async unknowRequestError(error:Prisma.PrismaClientUnknownRequestError): Promise<IResponse> {
        return {code:500, data:error.message};    
    }

    async updatedRes(): Promise<IResponse> {
        return {code:204,data:''};
    }

    async initializationError(error:Prisma.PrismaClientInitializationError): Promise<IResponse> {
        return {code:500, data:error.message};
    }
    /**
     * Generate a custom response depending by error instance passed
     * @param error Error 
     * @returns {object} Custom response
     * @example 
     * 
     * {code:404, data:'Not found'}
     * 
     */
    async getInstance(error:Error):Promise<any> {
        if(error instanceof Prisma.PrismaClientUnknownRequestError) {
            return await this.unknowRequestError(error);
        }
        if(error instanceof Prisma.PrismaClientInitializationError){
            return await this.initializationError(error);
        }

        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            return await this.knowRequestError(error);
        }

        if(error instanceof Prisma.PrismaClientValidationError) {
            return await this.validationError(error);
        }
        if(error instanceof Prisma.PrismaClientRustPanicError) {
            return await this.rustPanicError(error);
        }
        console.log(error)
        return await this.empty(error);
    }
}



