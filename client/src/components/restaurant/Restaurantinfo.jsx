import React from 'react'
import {TiStarFullOutline} from "react-icons/ti"

const Restaurantinfo = (props) => {
  return (
    <>
    <div className="my-4">
        <div className='flex  flex-col-reverse  md:flex-row md:items-center justify-between'>
            <h1 className='text-xl md:text-3xl font-semibold md:font-bold '> {props.name}</h1>
            <div className='flex items-center gap-6 ' >
                <div className='flex items-center gap-2'>
                <span className=' flex items-center gap-1 text-white font-medium bg-green-600 px-2 py-1 rounded'>{props.restaurantRating} <TiStarFullOutline/></span>
                <div className='flex flex-col '>
                <strong>2</strong>
                <p className='border-dashed border-b-2'>Dining reviews</p>
                </div>
                </div>
            </div>
        
        
        
        
        
        </div>
        <div className='text-lg text-gray-600'>
     <h3>{props.cuisine}</h3>
     <h3 className='text-gray-500'>{props.address}</h3>
     <h3><span className='text-yellow-500'>Open now</span> 11 am to 8 pm</h3>
     </div>
    </div>
    </>
  )
}

export default Restaurantinfo