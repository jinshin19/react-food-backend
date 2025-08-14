import { database } from "../database/database";

export const isUserAlreadyRegister = async (
  email: string
): Promise<UserI | UserI | null | undefined> => {
  try {
    const user = await database(
      "select user_id, given_name, family_name, email, picture from react_food.users where email = $1",
      [email]
    );
    if (!user.rowCount) {
      return null;
    }
    const userData = user.rows[0] as {};
    return userData as UserI;
  } catch (error) {
    console.log("Error Found:", {
      file: "user.helper.ts",
      method: "isUserAlreadyRegister",
      error: error,
    });
  }
};

export const signIn = async () => {
  try {
  } catch (error) {
    console.log("Error Found:", {
      file: "user.helper.ts",
      method: "signIn",
      error: error,
    });
  }
};

signIn();

export const signUp = () => {
  try {
  } catch (error) {
    console.log("Error Found:", {
      file: "user.helper.ts",
      method: "signUp",
      error: error,
    });
  }
};

interface UserI {
  user_id: string;
  given_name: string;
  family_name: string;
  email: string;
  picture: string;
}
