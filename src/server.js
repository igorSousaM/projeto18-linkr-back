import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import  signupRouter from './routers/signup.router.js'
import postsRouter from "./routers/posts.router.js";

  
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());


 
app.use(signupRouter)
app.use(postsRouter)
  
const port = process.env.PORT
app.listen(port, () => {
  console.log(`listening on port ${port} 👌`);
});