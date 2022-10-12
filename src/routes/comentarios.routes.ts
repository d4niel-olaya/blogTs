import { Router } from "express";
import comentariosController from "../controllers/comentarios.controller";


const router :Router = Router()

router
    .route('/comentarios/:id')
    .get(comentariosController.getOne);

router
    .route('/comentarios')
    .get(comentariosController.getAll)
    
export default router;