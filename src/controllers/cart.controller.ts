import { Request, Response } from "express";
import { ApiResponseHandlerService } from "../services/api.response.handler.services";
import { consoleLogger } from "../helpers/console.logger.helper";
import { CartCommandHandler } from "../handlers/cart.command.handler";
import { CartQueryHandler } from "../handlers/cart.query.handler";
import { getCookie } from "../helpers/cookie.helper";
import { CUSTOM_API_MESSAGE_RESPONSE } from "../constants/token.constants";
export class CartController {
  constructor(
    private readonly cartQueryHandler = new CartQueryHandler(),
    private readonly cartCommandHandler = new CartCommandHandler(),
    private readonly apiResponseHandler = new ApiResponseHandlerService()
  ) {}

  getUserCartById = async (request: Request, response: Response) => {
    try {
      const cookies = request.cookies;
      // Comeback here later
      // const cookieResult = getCookie(cookies, "SMA-accessToken");
      const carts = await this.cartQueryHandler.getUserCartById(
        "RF-d00b2176-1713-44a5-b0bd-6f136442c144"
      );

      console.log("cart", carts);

      if (!carts) {
        return this.apiResponseHandler.errorResponseHandler(response, 404);
      }

      return this.apiResponseHandler.successResponseHandler(
        response,
        200,
        carts
      );
    } catch (error: any) {
      consoleLogger(__filename, "addCart", error);
      return this.apiResponseHandler.errorResponseHandler(response, 400);
    }
  };

  addCart = async (request: Request, response: Response) => {
    try {
      const data = request.body;
      const cart = await this.cartCommandHandler.addCart(data);

      if (!cart) {
        return this.apiResponseHandler.errorResponseHandler(response, 404);
      }

      return this.apiResponseHandler.successResponseHandler(
        response,
        201,
        null
      );
    } catch (error: any) {
      consoleLogger(__filename, "addCart", error);
      return this.apiResponseHandler.errorResponseHandler(response, 400);
    }
  };

  deleteUserCartById = async (request: Request, response: Response) => {
    try {
      const params = request.params;
      const cart_id = params?.cart_id ?? null;

      const cookies = request.cookies;
      // Comeback here later
      // const cookieResult = getCookie(cookies, "SMA-accessToken");
      const cart = await this.cartCommandHandler.deleteCart(
        "RF-d00b2176-1713-44a5-b0bd-6f136442c144",
        cart_id
      );

      if (!cart) {
        return this.apiResponseHandler.errorResponseHandler(response, 404);
      }

      return this.apiResponseHandler.successResponseHandler(
        response,
        200,
        null,
        CUSTOM_API_MESSAGE_RESPONSE.DELETE.DELETED
      );
    } catch (error: any) {
      consoleLogger(__filename, "addCart", error);
      return this.apiResponseHandler.errorResponseHandler(response, 400);
    }
  };
}
