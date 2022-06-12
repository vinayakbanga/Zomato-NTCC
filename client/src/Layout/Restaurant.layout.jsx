import React from 'react';
import { TiStarOutline } from 'react-icons/ti';
// import { AiOutlineCamera } from 'react-icons/ai';
// TiStarOutline

//compponents
import RestaurantNavbar from "../components/Navbar/restaurantNavbar"
import ImageGrid from '../components/restaurant/ImageGrid';
import Restaurantinfo from '../components/restaurant/Restaurantinfo';
import TabContainer from '../components/restaurant/Tabs';
// TabContainer
const RestaurantLayout = () => {


  return (
    <>
<RestaurantNavbar/>
    <div className='conatiner mx-auto px-4 lg:px-20'>
<ImageGrid
 images={[
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
            "https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp",
          ]}/>
       
       <Restaurantinfo 
       name="Mumbai Xpress" 
       restaurantRating="3.5" 
       cuisine="North Indian,FastFood Chinese,Street Food"
        address="Faridabad,Haryana" />

        <div className='my-4'>
            <button className='flex items-center gap-3 text-zomato-400 px-4 py-2 border border-zomato-400 rounded hover:text-white hover:bg-zomato-400'> <TiStarOutline/>Add review</button>

        </div>
        <TabContainer/>
    
    </div>

    </>
  )
}

export default RestaurantLayout