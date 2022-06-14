import React from 'react'
import { TiStarFullOutline } from 'react-icons/ti'
// TiStarFullOutline

const ReviewCard = () => {
  return (
    <>
    <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
            <div className='w-10 h-10 rounded-full'>
            <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/d76/cc84183f68cc34027812bdf62585cd76.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div>
                <h3 className='text-lg font-semibold'>Vinayak Banga</h3>
                </div>
                </div>
        </div>
        <div>
            <div className='flex items-center gap-3 my-1' >
                <span className='text-white bg-green-700  px-2 text-sm  rounded-lg flex items-center gap-1'>3 <TiStarFullOutline/></span>
                <h5 className='font-regular uppercase'>Delivery</h5>
                <small className='text-gray-500'>3 days ago</small>
            </div>
            <div>
                <p className='w-full text-gray-600 text-base'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis convallis convallis. Sociis natoque penatibus et magnis. Senectus et netus et malesuada fames. Lacinia quis vel eros donec. Scelerisque eu ultrices vitae auctor eu augue ut. Etiam tempor orci eu lobortis elementum. Diam sollicitudin tempor id eu nisl. Vel quam elementum pulvinar etiam non quam lacus suspendisse. Habitasse platea dictumst quisque sagittis purus sit amet. Quis viverra nibh cras pulvinar mattis nunc. Nam at lectus urna duis convallis convallis tellus id interdum. Viverra nam libero justo laoreet sit amet cursus. Nibh praesent tristique magna sit amet purus gravida quis blandit. Amet nisl suscipit adipiscing bibendum est. Nullam vehicula ipsum a arcu cursus vitae congue. Mi in nulla posuere sollicitudin.
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ReviewCard