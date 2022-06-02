//Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


//Models
import { UserModel } from "../../database/user";

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
        // const { email,password,fullName, phoneNumber }= req.body.credentials;

        //check weather user exits
        await UserModel.findByEmailAndPhone(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);


        // //hashing the pass
        // const bcryptSalt = await bcrypt.genSalt(8);

        // const hashedPassword = await bcrypt.hash(password,bcryptSalt);

        // //save to db

        // await UserModel.create({
        //     ...req.body.credentials,
        //     password:hashedPassword
        // });

        //genrate JWT auth token
        // const token =jwt.sign({user:{fullname , email}},"ZomatoAPP");
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


export default Router;