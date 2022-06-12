import React from "react";

//components
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";
// FoodTab
const HomeLayout =(props)=>{
    return (
    <>
     <Navbar/>
    <FoodTab/>
    <div className="container mx-auto px-4 lg:px-20">
    
    {props.children}


    </div>
    {/* <hr/> */}
        
    

    </>
    )
};
export default HomeLayout;