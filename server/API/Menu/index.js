import express from "express"
import passport from "passport"

import { MenuModel} from "../../database/allModel";
const Router = express.Router();

/*
  Route     /list
  Des       Get all list menu based on id
  Params    id
  Access    Public
  Method    GET  
  */

  Router.get("/list/:_id",async(req,res)=>{
      try {
          const {_id}= req.params;
          const menus= await MenuModel.findOne(_id);

          return res.json({menus});

          
      } catch (error) {
          return res.status(500).json({error: error.message})
          
      }
  });
   /*
  Route            /image
  Des              get menu image based on id
  Params           _id
  Access           Public
  Method           GET
  */
  
  Router.get("/image/:_id", async(req,res)=> {
    try {
      const {_id} = req.params;
      const menus = await ImageModel.findOne(_id);
  
      return res.json({menus});
    } catch (error) {
      return res.status(500).json({error: error.message});
    }
  });
  
  export default Router;
