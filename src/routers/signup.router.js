import { Router } from "express";
import { postSigninController } from "../controllers/signin.controller.js";
import { getSignupController, postSignupController } from "../controllers/signup.controller.js";
import { validateSchema } from "../middlewares/shemaValidation.js";
import { postSigninMiddlewares } from "../middlewares/signin.middlewares.js";
import { postSignupMiddlewares } from "../middlewares/signup.middlewares.js";
import postSigninSchema from "../models/signin.schema.js";
import { postSignupSchema } from "../models/signup.schema.js";

const router = Router();

router.post(
  "/signup",
  validateSchema(postSignupSchema),
  postSignupMiddlewares,
  postSignupController
);
router.post(
  "/signin",
  validateSchema(postSigninSchema),
  postSigninMiddlewares,
  postSigninController
);
router.get("/signup", getSignupController)

export default router;
