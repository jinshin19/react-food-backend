import { UserService } from "../services/user.services";

export class UserQueryHandler {
  constructor(private readonly userService = new UserService()) {}

  async isUserAlreadyRegistered(email: string) {
    return await this.userService.isUserAlreadyRegistered(email);
  }
  async getUserRefreshToken(email: string, user_id: string) {
    return await this.userService.getUserRefreshToken(email, user_id);
  }
}
