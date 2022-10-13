import { Router } from "express";
import comentariosController from "../controllers/comentarios.controller";


const router :Router = Router()

router
    .route('/comentarios/:id')
    .get(comentariosController.show);

router
    .route('/comentarios')
    .get(comentariosController.index)
    
export default router;