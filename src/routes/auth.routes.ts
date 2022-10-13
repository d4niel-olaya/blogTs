import { Router } from "express";
import authenticationController from "../controllers/authentication.controller";


const router : Router = Router()

router
    .route('/login')
    .post(authenticationController.Verify);


export default router;