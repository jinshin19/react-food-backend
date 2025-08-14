export interface GoogleAuthenticatedUserI {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
}

export interface UserI {
  user_id: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  refresh_token: string;
}

export interface RegisterUserI {
  accessToken: string;
  refreshToken: string;
}
