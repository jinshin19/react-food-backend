import { Router } from "express";
import { CartController } from "../controllers/cart.controller";

const cartController = new CartController();

const router = Router();

router.post("/carts", cartController.addCart);
router.get("/user/carts", cartController.getUserCartById);
router.delete("/user/carts/:cart_id", cartController.deleteUserCartById);

export default router;
