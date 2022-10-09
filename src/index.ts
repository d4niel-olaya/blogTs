import express from 'express'
import cookieParser from 'cookie-parser';
const app = express()
app.use(cookieParser());
import { PrismaClient } from '@prisma/client';
import path from 'path';
app.use(express.json());
app.set('view engine', 'pug');
app.set('views',path.join(__dirname, './views'))
const prisma = new PrismaClient();

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/posts')



app.listen(3000)

console.log('server colocado');