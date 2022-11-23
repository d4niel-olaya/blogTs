import { Router } from "express";
import authenticationController from "../controllers/authentication.controller";


const router : Router = Router()

router
    .route('/')
    .get(authenticationController.home)

router
    .route('/signup')
    .get(authenticationController.signup)

router
    .route('/login')
    .post(authenticationController.login);

router 
    .route('/register')
    .post(authenticationController.register)

router
    .route('/logout')
    .get(authenticationController.logout);

export default router;