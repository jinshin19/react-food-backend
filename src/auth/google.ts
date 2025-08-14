import { config } from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.REACT_FOOD_BACKEND_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.REACT_FOOD_BACKEND_GOOGLE_SECRET!,
      callbackURL: process.env.REACT_FOOD_BACKEND_GOOGLE_CALLBACK!,
    },
    (_1, _2, profile, done) => done(null, profile)
  )
);
