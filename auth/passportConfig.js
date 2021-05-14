const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userDAO = require("../dao/user.dao");
exports.configure = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, done) => {
        // const newUser = {
        //   googleId: profile.id,
        //   displayName: profile.displayName,
        //   firstName: profile.name.givenName,
        //   lastName: profile.name.familyName,
        //   image: profile.photos[0].value,
        // };
        // try {
        //   let user = await userDAO.getUser(profile.id);
        //   if (user) {
        //     done(null, user);
        //   } else {
        //     user = await userDAO.addUser(newUser);
        //     done(null, user);
        //   }
        // } catch (err) {
        //   console.error(err);
        // }

        return done(null, profile);
      }
    )
  );

  /* Serialize user */
  passport.serializeUser((user, done) => {
    // done(null, user.id);
    done(null, user);
  });

  /* Deserialize user */
  passport.deserializeUser((user, done) => {
    // userDAO
    //   .findById(id)
    //   .then((user) => done(null, user))
    //   .catch((err = done(err)));

    done(null, user);
  });
};
