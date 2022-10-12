
import { IUsuariosRepository } from "../interfaces/usuarios.interface";
import prisma from "../database/database";
import { usuarios } from "@prisma/client";
class UsuariosRepository implements IUsuariosRepository<usuarios>
{
    async create(data:usuarios):Promise<usuarios>
    {
        const user:any = await prisma.usuarios.create({
            data:data
        });
        return user;
    }   

    async get(id: number): Promise<usuarios> {
        const user:any = await prisma.usuarios.findUniqueOrThrow({
            where:
            {
                id:id
            },
            include:{
                posts:true
            }
        });
        return user;
    }
}

export default new UsuariosRepository();