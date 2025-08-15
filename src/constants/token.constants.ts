export const TOKEN = {
  COOKIE_ACCESS_TOKEN: "RF-accessToken",
  COOKIE_REFRESH_TOKEN: "RF-refreshToken",
};

export const API_RESPONSE: Record<number, { MESSAGE: string }> = {
  200: { MESSAGE: "Fetched successfully" },
  201: { MESSAGE: "Created successfully" },
  400: { MESSAGE: "Bad request" },
  401: { MESSAGE: "Unauthorized access" },
  404: { MESSAGE: "Resource not found" },
  405: { MESSAGE: "Method not allowed" },
  409: { MESSAGE: "Conflict detected" },
  500: { MESSAGE: "Internal  server error" },
} as const;

export const CUSTOM_API_MESSAGE_RESPONSE = {
  FAILED: {
    SIGNIN: "Failed to signin",
    SIGNUP: "Failed to signup",
    GOOGLE_AUTHENTICATED: "Failed to autheticate google",
  },
  DELETE: {
    DELETED: "Deleted Successfully",
  },
};
