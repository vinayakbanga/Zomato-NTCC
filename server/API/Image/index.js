import express from "express"
import res from "express/lib/response";
import passport from "passport"
import AWS from "aws-sdk";
import multer from "multer";//accept the image to user and store it into ram till uploaded to the s3 properly

import { ImageModel} from "../../database/allModel";
import { s3Upload } from "../../Utils/AWS/s3";
//utilities
s3Upload
const Router = express.Router();

//
//Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});

//aws s3 buket setting up
// const s3Bucket= new AWS.S3({
   
//     // accessKeyId:process.env.AWS_S3_ACCESS_KEY,
//     // secretAccessKey:process.env.AWS_S3_SECRET_KEY,
//      accessKeyId:"AKIA6FQECZYODNW7DFTK",
//     secretAccessKey:"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",
//     region:"ap-south-1",
// });


/*
  Route     /i
  Des       upload given image to s3 buket and saves file link to mongo db
  Params    none
  Access    Public
  Method    post 
  */

  Router.post("/", upload.single("file") ,async(req,res)=> {
    try {
   const file = req.file;
  
   //S3 bucket options
   const bucketOptions = {
     Bucket: "trybucket22",
     Key: file.originalname,
     Body: file.buffer,
     ContentType: file.mimetype,
     ACL: "public-read"
   };
    
//    const s3Upload = (options)=>{
//        return new Promise((resolve,reject)=>s3Bucket.upload(options,(error,data)=>{
//            if(error)return reject(error);
//            return resolve(data);
//        })) 
//    }

  
   const uploadImage = await s3Upload(bucketOptions);
  
   return res.status(200).json({ uploadImage });
  
    } catch (error) {
  return res.status(500).json({error: error.message});
    }
  });
  
  export default Router;

