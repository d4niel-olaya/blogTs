import { Router } from "express";
import interaccionController from "../controllers/interaccion.controller";

const router : Router = Router()

router
    .route('/like')
    .post(interaccionController.store);

export default router