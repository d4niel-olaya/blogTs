import express, { urlencoded } from 'express'
import cookieParser from 'cookie-parser';
import { PrismaClient } from '@prisma/client';
import postsRouter from '../src/routes/posts.routes';
import comentariosRouter from '../src/routes/comentarios.routes';
import usuariosRouter from '../src/routes/usuarios.routes';
import authRouter from '../src/routes/auth.routes';
import path, { dirname } from 'path';
import verifySession from './helpers/session.middleware';
import interaccionRouter from '../src/routes/interaccion_posts.routes';
const app = express()

app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.set('view engine', 'pug');

app.set('views',path.join(__dirname, './views'))

app.use(authRouter);
app.use(verifySession);
app.use(postsRouter);
app.use(comentariosRouter);
app.use(usuariosRouter);
app.use(interaccionRouter);
app.listen(3000)

console.log("Server colocado : http://localhost:3000");