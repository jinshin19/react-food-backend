import { Router } from "express";
import { FoodController } from "../controllers/food.controller";

const foodController = new FoodController();

const router = Router();

router.get("/foods", foodController.getFoods);
router.get("/foods/:food_id", foodController.getFood);

export default router;
