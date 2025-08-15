import { Router } from "express";
import passport from "passport";
import { UserQueryHandler } from "../handlers/user.query.handler";
import { UserCommandHandler } from "../handlers/user.command.handler";
import { GoogleAuthenticatedUserI } from "../models/user.interfaces";
import { generateCookie } from "../helpers/cookie.helper";
import {
  CUSTOM_API_MESSAGE_RESPONSE,
  TOKEN,
} from "../constants/token.constants";
import { config } from "dotenv";
import { ApiResponseHandler } from "../services/api.response.handler.services";
import { consoleLogger } from "../helpers/console.logger.helper";
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
    const apiResponseHandler = new ApiResponseHandler();

    try {
      const user: GoogleAuthenticatedRequest =
        request.user as GoogleAuthenticatedRequest;

      if (user === undefined || user === null || !user) {
        consoleLogger(__filename, "/auth/google/callback");
        return apiResponseHandler.errorResponseHandler(
          response,
          404,
          null,
          CUSTOM_API_MESSAGE_RESPONSE.FAILED.GOOGLE_AUTHENTICATED
        );
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
          return apiResponseHandler.errorResponseHandler(
            response,
            400,
            null,
            CUSTOM_API_MESSAGE_RESPONSE.FAILED.SIGNUP
          );
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
        return apiResponseHandler.errorResponseHandler(
          response,
          400,
          "",
          CUSTOM_API_MESSAGE_RESPONSE.FAILED.SIGNIN
        );
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
      consoleLogger(__filename, "/auth/google/callback");
      return apiResponseHandler.errorResponseHandler(
        response,
        400,
        "",
        CUSTOM_API_MESSAGE_RESPONSE.FAILED.GOOGLE_AUTHENTICATED
      );
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
