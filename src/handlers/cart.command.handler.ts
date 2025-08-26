import { CartService } from "../services/cart.services";
import { UuidService } from "../services/uuid.service";

export class CartCommandHandler {
  constructor(
    private readonly id = new UuidService(),
    private readonly cartService = new CartService()
  ) {}

  async addCart(data: any): Promise<any> {
    try {
      const cart_id = this.id.generate();
      return this.cartService.addCart({ cart_id, ...data });
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async deleteCart(user_id: string, cart_id: string): Promise<boolean> {
    try {
      return this.cartService.deleteUserCartById(user_id, cart_id);
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
