import { Router } from "express";
import { postCommentController } from "../controllers/comments.controller.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { postValidation } from "../middlewares/posts.middleware.js";
import { validateSchema } from "../middlewares/shemaValidation.js";
import { commentSchema } from "../models/comments.schema.js";

const commentsRouter = Router();

commentsRouter.post(
  "/posts/:id/comments",
  validateSchema(commentSchema),
  authValidation,
  postValidation,
  postCommentController
);

export { commentsRouter };
