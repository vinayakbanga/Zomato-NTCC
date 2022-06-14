import React from 'react'
import ReactStars from "react-rating-stars-component"
const FoodItem = (props) => {
  return (
    <div className='flex items-start md:gap-2 justify-between'>
        <div className='w-3/12 h-24 md:h-28 lg:h-36 md:px-3'>
           <img src={props.image}
           alt="food"
           className='h-full w-full rounded-lg'/> 
        </div>
        <div className='flex flex-col w-7/12 gap-1'>
            <div className=''>
            <h3 className='text-xl font-bold'>{props.title}</h3>
            <button className='md:hidden text-zomato-400 px-2  border border-zomato-400 rounded hover:text-white hover:bg-zomato-400'> Add +</button>
            </div>
            <ReactStars count={5} value={props.rating}/>
            <h5>₹ {props.price} </h5>
            <p className='truncate'>{props.description}</p>
        </div>
        <div className='w-2/12 hidden md:block'>
        <button className=' text-zomato-400 px-2  border border-zomato-400 rounded hover:text-white hover:bg-zomato-400'> Add +</button>
        </div>
    </div>
  )
}

export default FoodItem