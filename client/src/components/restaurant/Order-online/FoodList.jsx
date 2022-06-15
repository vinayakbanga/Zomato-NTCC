import React from 'react'
import FoodItem from './FoodItem'


const FoodList = (props) => {
  return (
    <>
    <div>
            <h2 className="bg-white w-full z-10 sticky top-0  px-2 py-1 text-xl font-semibold">{props.title}</h2>
            <div className='flex flex-col gap-2'>
            {props.items.map((item)=>(

            <FoodItem {...item}  />
            ))}
            </div>

    </div>
            
    </>
  )
}

export default FoodList