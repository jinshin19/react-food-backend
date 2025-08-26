import { Request, Response } from "express";
import { FoodQueryHandler } from "../handlers/food.query.handler";
import { ApiResponseHandler } from "../services/api.response.handler.services";
import { consoleLogger } from "../helpers/console.logger.helper";
export class FoodController {
  constructor(
    private readonly foodQueryHandler = new FoodQueryHandler(),
    private readonly apiResponseHandler = new ApiResponseHandler()
  ) {}

  getFoods = async (_: Request, response: Response) => {
    try {
      const foods = await this.foodQueryHandler.getFoods();
      return this.apiResponseHandler.successResponseHandler(
        response,
        200,
        foods
      );
    } catch (error: any) {
      consoleLogger(__filename, "getFoods", error);
      return this.apiResponseHandler.errorResponseHandler(response);
    }
  };

  getFood = async (request: Request, response: Response) => {
    try {
      const params = request.params;
      const food_id = params?.food_id;
      const food = await this.foodQueryHandler.getFood(food_id);

      if (!food) {
        return this.apiResponseHandler.errorResponseHandler(response, 404);
      }

      return this.apiResponseHandler.successResponseHandler(
        response,
        200,
        food
      );
    } catch (error: any) {
      consoleLogger(__filename, "getFood", error);
      return this.apiResponseHandler.errorResponseHandler(response, 404);
    }
  };
}
