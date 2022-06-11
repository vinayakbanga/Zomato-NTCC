import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';

//compponents
import RestaurantNavbar from "../components/Navbar/restaurantNavbar"

const RestaurantLayout = () => {
  return (
    <>
<RestaurantNavbar/>
    <div className='conatiner mx-auto px-4 lg:px-20'>
    <div className='w-full h-60  md:hidden'>
    <img src="https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp"
     alt="restaurant image"
     className='w-full h-full rounded-lg object-cover '
     />

</div>
<div className='hidden w-full h-80 md:flex gap-1'>
    <div className='w-7/12 h-full overflow-hidden'>
    <img src="https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp"
     alt="restaurant image"
     className='w-full h-full rounded-lg object-cover transform transition duration-700 hover:scale-110'
     />
    </div>
    <div className='w-1/6 h-full flex flex-col gap-1 overflow-hidden '>
    <img src="https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp"
     alt="restaurant image"
     className='w-full h-full rounded-lg object-cover transform transition duration-700 hover:scale-110'
     />
     <img src="https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp"
     alt="restaurant image"
     className='w-full h-full rounded-lg object-cover  transform transition duration-700 hover:scale-110'
     />
    </div>
    <div className='w-1/6 h-full flex flex-col gap-1 overflow-hidden '>
        <div className='w-full h-full relative'>
    <img src="https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp"
     alt="restaurant image"
     className='w-full h-full rounded-lg object-cover transform transition duration-700 hover:scale-110'
     />
     <div className='absolute inset-0 bg-opacity-40 bg-black w-full h-full rounded-lg'/>
      <h4 className='absolute inset-y-2/4 w-full h-full text-center text-white font-semibold '>
        View Gallery
      </h4>
     
     </div>

     <div className='w-full h-full relative'>
    <img src="https://b.zmtcdn.com/data/pictures/2/18621252/f737723f080910e46c451c51b9bbd717.jpg?output-format=webp"
     alt="restaurant image"
     className='w-full h-full rounded-lg object-cover transform transition duration-700 hover:scale-110'
     />
     <div className='absolute inset-0 bg-opacity-90 bg-gray-400 w-full h-full rounded-lg'/>
     <div className='absolute inset-y-1/4 z-20 w-full h-full text-center text-white font-semibold flex flex-col items-center'>
        <div className='bg-black bg-opacity-50 p-3 rounded-full'>
        <AiOutlineCamera/>
        </div>
      <h4 >
        Add photos
      </h4>
     </div>
     
     </div>


     
    </div>
    

</div>

    </div>
    </>
  )
}

export default RestaurantLayout