import { Router } from "express";
import { postSignupController } from "../controllers/signup.controller.js";
 

 
const router = Router();

router.post("/signup", postSignupController);


export default router;