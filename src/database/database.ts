import { PrismaClient } from "@prisma/client"


export abstract class Database
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