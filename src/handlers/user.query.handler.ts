import { UserService } from "../services/user.services";

export class UserQueryHandler {
  constructor(private readonly userService = new UserService()) {}

  async isUserAlreadyRegistered(email: string) {
    return await this.userService.isUserAlreadyRegistered(email);
  }
}
