import dotenv from "dotenv";
import pkg from "pg";
dotenv.config();

const { Pool } = pkg;
const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

export default connection;