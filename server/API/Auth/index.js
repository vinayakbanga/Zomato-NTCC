//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//Models
import { UserModel } from "../../database/user";
import passport from "passport";
//validation
import { ValidateSignIn, ValidateSignUp } from "../../Validation/auth";


const Router =express.Router();



/*
route /signup
des
signup with email and pass
params none
acess puclic 
method post
*/ 
Router.post("/signup", async (req,res)=>{
  try {
      await ValidateSignUp(req.body.credentials);
      
        // const { email,password,fullName, phoneNumber }= req.body.credentials;

        //check weather user exits
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);

        const token=newUser.generateJwtToken();

        return res.status(200).json({token,status:"sucess"})
        

        
    } catch (error) {
        return res.status(500).json({error:error.message});
        
    }
})
/*
route /signin
des signin with email and pass
params none
acess puclic 
method post
*/
Router.post("/signin", async (req,res)=>{
    try {
      await ValidateSignIn(req.body.credentials);
        // const { email,password,fullName, phoneNumber }= req.body.credentials;

        //check weather user exits
      const user =  await UserModel.findByEmailAndPassword(req.body.credentials);
        

        const token=user.generateJwtToken();

        return res.status(200).json({token,status:"sucess"})
        

        
    } catch (error) {
        return res.status(500).json({error:error.message});
        
    }
});
/*
Route     /google
Des       Google Signin
Params    none
Access    Public
Method    GET  
*/
Router.get(
    "/google",
    passport.authenticate("google", {
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ],
    })
  );
  
  /*
  Route     /google/callback
  Des       Google Signin Callback
  Params    none
  Access    Public
  Method    GET  
  */
  Router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      return res.redirect(
        `http://localhost:4000/google/${req.session.passport.user.token}`
      );
    }
  );
  
  export default Router;