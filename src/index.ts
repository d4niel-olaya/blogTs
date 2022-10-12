import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';
import postsRouter from '../src/routes/posts.routes';
import comentariosRouter from '../src/routes/comentarios.routes';
import path from 'path';


const app = express()

app.use(cookieParser());

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

app.set('view engine', 'pug');

app.set('views',path.join(__dirname, './views'))

// app.get('/', (req, res) => {
//     res.render('index');
// })

app.use(postsRouter);
app.use(comentariosRouter);

app.listen(3000)

console.log('server colocado');