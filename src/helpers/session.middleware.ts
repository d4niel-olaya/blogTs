
import {Request, Response} from 'express';


async function verifySession(req:Request, res:Response){
    if (!Object.keys(req.cookies).includes('session') || req.cookies['session'] === 'false'){
            res.redirect('/')
    }
    return
}

export default verifySession