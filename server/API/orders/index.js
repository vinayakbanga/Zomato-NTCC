import express from "express"
import { Route } from "express";
import passport from "passport"

import { OrderModel} from "../../database/allModel";
const Router = express.Router();

/*
  Route     /
  Des       Get all orders based on id
  Params    _id
  Access    Public
  Method    GET  
  */

  Router.get("/:id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
   try {
       const {_id} = req.params;
       const getOrders= await OrderModel.findOne({user:_id});

       if(!getOrders){
           return res.status(404).json({error:"User not found"});
       }
       return res.status(200).json({orders: getOrders})
   } catch (error) {
    return res.status(500).json({order: error.message});
   }
  });

  /*
  Route     /new
  Des       Add a new order
  Params    _id
  Access    Public
  Method    post
  */
 Router.post("/new",async(req,res)=>{
     try {
         const{ _id } = req.params;
         const {orderDetails}= req.body;

         const addNewOrder = await OrderModel.findOneAndUpdate({
             user:_id,

         },
         {
             $push:{orderDetails},
         },
         {new:true});

          return res.json({order: addNewOrder});
         
     } catch (error) {
         return res.status(500).json({error:error.message});
     }
 });
 
  

  export default Router;
