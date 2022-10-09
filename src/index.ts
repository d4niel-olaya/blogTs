import express from 'express'
import cookieParser from 'cookie-parser';
const app = express()
app.use(cookieParser());
import { PrismaClient } from '@prisma/client';
app.use(express.json());


const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.sendStatus(200);
})



app.listen(3000)

console.log('server colocado');