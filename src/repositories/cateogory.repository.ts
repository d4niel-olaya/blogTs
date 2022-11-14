import { categorias } from "@prisma/client";
import prisma from "../database/database";

class CategoryRepository{
    async getAll():Promise<object | null>{
        const ctgs: object | null = await prisma.categorias.findMany();
        return ctgs;
    }
}

export default new CategoryRepository();