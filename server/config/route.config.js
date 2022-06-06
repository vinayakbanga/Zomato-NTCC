import JwtPassport from "passport-jwt";

//Database Model
import { UserModel } from "../database/user";



const JwtStratergy= JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "ZomatoApp"
  };
  
  export default (passport) => {
    passport.use(
    new JwtStratergy(options, async(jwt__payload, done)=>{
      try {
        const doesUserExist = UserModel.findById(jwt__payload.user);
        if(!doesUserExist) return done(null, false);
  
        return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
  };