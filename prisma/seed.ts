import { PrismaClient } from "@prisma/client";
import {faker} from "@faker-js/faker";
import { CookieOptions } from "express";

const prisma = new PrismaClient();

async function main(){
    for (let i = 0; i < 100; i++){
      // await prisma.usuarios.create({
      //   data:{
      //     nombre:faker.name.firstName(),
      //     email:faker.internet.email(),
      //     password:faker.lorem.word(),
      //   }
      // })
      // await prisma.categorias.create({
      //   data:{
      //     nombre:faker.name.jobArea()
      //   }
      // })
        // await prisma.posts.create({
        //   data:{
        //     id_user:faker.datatype.number({min:1, max:100}),
        //     id_category:faker.datatype.number({min:1, max:20}),
        //     titulo:faker.random.word(),
        //     contenido:faker.lorem.paragraphs(5)
        //     }
        // })

        await prisma.comentarios.create({
          data:{
            id_user:faker.datatype.number({min:1,max:100}),
            id_post:faker.datatype.number({min:1,max:100}),
            contenido:faker.lorem.text()
          }
        })
    }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });