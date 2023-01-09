import { Router } from "express";
import { postLikes } from "../controllers/likes.controller.js";

const likesRouter = Router();

likesRouter.post("/likes",postLikes)











export default likesRouter;