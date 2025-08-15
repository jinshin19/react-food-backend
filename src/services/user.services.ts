import { database } from "../database/database";
import {
  GoogleAuthenticatedUserI,
  RegisterUserI,
  UserI,
} from "../models/user.interfaces";
import { SCRIPTS } from "../scripts/scripts";

export class UserService {
  async isUserAlreadyRegistered(email: string) {
    try {
      const user = await database(SCRIPTS.USER.GET_USER_BY_EMAIL, [email]);
      if (!user.rowCount) {
        return null;
      }
      const userData = user.rows[0] as {};
      return userData as UserI;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async register(
    user_id: string,
    data: GoogleAuthenticatedUserI,
    refreshToken: string
  ): Promise<undefined | null> {
    try {
      const user = await database(SCRIPTS.USER.REGISTER_USER, [
        user_id,
        data.given_name,
        data.family_name,
        data.email,
        data.picture,
        refreshToken,
      ]);

      if (!user.rowCount) {
        return null;
      }
      return;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async signIn(
    data: UserI,
    refreshToken: string
  ): Promise<RegisterUserI | undefined | null> {
    try {
      const user = await database(
        SCRIPTS.USER.UPDATE_USER_REFRESH_TOKEN_BY_EMAIL,
        [refreshToken, data.email, data.user_id]
      );

      if (!user.rowCount) {
        return null;
      }
      return;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
