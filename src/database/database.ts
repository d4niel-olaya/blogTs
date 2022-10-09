import { PrismaClient } from "@prisma/client"


class Database
{
    private _orm:PrismaClient;

    constructor(){
        this._orm = new PrismaClient();
    }

    get orm(){
        return this._orm;
    }

    async disconnect(){
        this.orm.$disconnect();
    }
}

const prisma = new Database().orm;
export default prisma;