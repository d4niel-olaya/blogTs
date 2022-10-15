

export interface IValidate
{
    VerifyBody(data:object, keys:Array<string>):Promise<Boolean>;

    VerifyResponse(data:any):Promise<any>;
}
