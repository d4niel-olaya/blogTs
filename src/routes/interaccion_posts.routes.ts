import { Router } from "express";
import interaccionController from "../controllers/interaccion.controller";

const router : Router = Router()

router
    .route('/like')
    .post(interaccionController.store);

router
    .route('/dontlike/:id')
    .get(interaccionController.destroy);


export default router