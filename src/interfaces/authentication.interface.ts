

export interface IAuthenticacionRepository<TModel>
{

    verifyUser(email:string):Promise<TModel>;
    
    verifySession(email:string, password:string):Promise<TModel>;
    
}




