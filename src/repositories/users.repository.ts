
import { IUsuariosRepository } from "../interfaces/usuarios.interface";
import prisma from "../database/database";
import { usuarios } from "@prisma/client";
import { Repository } from "./repository";

/**
 * @implements {IUsuariosRepository<usuarios, Repository>}
 * 
 * @extends {Repository}
 */
class UsuariosRepository extends Repository implements IUsuariosRepository<usuarios,Repository>
{
    constructor() {
        super();
    }
    /**
    *@param {usuarios} data - Body request
    *@return {Promise<Validate>}  ValidateClass response
    */
    async create(data:usuarios):Promise<usuarios | Repository>
    {   
        try{
            const {nombre, email, password} = data;
            const user:any = await prisma.$queryRaw`INSERT INTO usuarios(nombre,email,password) VALUES(${nombre},${email},aes_encrypt(${password},'xyz'))`;
            const response:any = await super.response(201,user);
            return response;
        }
        catch(e:any){
            const response:any = await super.badResponse(e);
            return response;
        }
    }   

    async get(id: number): Promise<usuarios | Repository> {
        try{
            await super.validTypeid(id); // Verify id 
            const user:any = await prisma.usuarios.findUnique({
                where:
                {
                    id:id
                },
                include:{
                    posts:true
                }
            });
            await super.verifyOrmResponse(user); // Verify orm response
            const response:any = await super.response(200,user);
            return response;

        }
        catch(e:any){
            const response:any = await super.badResponse(e); // Custom response
            return response
        }
    }
    async update(id: number, data: usuarios): Promise<Repository> {
        const user:any = await prisma.usuarios.update({
            where:{
                id:id
            },
            data:data
        });
        return user;
    }
}

export default new UsuariosRepository();