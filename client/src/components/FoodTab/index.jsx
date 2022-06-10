import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

import {BsBag} from "react-icons/bs"
import {IoFastFood} from "react-icons/io5"
import {BiDrink} from "react-icons/bi"

const MobileTabs=()=>{
    const [ allTypes, setAllTypes] =useState([
        {
            id:"Delivery",
            icon:<BsBag/>,
            name:"Delivery",

        },
        {
            id:"Dining",
            icon:<IoFastFood/>,
            name:"Dining Out",

        },
        {
            id:"NightLife",
            icon:<BiDrink/>,
            name:"Night Life",

        },
        {
            id:`${Date.now()}di`,
            icon:<BsBag/>,
            name:"Delivery",

        },
    ])
    const { type } = useParams();
    // useEffect(()=>{
    //     if(type){
    //         const updateTypes = allTypes.map((item) =>{
    //            if(item.id == type){
    //                return {...item,isActive:true};
    //            } 
    //            return item;
    //         });

    //         setAllTypes(updateTypes);
    //     }
    // },[type]);

    


    return(
        <>
        <div className="lg:hidden bg-white shadow-lg p-3 pt-0 fixed bottom-0 z-10 w-full flex  justify-around text-gray-500 border-t-2">
         {allTypes.map((items)=>(
             <Link to={`/${items.id}`}>
             <div className={type === items.id ? "flex flex-col items-center text-xl text-zomato-400 border-t-2 border-zomato-200 pt-3" :"flex flex-col items-center text-xl pt-3"}>
                 {items.icon}
                 <h5 className="text-sm">{items.name}</h5>
             </div>
             </Link>
         ))}



        </div>
        </>
    )
}

const LargeTab =()=>{
    const [ allTypes, setAllTypes] =useState([
        {
            id:"Delivery",
            image:"https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
            name:"Delivery",
            color:"yellow",

        },
        {
            id:"Dining",
            image:"https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
            name:"Dining Out",
            color:"blue"

        },
        {
            id:"NightLife",
            image:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name:"Night Life",
            color:"purple"

        },
        {
            id:`Delivery`,
            image:"https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
            name:"Delivery",

        },
    ])
    const { type } = useParams();
    return (
        <>
        <div className="hidden lg:flex gap-14 container px-20 mx-auto my-3">

        {allTypes.map((items)=>(
             <Link to={`/${items.id}`}>
             <div className={`flex items-center gap-2 pb-2 transition duration-700 ease-in-out ${type === items.id ? "border-b-2 border-zomato-400" : ""}`} >
                <div className={`w-14 h-14 border-2 bg-${type === items.id ? items.color : "gray"}-200 rounded-full p-1`} >
                    
                    <img src={items.image}
                    alt={items.id}
                    className={type === items.id ? "w-full h-full  " : "w-full h-full filter grayscale"}/>
                </div>
                <h3 className="text-lg text-grey-700 font-semibold">{items.name}</h3>
            </div>
             </Link>
         ))}

             
        </div>
        
        </>
    )
}
const FoodTab =()=>{
    return (
        <>
    
    <div>
        <MobileTabs/>
        <LargeTab/>

    </div>
    </>
    )
}

export default FoodTab