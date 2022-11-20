
import {Request, Response} from 'express';


async function verifySession(req:Request, res:Response){
    res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    res.sendStatus(401)
}

export default verifySession
