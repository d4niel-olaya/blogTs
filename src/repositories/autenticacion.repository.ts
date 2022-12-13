import { IAuthenticacionRepository } from "../interfaces/authentication.interface";
import { usuarios } from "@prisma/client";
import prisma from "../database/database";
import { ResponseModel } from "../models/response/response.model";
import { IResponse } from "../interfaces/response.interface";
class AuthenticacionRepository extends ResponseModel implements IAuthenticacionRepository<IResponse>
{
    constructor(){
        super()
    }

    async verifyUser(email:string, password:string): Promise<IResponse> {
        try{

            const user:any = await prisma.usuarios.count({
                where:{
                    email:email,
                    password:password
                }
            })
            return user;
        }
        catch(e:any){
            const error: IResponse = await super.getInstance(e);
            return error;
        }
    }
    async verifySession(email:string , password:string): Promise<IResponse> {
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
    async getUser(email:string):Promise<IResponse>{
        const user:any = await prisma.usuarios.findMany({
            where:{
                email:email
            }
        })
        return user;
    }

    async signupUser(user:string,email:string,password:string):Promise<IResponse>{
        const request:any = await prisma.$queryRaw`INSERT INTO usuarios(nombre, email,password) VALUES(${user}, ${email}, ${password})`;
        return request
    }
}

export default new AuthenticacionRepository();