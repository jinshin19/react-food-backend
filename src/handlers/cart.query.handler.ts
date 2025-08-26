import { CartService } from "../services/cart.services";

export class CartQueryHandler {
  constructor(private readonly cartServices = new CartService()) {}

  async getUserCartById(user_id: string) {
    try {
      return await this.cartServices.getUserCartById(user_id);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
