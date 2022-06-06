import express from "express"
import passport from "passport"

import { FoodModel} from "../../database/allModel";
import { ValidateCategory, ValidateRestaurantId } from "../../Validation/food";
const Router = express.Router();

/*
  Route     /r
  Des       Get all the food based on restaurants
  Params    id
  Access    Public
  Method    GET  
  */

  Router.get("/r/:_id",async(req,res)=>{
      try {
          await ValidateRestaurantId(req.params)
          const {_id}= req.params;
          const foods= await FoodModel.find({restaurant:_id});

          return res.json({foods});

          
      } catch (error) {
          return res.status(500).json({error: error.message})
          
      }
  });

  
/*
  Route     /r
  Des       Get all the food based on category
  Params    category
  Access    Public
  Method    GET  
  */

  Router.get("/r/:category",async(req,res)=>{
      
    try {
await ValidateCategory(req.params);

        const {category}= req.params;
        const foods= await FoodModel.find({category});

        return res.json({foods});

        
    } catch (error) {
        return res.status(500).json({error: error.message})
        
    }
});
export default Router;
