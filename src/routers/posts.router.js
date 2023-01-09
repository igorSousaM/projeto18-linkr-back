import { Router } from "express";
import {
  deletePostsController,
  getPosts,
  postPostsController,
  updatePostsController,
} from "../controllers/posts.controller.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { postValidation } from "../middlewares/posts.middleware.js";
import { validateSchema } from "../middlewares/shemaValidation.js";
import postPostsSchema from "../models/posts.schema.js";

const postsRouter = Router();

postsRouter.post(
  "/posts",
  validateSchema(postPostsSchema),
  authValidation,
  postPostsController
);
postsRouter.get("/timeline", getPosts);

postsRouter.delete(
  "/posts/:id",
  authValidation,
  postValidation,
  deletePostsController
);

postsRouter.patch(
  "/posts/:id",
  authValidation,
  postValidation,
  updatePostsController
);

export default postsRouter;
