import { FoodServices } from "../services/food.services";

export class FoodQueryHandler {
  constructor(private readonly foodServices = new FoodServices()) {}

  async getFoods() {
    try {
      return await this.foodServices.getFoods();
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async getFood(food_id: string) {
    try {
      return await this.foodServices.getFood(food_id);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
