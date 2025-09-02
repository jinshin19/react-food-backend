import { consoleLogger } from "../helpers/console.logger.helper";
import { Request, Response } from "express";
import { TokenServices } from "../services/token.services";
import {
  extractTokenData,
  getAccessToken,
  getRefreshToken,
} from "../helpers/token.helper";
import { ApiResponseHandlerService } from "../services/api.response.handler.services";
import { StatusTypeE } from "../models/token.interface";
import { UserQueryHandler } from "../handlers/user.query.handler";
import { generateCookie } from "../helpers/cookie.helper";

export class AuthController {
  constructor(
    private token = new TokenServices(),
    private apiResponseHandler = new ApiResponseHandlerService(),
    private userQueryHandler = new UserQueryHandler()
  ) {}

  validate = async (request: Request, response: Response) => {
    try {
      const accessToken = getAccessToken(request);
      const refreshToken = getRefreshToken(request);
      let refreshTokenV2: string = refreshToken;

      const tokenData = extractTokenData(accessToken);
      if (!refreshToken) {
        tokenData;
        const user = await this.userQueryHandler.getUserRefreshToken(
          tokenData?.email!,
          tokenData?.user_id!
        );
        refreshTokenV2 = user?.refresh_token!;
      }

      const validatedTokens = this.token.validateTokens(
        accessToken as string,
        refreshToken as string
      );

      if (validatedTokens.status_type === StatusTypeE.ERROR) {
        return this.apiResponseHandler.errorResponseHandler(response, 401);
      }

      generateCookie(
        response,
        `RF-${validatedTokens.data}`,
        validatedTokens?.data
      );
      generateCookie(response, `RF-refreshToken`, refreshTokenV2, true);

      return this.apiResponseHandler.successResponseHandler(response, 200);
    } catch (error: any) {
      consoleLogger(__filename, "validate", error);
      return this.apiResponseHandler.errorResponseHandler(response);
    }
  };
}
