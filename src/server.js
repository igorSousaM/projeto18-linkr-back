import  express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import router from "./routers/index.js";

  
const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());


 
app.use(router)
  
const port = process.env.PORT
app.listen(port, () => {
  console.log(`listening on port ${port} 👌`);
});