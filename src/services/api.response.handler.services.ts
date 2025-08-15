import { Response } from "express";
import { API_RESPONSE } from "../constants/token.constants";
export class ApiResponseHandler {
  successResponseHandler(
    response: Response,
    code: number = 200,
    data: any = null,
    message: string | null = null
  ) {
    return response.status(code).send({
      ok: true,
      data,
      error: null,
      message: message || API_RESPONSE[code]?.MESSAGE,
    });
  }

  errorResponseHandler(
    response: Response,
    code: number = 400,
    error: any = null,
    message: string | null = null
  ) {
    return response.status(code).send({
      ok: false,
      data: null,
      error,
      message: message || API_RESPONSE[code]?.MESSAGE,
    });
  }
}
