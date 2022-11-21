
import {NextFunction, Request, Response} from 'express';
import AuthenticationRepository from '../repositories/autenticacion.repository';
import base64 from 'base-64'
async function decode(authHeader : string){
    const encodedCredentials = authHeader
    .trim()
    .replace(/Basic\s+/i, '');

  const decodedCredentials = base64.decode(encodedCredentials);

  return decodedCredentials.split(':');
}
async function verifySession(req:Request, res:Response, next:NextFunction){
    console.log(decode(req.headers.authorization || ''));
    const [user, password] = await decode(req.headers.authorization || '');
    const response : any = await AuthenticationRepository.verifyUser(user,password);
    if(response == 1){
        const userId:any = await AuthenticationRepository.getUser(user);
        const oneDayToSeconds = 24 * 60 * 60; // maxAge Cookie
        res.cookie('session', 'true', {maxAge:oneDayToSeconds});
        res.cookie('user',userId[0].id , {maxAge:oneDayToSeconds});
        return next()
    }

    res.set('WWW-Authenticate', 'Basic realm="user_pages"');
    res.sendStatus(401)
}

export default verifySession
