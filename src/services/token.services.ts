import jwt, { JwtHeader, JwtPayload } from "jsonwebtoken";
import { config } from "dotenv";
import {
  TokenTypeE,
  CustomReturnI,
  StatusTypeE,
  PayloadI,
} from "../models/token.interface";
config();
export class TokenServices {
  private readonly customSuccess = (
    token_type: TokenTypeE,
    payload: PayloadI | null | JwtPayload,
    data: any
  ): CustomReturnI => {
    return {
      status_type: StatusTypeE.SUCCESS,
      token_type,
      payload,
      data,
      message: null,
    };
  };

  private readonly customError = (): CustomReturnI => {
    return {
      status_type: StatusTypeE.ERROR,
      token_type: null,
      payload: null,
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
      expiresIn: "1hr",
    });
    return token;
  };

  public readonly validateToken = (
    token_type: TokenTypeE,
    token: string
  ): CustomReturnI => {
    try {
      const validatedToken = jwt.verify(
        token,
        process.env.REACT_FOOD_BACKEND_JWT_SECRET!
      ) as JwtPayload;

      delete validatedToken.iat;
      delete validatedToken.exp;

      console.log("validate_token_token_type", {
        token_type,
        validatedToken,
      });

      return this.customSuccess(token_type, validatedToken, token);
    } catch (error) {
      return this.customError();
    }
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
        return this.customSuccess(
          TokenTypeE.ACCESS_TOKEN,
          null,
          validatedAccessToken.data
        );
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
            validatedRefreshToken.payload
          );
          return this.customSuccess(
            TokenTypeE.ACCESS_TOKEN,
            null,
            generatedAccessToken
          );
        }
      }
      // AccessToken
      const validatedAccessToken = this.validateToken(
        TokenTypeE.ACCESS_TOKEN,
        accessToken
      );
      if (validatedAccessToken.status_type === StatusTypeE.SUCCESS) {
        return validatedAccessToken;
      }
      // RefreshToken
      const validatedRefreshToken = this.validateToken(
        TokenTypeE.REFRESH_TOKEN,
        refreshToken
      );
      if (validatedRefreshToken.status_type === StatusTypeE.SUCCESS) {
        const generatedAccessToken = this.generateAccessToken(
          validatedRefreshToken.payload
        );
        return this.customSuccess(
          TokenTypeE.ACCESS_TOKEN,
          null,
          generatedAccessToken
        );
      }
      return this.customError();
    }
  };
}
