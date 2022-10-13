import { Router } from "express";
import usersController from "../controllers/users.controller";

const router:Router = Router();

router
    .route('/usuarios/:id')
    .get(usersController.show);

router
    .route('/usuarios/create')
    .post(usersController.store)

export default router;
