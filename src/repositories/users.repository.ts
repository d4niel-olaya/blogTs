
import { IUsuariosRepository } from "../interfaces/usuarios.interface";
import prisma from "../database/database";
import { usuarios } from "@prisma/client";

import {Repository} from './repository';
class UsuariosRepository extends Repository implements IUsuariosRepository<usuarios>
{
    constructor() {
        super();
    }

    async create(data:usuarios):Promise<usuarios>
    {
        const user:any = await prisma.usuarios.create({
            data:data
        });
        return user;
    }   

    async get(id: number): Promise<usuarios> {
        const user:any = await prisma.usuarios.findUnique({
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
    async update(id: number, data: usuarios): Promise<usuarios> {
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