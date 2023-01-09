import { Router } from "express";
import postsRouter from "./posts.router.js";
import signRouter from "./signup.router.js"; 
import hashtagRouter from "./hashtag.router.js";
import likesRouter from "./likes.router.js";


const router = Router();

router.use(signRouter);
router.use(postsRouter);
router.use(hashtagRouter);
router.use(likesRouter);

export default router;
