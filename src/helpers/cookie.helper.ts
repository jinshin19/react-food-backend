import { Response } from "express";
export const generateCookie = (
  res: Response,
  name: string,
  value: string,
  httpOnly: boolean = false
) => {
  res.cookie(name, value, {
    httpOnly,
    secure: false,
    path: "/",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const clearCookie = (res: Response, name: string) => {
  res.clearCookie(name, {
    httpOnly: true,
    secure: false,
    path: "/",
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const getCookie = (cookie: any, name: string) => {
  let match = cookie?.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
  return null;
};
