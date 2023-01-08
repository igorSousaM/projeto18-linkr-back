import { Router } from "express";
<<<<<<< HEAD
import { deletePostsController, postPostsController } from "../controllers/posts.controller.js";
import { deletePostsMiddlewares, postPostsMiddlewares } from "../middlewares/posts.middleware.js";
=======
import { getPosts, postPostsController } from "../controllers/posts.controller.js";
import { postPostsMiddlewares } from "../middlewares/posts.middleware.js";
>>>>>>> main
import { validateSchema } from "../middlewares/shemaValidation.js";
import postPostsSchema from "../models/posts.schema.js";

const postsRouter = Router();

postsRouter.post(
  "/posts",
  validateSchema(postPostsSchema),
  postPostsMiddlewares,
  postPostsController
);
postsRouter.get(
  "/timeline",
  getPosts
);

postsRouter.delete('/posts/:id', deletePostsMiddlewares,deletePostsController)

export default postsRouter;
