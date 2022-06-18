import React, { useState,useEffect } from 'react'
import {useSelector} from "react-redux"



import RestaurantCard from '../RestaurantCard';
import Brand from './Brands';

//components
import DeliveryCarousel from './DeliveryCarousel';




 const Delivery = () => {

const[resturantList,setRestaurantList] = useState([
]);



const reduxState =useSelector(
  (globalStore)=>globalStore.restaurant.restaurants);
// console.log({reduxState});

useEffect(() => {
  reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  
}, [reduxState.restaurants])



  return (
    <>
    <DeliveryCarousel/>

    {/* <Brand/> */}
    <h1 className="text-2xl my-3 font-semibold">
        Get food Delivered from your favourite restaurant
      </h1>
    <div className="flex justify-between flex-wrap">
      {resturantList.map((restaurant)=>(
        
        
        <RestaurantCard {...restaurant} key={restaurant._id}/>
      ))}
    {/* <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/> */}
    </div>
    </>
  )
}


export default Delivery;