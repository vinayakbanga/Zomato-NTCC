//libraries
import express from "express"
import passport from "passport"

import { RestaurantModel} from "../../database/allModel";
import { ValidateRestaurantId } from "../../Validation/food";
import { ValidateRestaurantCity, ValidateRestaurantSearchString } from "../../Validation/restaurant";
const Router = express.Router();

/*
  Route     /
  Des       Get all the restaurant details based in city
  Params    none
  Access    Public
  Method    GET  
  */

  Router.get("/",async(req,res)=>{
      try {
          await  ValidateRestaurantCity(req.query);
        //   const { city }= req.query; or
          const city= req.query.city;
          const restaurants = await RestaurantModel.find({city})

          return res.json({restaurants})
          
      } catch (error) {
          return res.status(500).json({error :error.message});
          
      }
  })

  /*
  Route     /
  Des       Get individaul restaurant details based in city
  Params    id
  Access    Public
  Method    GET  
  */
 Router.get("/:id", async(req,res)=>{
     try {
         await ValidateRestaurantId(req.params);

        const {_id} = req.params;
        const restaurant = await RestaurantModel.findOne({_id});
        if(!restaurant){
            return res.status(404).json({error :"restaurnat no found"});


        }
        return res.json({restaurant});
         
     } catch (error) {
        return res.status(500).json({error :error.message});

         
     }
 })

//  Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
//     try {
//       const newRetaurant = await RestaurantModal.create(req.body.retaurantData);
//       return res.json({ restaurants: newRetaurant });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   });
/*
  Route     /search
  Des       Get i restaurant details based on serach string
  Params    id
  Access    Public
  Method    GET  
  */
 Router.get("/search",async(req,res)=>{
     try {
        await ValidateRestaurantSearchString(req.body);

        const { searchString } = req.body;
        const restaurants= await RestaurantModel.find({name: {$regex: searchString, $options:"i"},
    });

    

         
    if(!restaurants){
        return res.status(404).json({error :"restaurnat no found"});


    }
    return res.json({restaurant});
     
 } catch (error) {
    return res.status(500).json({error :error.message});

     
 }
 })


  export default Router;