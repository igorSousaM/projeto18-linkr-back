import { Router } from "express";
import postsRouter from "./posts.router.js";
import signRouter from "./signup.router.js"; 


const router = Router();

router.use(signRouter);
router.use(postsRouter);

export default router;
