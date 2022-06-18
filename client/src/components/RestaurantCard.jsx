import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {AiTwotoneStar} from "react-icons/ai";
import { getImage } from '../Redux/Reducer/Image/Image.action';
//  getImage



const RestaurantCard = (props) => {

  const [image,setImage] = useState({
    images:[]
  

  })




   const dispatch = useDispatch();
 
    useEffect(() => {
      props.photos && dispatch(getImage(props.photos)).then((data)=> setImage(data.payload.image))
    }, [props.photos])
    


  return (
    <Link to={`/restaurant/${props._id}`} className="w-full">
    <div className='bg-white p-4 mb-2 rounded-lg w-full hover:shadow-lg md:w-1/2 lg:w-1/3'>
<div className='w-full h-56'>
    <img src={image.images.length && image.images[0].location }
    
    alt='food'
    className='w-full h-full rounded-lg'
    />

</div>
   <div className=' my-2 flex flex-col gap-2'>
      <div className='flex items-center justify-between'>
        <h4 className='text-xl font-medium'>{props.name}</h4>
        <span className='bg-green-800 text-white p-1 rounded flex items-center '>{props.restaurantReviewValue} <AiTwotoneStar/></span>
      </div>
      <div className='flex items-center justify-between text-gray-600'>
        <p>{props.cuisine.join(", ")}</p>
        <p>₹ {props.averageCost}  for one</p>
      </div>
   </div>


    </div>
    </Link>
  )
}

export default RestaurantCard