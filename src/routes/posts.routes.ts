import { Router } from "express";
import postsController from "../controllers/posts.controller";

const router:Router = Router();

router
    .route('/posts')
    .get(postsController.index);

router
    .route('/posts/:id')
    .get(postsController.show);
router
    .route('/posts/create')
    .post(postsController.store);
      
export default router;
