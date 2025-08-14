import { config } from "dotenv";
import { Pool, QueryArrayResult } from "pg";
config();

const pgPool = new Pool({
  user: process.env.REACT_FOOD_BACKEND_USER,
  password: process.env.REACT_FOOD_BACKEND_PASSWORD,
  database: process.env.REACT_FOOD_BACKEND_DATABASE,
  host: process.env.REACT_FOOD_BACKEND_HOST,
});

export const database = async (scripts: any, query: any[]) => {
  try {
    const result = await pgPool.query(scripts, query);
    return result as QueryArrayResult;
  } catch (error: any) {
    console.log("Error Found:", {
      file: "database.js",
      method: "database",
      error,
    });
    throw new Error(error);
  }
};
