import { Router } from "express";
import { getPostsByHashtag, getTrending } from "../controllers/hashtag.controller.js";

const hashtagRouter = Router();

hashtagRouter.get("/hashtags/:hashtag", getPostsByHashtag)
hashtagRouter.get("/trending", getTrending)



export default hashtagRouter;