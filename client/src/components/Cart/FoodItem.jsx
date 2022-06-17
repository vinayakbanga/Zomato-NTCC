import React from 'react'

const FoodItem = (props) => {
    // const incrementQty =()=>{
    //     return props.quantity+2;
    // }
  return (
    <>
    <div className='flex justify-between items-center'>
           <h5>{props.name}</h5>
           <div className='flex flex-col items-end'>
            <small>
                ₹{parseInt(props.price) + parseInt(props.quantity)}
            </small>
            <div className='bg-zomato-400 text-white rounded px-1 flex items-center gap-1' >
                <button className='bg-zomato-400 text-white rounded px-1'>-</button>
                <small >2</small>
                <button className='bg-zomato-400 text-white rounded px-1'>+</button>
            </div>
            </div> 
        </div>
        {/* <hr className='my-1 border border-gray-400'/> */}
    </>
  )
}

export default FoodItem