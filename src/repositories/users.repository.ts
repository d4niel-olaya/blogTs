
import { IUsuariosRepository } from "../interfaces/usuarios.interface";
import prisma from "../database/database";
import { usuarios } from "@prisma/client";
import { Validate } from "./validate.repository";

import {Repository} from './repository';
class UsuariosRepository extends Repository implements IUsuariosRepository<usuarios,Validate>
{
    async create(data:usuarios):Promise<Validate>
    {
        const {nombre, email, password} = data;
        const user:any = await prisma.$queryRaw`INSERT INTO usuarios(nombre,email,password) VALUES(${nombre},${email},aes_encrypt(${password},'xyz'))`;
        return user;
    }   

    async get(id: number): Promise<Validate> {
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
    async update(id: number, data: usuarios): Promise<Validate> {
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