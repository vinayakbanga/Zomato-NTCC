require("dotenv").config();


import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// /configs
import googleAuthConfig from "./config/google.config"


//microservice routs

import Auth from "./API/Auth"


//db connection

import connection from "./database/connection";

const zomato = express();

//application middle ware
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(helmet());
zomato.use(cors());
// zomato.use(passport.initialize());
// zomato.use(passport.session());
// //passport configuration
// googleAuthConfig(passport);



//application routes
zomato.use("/auth",Auth);


zomato.get("/",(req,res)=> {
    res.json({messagr:"setupsucess"})
})



zomato.listen(4000,()=> connection().then (()=>console.log("server is up"))
.catch(()=> console.log("server is running but database connection failed")));