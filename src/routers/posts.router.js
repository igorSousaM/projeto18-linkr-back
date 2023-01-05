import { Router } from "express";
import { postPostsController } from "../controllers/posts.controller.js";
import { postPostsMiddlewares } from "../middlewares/posts.middleware.js";
import { validateSchema } from "../middlewares/shemaValidation.js";
import postPostsSchema from "../models/posts.schema.js";

const postsRouter = Router();

postsRouter.post(
  "/posts",
  validateSchema(postPostsSchema),
  postPostsMiddlewares,
  postPostsController
);

export default postsRouter;
