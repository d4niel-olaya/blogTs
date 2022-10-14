

export interface IAuthenticacionRepository<TModel>
{
    verifyBody(body:object):Promise<boolean>;

    verifyUser(email:string):Promise<TModel>;
    
    verifySession(email:string, password:string):Promise<TModel>;
    
}




