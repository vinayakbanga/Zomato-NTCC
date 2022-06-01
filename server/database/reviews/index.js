import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food:{
        type: mongoose.Types.ObjectId,
        ref : "Foods",
    },
   user:{
       type: mongoose.Types.ObjectId,
       ref : "Users",
   },
   restaurant:{
    type: mongoose.Types.ObjectId,
    ref : "Restaurants",
},
   ReviewDetails :[
       {
        food:{
            type: mongoose.Types.ObjectId,
            ref : "Foods",
        },
        quantitiy:{
            type:Number, required:true
        },
        paymode : {type:String,required:true},
        status : {type:String,default:"Placed"},
        paymentDetails:{
            itemTotal:{type:Number,required :true},
            promo:{type:Number,required:true},
            tax:{type:Number,required:true},
        }


       }

   ]
})
export const ReviewModel= mongoose.model("Reviews",ReviewSchema);