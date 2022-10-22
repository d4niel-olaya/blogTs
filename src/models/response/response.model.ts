import { Prisma, PrismaClient } from "@prisma/client";
import { IValidate } from '../../interfaces/validate.interface';

export class ResponseModel implements IValidate
{
    
    async invalidTypeId() {
        return {};
    }

    async empty() {
        return {};
    }

    async knowRequestError(){   
        return {};
    }

    async rustPanicError(): Promise<Object> {
        return {};
    }
    
    async validationError(error:Prisma.PrismaClientValidationError): Promise<Object> {
        const index:number = error.message.search('Argument');
        const arg:String = error.message.slice(index);
        return {code:409, msg:arg};
    }

    async typeException(): Promise<Object> {
        return {};
    }

    async response(code:number,data:Object | Array<any> | String): Promise<Object> {
        return {code,data};
    }

    async unknowRequestError(): Promise<Object> {
        return {};    
    }

    async initializationError(error:Prisma.PrismaClientInitializationError): Promise<Object> {
        return {code:500, data:error.message};
    }

    async getInstance(error:Error):Promise<any> {
        if(error instanceof Prisma.PrismaClientUnknownRequestError) {
            return
        }
        if(error instanceof Prisma.PrismaClientInitializationError){
            return await this.initializationError(error);
        }

        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            return;
        }

        if(error instanceof Prisma.PrismaClientValidationError) {
            return await this.validationError(error);
        }
        if(error instanceof Prisma.PrismaClientRustPanicError) {
            return;
        }

        return;
    }
}



