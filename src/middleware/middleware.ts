import { NextFunction, Request, Response } from "express";
import { getAccessToken, getRefreshToken } from "../helpers/token.helper";
import { TokenServices } from "../services/token.services";
import { consoleLogger } from "../helpers/console.logger.helper";
import { ApiResponseHandlerService } from "../services/api.response.handler.services";
import { StatusTypeE } from "../models/token.interface";

export const middleWare = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = new TokenServices();
  const apiResponseHandler = new ApiResponseHandlerService();

  try {
    const accessToken = getAccessToken(request);
    const refreshToken = getRefreshToken(request);

    const validatedTokens = token.validateTokens(
      accessToken as string,
      refreshToken as string
    );

    if (validatedTokens.status_type === StatusTypeE.ERROR) {
      return apiResponseHandler.errorResponseHandler(response, 401);
    }

    next();
  } catch (error: any) {
    consoleLogger(__filename, "validate", error);
    return apiResponseHandler.errorResponseHandler(response);
  }
};
