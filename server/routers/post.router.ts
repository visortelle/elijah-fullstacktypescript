import * as express from "express";
import { postController } from "../controllers";
import { authenticationPolicy } from "../middlewares";
const router: express.Router = express.Router();
router.get("/getPosts", postController.getPosts);
router.get("/post/:id", postController.postPage);
router.post("/postComment", postController.postComment);
router.delete("/deletePost/:userId/:id", postController.deletePost);
router.delete("/deleteComment/:userId/:id", postController.deleteComment);
router.put("/editComment/:commentId", postController.editComment);
router.post("/createPost", postController.createPost);
router.post("/likePost/:id", postController.likePost);
router.post("/dislikePost/:id", postController.disLikePost);
export default router;
