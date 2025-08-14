export const SCRIPTS = {
  USER: {
    GET_USER_BY_EMAIL:
      "select user_id, given_name, family_name, email, picture, refresh_token from react_food.users where email = $1",
    REGISTER_USER:
      "insert into react_food.users (user_id, given_name, family_name, email, picture, refresh_token) values ($1, $2, $3, $4, $5, $6)",
    UPDATE_USER_REFRESH_TOKEN_BY_EMAIL:
      "update react_food.users set refresh_token = $1 where email = $2 and user_id = $3",
  },
};
