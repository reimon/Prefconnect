import passport from "passport";
import { BearerStrategy } from "passport-azure-ad";

const options = {
  identityMetadata: `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.b2clogin.com/${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=${process.env.AZURE_AD_B2C_POLICY_NAME}`,
  clientID: process.env.AZURE_AD_B2C_CLIENT_ID,
  validateIssuer: false,
  loggingLevel: "info",
  passReqToCallback: false,
};

const bearerStrategy = new BearerStrategy(options, (token, done) => {
  done(null, token);
});

passport.use(bearerStrategy);

export const authenticate = passport.authenticate("oauth-bearer", {
  session: false,
});

export default passport.initialize();
