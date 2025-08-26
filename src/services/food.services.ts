import { Foods } from "../data/react-food-data";

export class FoodServices {
  async getFoods() {
    try {
      return Foods;
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getFood(food_id: string) {
    try {
      const foods = Foods.filter((f) => f.food_id === food_id);
      return foods[0];
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
