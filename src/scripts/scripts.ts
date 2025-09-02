export const SCRIPTS = {
  USER: {
    GET_USER_REFRESH_TOKEN_BY_EMAIL_AND_ID:
      "select refresh_token from react_food.users where email = $1 and user_id = $2",
    GET_USER_BY_EMAIL:
      "select user_id, given_name, family_name, email, picture, refresh_token from react_food.users where email = $1",
    REGISTER_USER:
      "insert into react_food.users (user_id, given_name, family_name, email, picture, refresh_token) values ($1, $2, $3, $4, $5, $6)",
    UPDATE_USER_REFRESH_TOKEN_BY_EMAIL:
      "update react_food.users set refresh_token = $1 where email = $2 and user_id = $3",
  },
  FOOD: {
    GET_ALL_FOODS:
      "select food_id, name, price, ingredients, picture from react_food.food",
    GET_SINGLE_FOOD:
      "select food_id, name, price, ingredients, picture from react_food.food where food_id = $1",
  },
  CART: {
    GET_USER_CARTS: `
      select title, price, quantity from react_food.cart where user_id = $1
    `,
    ADD_CART: `
    insert into react_food.cart (cart_id, user_id, food_id, title, price, quantity)
    values ($1, $2, $3, $4, $5, $6)
    `,
    DELETE_USER_CART: `
      delete from react_food.cart where user_id = $1 and cart_id = $2
    `,
  },
};
