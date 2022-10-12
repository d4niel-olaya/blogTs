import { Router } from "express";
import postsController from "../controllers/posts.controller";

const router:Router = Router();

router
    .route('/posts')
    .get(postsController.getAll);

router
    .route('/posts/create')
    .post(postsController.create);
      
export default router;
