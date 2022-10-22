import { Prisma, PrismaClient } from "@prisma/client";
import { IValidate } from '../../interfaces/validate.interface';

class ResponseError implements IValidate
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
        const arg = error.message.slice(index);
        return {code:409, msg:arg};
    }

    async typeException(): Promise<Object> {
        return {};
    }

    async response(): Promise<Object> {
        return {};
    }

    async unknowRequestError(): Promise<Object> {
        return {};    
    }

    async initializationError(): Promise<Object> {
        return {};
    }

    async getInstance(error:Error):Promise<any> {
        if(error instanceof Prisma.PrismaClientUnknownRequestError) {
            return
        }
        if(error instanceof Prisma.PrismaClientInitializationError){
            return;
        }

        if(error instanceof Prisma.PrismaClientKnownRequestError) {
            return;
        }

        if(error instanceof Prisma.PrismaClientValidationError) {
            return this.validationError(error);
        }
        if(error instanceof Prisma.PrismaClientRustPanicError) {
            return;
        }

        return;
    }
}

export default new ResponseError();

