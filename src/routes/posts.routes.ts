import { Router } from "express";
import postsController from "../controllers/posts.controller";
import verifySession from "../helpers/session.middleware";
const router:Router = Router();

// router.get('/posts', verifySession, postsController.index);
router
    .route('/posts')
    .get(postsController.index)
    .post(postsController.store)
    .put(postsController.update)
    .delete(postsController.destroy)
    
router
    .route('/posts/:id')
    .get(postsController.show);
    
export default router;
