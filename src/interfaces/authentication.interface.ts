

export interface IAuthenticacionRepository<TModel>
{

    verifyUser(email:string, password:string):Promise<TModel>;
    
    verifySession(email:string, password:string):Promise<TModel>;
    
}




