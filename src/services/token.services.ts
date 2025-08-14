import jwt from "jsonwebtoken";
import { config } from "dotenv";
import {
  TokenTypeE,
  CustomReturnI,
  StatusTypeE,
} from "../models/token.interface";
config();
const { TokenExpiredError, JsonWebTokenError } = jwt;

export class TokenServices {
  private readonly customSuccess = (
    token_type: TokenTypeE,
    data: any
  ): CustomReturnI => {
    return {
      status_type: StatusTypeE.SUCCESS,
      token_type,
      data,
      message: null,
    };
  };

  private readonly customError = (): CustomReturnI => {
    return {
      status_type: StatusTypeE.ERROR,
      token_type: null,
      data: null,
      message: null,
    };
  };

  public readonly generateAccessToken = (data: any): string => {
    const token = jwt.sign(data, process.env.REACT_FOOD_BACKEND_JWT_SECRET!, {
      expiresIn: "5m",
    });
    return token;
  };

  public readonly generateRefreshToken = (data: any): string => {
    const token = jwt.sign(data, process.env.REACT_FOOD_BACKEND_JWT_SECRET!, {
      expiresIn: "10m",
    });
    return token;
  };

  public readonly validateToken = (
    token_type: TokenTypeE,
    token: string
  ): CustomReturnI => {
    const validatedToken = jwt.verify(
      token,
      process.env.REACT_FOOD_BACKEND_JWT_SECRET!
    );
    if (
      validatedToken instanceof TokenExpiredError ||
      validatedToken instanceof JsonWebTokenError
    ) {
      return this.customError();
    }
    return this.customSuccess(token_type, token);
  };

  public readonly validateTokens = (
    accessToken: string,
    refreshToken: string
  ) => {
    if (!accessToken && !refreshToken) {
      return this.customError();
    } else {
      if (accessToken && !refreshToken) {
        const validatedAccessToken = this.validateToken(
          TokenTypeE.ACCESS_TOKEN,
          accessToken
        );
        return validatedAccessToken;
      }
      if (!accessToken && refreshToken) {
        const validatedRefreshToken = this.validateToken(
          TokenTypeE.REFRESH_TOKEN,
          refreshToken
        );
        if (validatedRefreshToken.status_type === StatusTypeE.ERROR) {
          return validatedRefreshToken;
        } else {
          const generatedAccessToken = this.generateAccessToken(
            validatedRefreshToken.data
          );
          return this.customSuccess(
            TokenTypeE.ACCESS_TOKEN,
            generatedAccessToken
          );
        }
      }
      const validatedAccessToken = this.validateToken(
        TokenTypeE.ACCESS_TOKEN,
        accessToken
      );
      if (validatedAccessToken.status_type === StatusTypeE.SUCCESS) {
        return validatedAccessToken;
      }
      const validatedRefreshToken = this.validateToken(
        TokenTypeE.ACCESS_TOKEN,
        accessToken
      );
      if (validatedRefreshToken.status_type === StatusTypeE.SUCCESS) {
        const generatedAccessToken = this.generateAccessToken(
          validatedRefreshToken.data
        );
        return this.customSuccess(
          TokenTypeE.ACCESS_TOKEN,
          generatedAccessToken
        );
      }
      return this.customError();
    }
  };
}
