import { Router } from "express";


const router:Router = Router();

router
    .route('/posts')
    .get()