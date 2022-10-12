import { Router } from "express";
import usersController from "../controllers/users.controller";

const router:Router = Router();

router
    .route('/usuarios/:id')
    .get(usersController.getOne);

router
    .route('/usuarios/create')
    .post(usersController.create)

export default router;
