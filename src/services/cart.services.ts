import { database } from "../database/database";
import { AddCart } from "../models/cart.interfaces";
import { SCRIPTS } from "../scripts/scripts";

export class CartService {
  async getUserCartById(user_id: string) {
    try {
      const result = await database(SCRIPTS.CART.GET_USER_CARTS, [user_id]);
      if (!result.rowCount) {
        return "Failed to get user(s) cart";
      }
      return result.rows;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async addCart(data: AddCart) {
    try {
      const result = await database(SCRIPTS.CART.ADD_CART, [
        data.cart_id,
        "RF-d00b2176-1713-44a5-b0bd-6f136442c144",
        data.food_id,
        data.title,
        data.price,
        data.quantity,
      ]);
      if (!result.rowCount) {
        return "Failed to add the cart";
      }
      return "created";
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteUserCartById(user_id: string, cart_id: string): Promise<boolean> {
    try {
      const result = await database(SCRIPTS.CART.DELETE_USER_CART, [
        user_id,
        cart_id,
      ]);

      if (!result.rowCount) {
        return false;
      }
      return true;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
