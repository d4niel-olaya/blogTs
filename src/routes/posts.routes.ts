import { Router } from "express";
import postsController from "../controllers/posts.controller";
import verifySession from "../helpers/session.middleware";
const router:Router = Router();

// router.get('/posts', verifySession, postsController.index);
router
    .route('/posts')
    .get(postsController.index)
    .post(postsController.store)

router
    .route('/posts/update/:id')
    .post(postsController.update)

router
    .route('/post/delete/:id')
    .get(postsController.destroy)
    
router
    .route('/posts/:id')
    .get(postsController.show);


// Api route 
router
    .route('/api/v1/posts')
    .get(postsController.getAll);
    
export default router;
