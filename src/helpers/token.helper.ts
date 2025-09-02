import { Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { PayloadI } from "../models/token.interface";

export const getAccessToken = (req: Request): string | null => {
  const headers = req.headers;
  const authorization = headers.authorization;
  let value: string | null;
  if (
    !authorization ||
    !authorization.startsWith("Bearer") ||
    authorization === "null" ||
    authorization === "undefined"
  ) {
    value = null;
  }
  value = authorization?.replace("Bearer ", "") as string;
  if (typeof value === "string" && value === "null") {
    return null;
  }
  return value;
};

export const getRefreshToken = (req: Request) => {
  const cookies = req.cookies;
  const refreshToken = cookies?.["RF-refreshToken"] ?? null;
  return refreshToken;
};

export const extractTokenData = (token: string | null): PayloadI | null => {
  if (!token) {
    return null;
  }
  // const decoded = jwt.decode(token);
  const decoded = jwt.decode(token) as JwtPayload;
  delete decoded.iat;
  delete decoded.exp;
  return decoded as PayloadI;
};
