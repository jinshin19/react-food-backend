import { JwtPayload } from "jsonwebtoken";

export enum TokenTypeE {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
}

export enum StatusTypeE {
  SUCCESS = "success",
  ERROR = "error",
}

export interface CustomReturnI {
  status_type: StatusTypeE;
  token_type: TokenTypeE | null;
  payload: PayloadI | JwtPayload | null;
  data: any | null;
  message: any | null;
}

export interface PayloadI {
  user_id: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
}
