import { IAuthenticacionRepository } from "../interfaces/authentication.interface";
import { usuarios } from "@prisma/client";
import prisma from "../database/database";

class AuthenticacionRepository implements IAuthenticacionRepository<usuarios>
{

    async verifyUser(email:string, password:string): Promise<usuarios> {
        const user:any = await prisma.usuarios.count({
            where:{
                email:email,
                password:password
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
    async getUser(email:string):Promise<usuarios>{
        const user:any = await prisma.usuarios.findMany({
            where:{
                email:email
            }
        })
        return user;
    }
}

export default new AuthenticacionRepository();