import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {useDispatch} from "react-redux"

//components
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/NightLife';

// redux actions
import { getRestaurant } from '../Redux/Reducer/restaurant/restaurant.action';

const Home = () => {
  
const { type } = useParams();
const dispatch =useDispatch();

   useEffect(() => {
    // console.log("ssssss");
     dispatch(getRestaurant());
   
     
   }, [])
   

  return (
    <>
      <div className='my-5'>
     { type === "Delivery" && <Delivery/>}
     {type === "Dining" && <Dining/>}
     {type === "NightLife" && <NightLife/>}
     </div>
    

    
    </>
  )
}

export default Home;
