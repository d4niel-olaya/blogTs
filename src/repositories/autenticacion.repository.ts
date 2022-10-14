import { IAuthenticacionRepository } from "../interfaces/authentication.interface";
import { usuarios } from "@prisma/client";
import prisma from "../database/database";

class AuthenticacionRepository implements IAuthenticacionRepository<usuarios>
{

    async verifyBody(body:object):Promise<boolean>{
        const entries = Object.keys(body);
        if(entries.includes('email') && entries.includes('password')) return true;
        return false;
    }

    async verifyUser(email:string): Promise<usuarios> {
        const user:any = await prisma.usuarios.count({
            where:{
                email:email
            }
        })
        return user;
    }
    async verifySession(email:string , password:string): Promise<usuarios> {
        const user:any = await prisma.usuarios.count({
            where:{
                AND:{
                    email:email,
                    password:password
                }
            }
        })
        return user;
    }
}

export default new AuthenticacionRepository();