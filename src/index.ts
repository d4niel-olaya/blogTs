import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';
import postsRouter from '../src/routes/posts.routes';
import comentariosRouter from '../src/routes/comentarios.routes';
import usuariosRouter from '../src/routes/usuarios.routes';
import authRouter from '../src/routes/auth.routes';
import path from 'path';
import verifySession from './helpers/session.middleware';

const app = express()

app.use(cookieParser());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.set('view engine', 'pug');

app.set('views',path.join(__dirname, './views'))


app.use(authRouter);
app.use((req,res,next) =>{ // Callback to protect routes 
    if(!Object.keys(req.cookies).includes('session') || req.cookies['session'] ===  ''){
        res.redirect('/');
    }
    else{
        next()
    }
})
app.use(postsRouter);
app.use(comentariosRouter);
app.use(usuariosRouter);
app.listen(3000)

console.log('server colocado');