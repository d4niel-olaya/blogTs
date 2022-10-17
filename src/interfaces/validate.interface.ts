

export interface IValidate
{
    VerifyBody(data:object, keys:Object): Promise<Error | void>;
    VerifyParams(data:object):Promise<any>;

    Response(msg:String): Object;
}
