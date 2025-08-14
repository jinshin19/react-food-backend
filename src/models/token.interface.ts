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
  data: any | null;
  message: any | null;
}
