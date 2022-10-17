

export interface IValidate<TResponse>
{
    VerifyBody(data:object, keys:Object): Promise<Error | void>;
    VerifyParams(data:object):Promise<any>;

    response(msg:TResponse): Object;
}
