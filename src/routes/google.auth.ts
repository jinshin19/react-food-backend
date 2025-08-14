import { Router, Request, Response } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "",
  }),
  async (request, response) => {
    const user = request.user;
    console.log("user", user);
    // Let's comeback here again to set the data
  }
);

export default router;
