import {
  GoogleAuthenticatedUserI,
  RegisterUserI,
} from "../models/user.interfaces";
import { TokenServices } from "../services/token.services";
import { UserService } from "../services/user.services";
import { UuidService } from "../services/uuid.service";

export class UserCommandHandler {
  constructor(
    private readonly id = new UuidService(),
    private readonly userService = new UserService(),
    private readonly tokenServices = new TokenServices()
  ) {}

  async signIn(data: any) {
    try {
      const accessToken = this.tokenServices.generateAccessToken({
        user_id: data.user_id,
        given_name: data.given_name,
        family_name: data.family_name,
        email: data.email,
        picture: data.picture,
      });
      const refreshToken = this.tokenServices.generateRefreshToken({
        user_id: data.user_id,
        given_name: data.given_name,
        family_name: data.family_name,
        email: data.email,
        picture: data.picture,
      });
      await this.userService.signIn(data, refreshToken);
      return {
        accessToken,
        refreshToken,
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
  async signUp(
    data: GoogleAuthenticatedUserI
  ): Promise<RegisterUserI | undefined | null> {
    try {
      const user_id = this.id.generate();
      const accessToken = this.tokenServices.generateAccessToken({
        user_id,
        given_name: data.given_name,
        family_name: data.family_name,
        email: data.email,
        picture: data.picture,
      });
      const refreshToken = this.tokenServices.generateRefreshToken({
        user_id,
        given_name: data.given_name,
        family_name: data.family_name,
        email: data.email,
        picture: data.picture,
      });
      await this.userService.register(user_id, data, refreshToken);
      return {
        accessToken,
        refreshToken,
      };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
