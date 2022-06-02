import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: true },
    email:{type:String, required:true},
    password:{type:String},
    address: [{detail: {type: String}, for: {type:String}}],
    phoneNumber: [{type:Number}]

},{
    timestamps:true
});
UserSchema.methods.generateJwtToken = function () {
    return jwt.sign({ user: this._id.toString() }, "ZomatoAPP");
  };
  
  UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
    // check whether email exist
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });
  
    if (checkUserByEmail || checkUserByPhone) {
      throw new Error("User Already Exist...!");
    }
  
    return false;
  };
  
  UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
    // check whether email exist
    const user = await UserModel.findOne({ email });
    if (!user) throw new Error("User does no exist!!!");
  
    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);
  
    if (!doesPasswordMatch) throw new Error("invalid Password!!!");
  
    return user;
  };
  
  UserSchema.pre("save", function (next) {
    const user = this;
  
    // password is modified
    if (!user.isModified("password")) return next();
  
    // generate bcrypt salt
    bcrypt.genSalt(8, (error, salt) => {
      if (error) return next(error);
  
      // hash the password
      bcrypt.hash(user.password, salt, (error, hash) => {
        if (error) return next(error);
  
        // assigning hashed password
        user.password = hash;
        return next();
      });
    });
  });
//ading static method

// UserSchema.statics.findByEmailAndPhone = async( email, phoneNumber)=>{
//      //check weather user exits
//      const checkUserByEmail = await UserModel.findOne({ email });
//      const checkUserByPhone = await UserModel.findOne({ phoneNumber });

//      if(checkUserByEmail || checkUserByPhone){
//         throw new Error("User Already Exist...!");
//     }

//     return false;


// };

// //jwt token
// UserSchema.methods.genrateJwtToken = function(){
//    return jwt.sign({user:this._id.toSreing()},"ZomatoAPP");
// }

export const UserModel = mongoose.model("Users",UserSchema);

