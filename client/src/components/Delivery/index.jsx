import React, { useState } from 'react'
import RestaurantCard from '../RestaurantCard';
import Brand from './Brands';

//components
import DeliveryCarousel from './DeliveryCarousel';




 const Delivery = () => {

const[resturantList,setRestaurantList] = useState([
  {
    _id:"123456",
    photos: [
      "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    ],
    name: "Samosa Party",
    cuisine: ["Street Food", "Beverages", "Tea"],
    averageCost: 100,
    isPro: true,
    isOff: 80,
    durationOfdelivery: 47,
    restaurantReviewValue: 4.1,
  },
  {
    _id: "123456-3",
    photos: [
      "https://b.zmtcdn.com/data/pictures/chains/8/18443088/d26f90bcacb3caeb175479a90e1eddb2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    ],
    name: "Samosa Party",
    cuisine: ["Street Food", "Beverages", "Tea"],
    averageCost: 100,
    isPro: true,
    isOff: 80,
    durationOfdelivery: 47,
    restaurantReviewValue: 4.1,
  },
  {
    _id: "123456-2",
    photos: [
      "https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    ],
    name: "Al-Bek",
    cuisine: ["Mughlai", "Arabian", "North Indian", "Chinese", "Seafood"],
    averageCost: 100,
    isPro: true,
    isOff: 80,
    durationOfdelivery: 47,
    restaurantReviewValue: 4.1,
  },
  
]);



  return (
    <>
    <DeliveryCarousel/>
    {/* <Brand/> */}
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