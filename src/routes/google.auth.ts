import { Router } from "express";
import passport from "passport";
import { UserQueryHandler } from "../handlers/user.query.handler";
import { UserCommandHandler } from "../handlers/user.command.handler";
import { GoogleAuthenticatedUserI } from "../models/user.interfaces";
import { generateCookie } from "../helpers/cookie.helper";
import { TOKEN } from "../constants/token.constants";
import { config } from "dotenv";
config();

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
    try {
      const user: GoogleAuthenticatedRequest =
        request.user as GoogleAuthenticatedRequest;

      if (user === undefined || user === null || !user) {
        console.log("Failed to login", {
          file: "google.auth.ts",
          method: "/auth/google/callback",
        });
        return response.status(404).send({
          ok: false,
          data: null,
          message: "Something went wrong",
        });
      }

      const userData: GoogleAuthenticatedUserI = user._json;
      const userQueryHandler = new UserQueryHandler();
      const userCommandHandler = new UserCommandHandler();

      const isRegistered = await userQueryHandler.isUserAlreadyRegistered(
        userData.email
      );

      if (!isRegistered) {
        const signedUp = await userCommandHandler.signUp(userData);
        if (!signedUp) {
          return response.status(400).send({
            ok: false,
            data: null,
            error: null,
            message: "Failed to signup",
          });
        }
        generateCookie(
          response,
          TOKEN.COOKIE_ACCESS_TOKEN,
          signedUp.accessToken
        );
        generateCookie(
          response,
          TOKEN.COOKIE_REFRESH_TOKEN,
          signedUp.refreshToken,
          true
        );

        return response
          .status(201)
          .redirect(
            process.env.REACT_FOOD_BACKEND_GOOGLE_AUTHENTICATED_REDIRECT!
          );
      }

      const signedIn = await userCommandHandler.signIn(isRegistered);
      if (!signedIn) {
        return response.status(400).send({
          ok: false,
          data: null,
          error: null,
          message: "Failed to signin",
        });
      }
      generateCookie(response, TOKEN.COOKIE_ACCESS_TOKEN, signedIn.accessToken);
      generateCookie(
        response,
        TOKEN.COOKIE_REFRESH_TOKEN,
        signedIn.refreshToken,
        true
      );

      return response
        .status(200)
        .redirect(
          process.env.REACT_FOOD_BACKEND_GOOGLE_AUTHENTICATED_REDIRECT!
        );
    } catch (error) {
      console.log("Failed to login", {
        file: "google.auth.ts",
        method: "/auth/google/callback",
      });
      return response.status(400).send({
        ok: false,
        data: null,
        message: error,
      });
    }
  }
);

export default router;

interface GoogleAuthenticatedRequest {
  id: string;
  displayName: string;
  name: {
    familyName: string;
    givenName: string;
  };
  emails: [];
  photos: [];
  provider: string;
  _raw: string;
  _json: GoogleAuthenticatedUserI;
}
