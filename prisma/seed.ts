import { PrismaClient } from "@prisma/client";
import {faker} from "@faker-js/faker";
import { CookieOptions } from "express";

const prisma = new PrismaClient();

async function main(){
    
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });