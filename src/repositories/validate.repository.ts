import { type } from 'os';
import { IValidate } from '../interfaces/validate.interface';


export class Validate implements IValidate
{
    VerifyBody(data: object, keys: string[]): Promise<Boolean> {
        throw new Error('Method not implemented.');
    }
    VerifyResponse(data: any): Promise<any> {
        throw new Error('Method not implemented.');
    }
    static async VerifyBody(data: object, keys:Array<string>): Promise<Boolean> {
        let count:number = 0;
        for await(let key of Object.keys(data)){
            if ( keys.includes(key) ) count++;
            if (count == keys.length) return true;
        }
        return false;
    }
    static async VerifyResponse(data:any):Promise<any>{
        if( data === null){
            return false;
        }
        return true;
    }
}

