

export interface IValidate<TResponse>
{
    verifyBody(data:Object, keys:Object): Promise<Error | void>;

    verifyOrmResponse(data:object):Promise<any>;

    badResponse(msg:TResponse): Promise<Object>;

    response(code:number, msg:Object): Promise<Object>;

}
