import { database } from "../database/database";
import { FoodI } from "../models/food.interfaces";
import { SCRIPTS } from "../scripts/scripts";

export class FoodServices {
  async getFoods() {
    try {
      const foodQueryResult = await database(SCRIPTS.FOOD.GET_ALL_FOODS, []);
      if (!foodQueryResult.rowCount) {
        return [];
      }
      const foods = foodQueryResult.rows as [];
      return foods as FoodI[];
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getFood(food_id: string) {
    try {
      const foodQueryResult = await database(SCRIPTS.FOOD.GET_SINGLE_FOOD, [
        food_id,
      ]);
      if (!foodQueryResult.rowCount) {
        return null;
      }
      const foods = foodQueryResult.rows as [];
      return foods as FoodI[];
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
