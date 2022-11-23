import { Router } from "express";
import authenticationController from "../controllers/authentication.controller";


const router : Router = Router()

router
    .route('/')
    .get(authenticationController.home)

router
    .route('/signup')
    .get(authenticationController.register)

router
    .route('/login')
    .post(authenticationController.login);

router 
    .route('/register')
    .post(authenticationController.signup)

router
    .route('/logout')
    .get(authenticationController.logout);

export default router;