import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../../components/CarousalArrow'
// NextArrow
// PrevArrow
// IoMdArrowDroprightr

// /component
import MenuCollection from '../../components/restaurant/MenuCollection'
import MenuresturantCard from '../../components/restaurant/MenuresturantCard'

// MenuCollection


const Overview = () => {
  const {id} =useParams();
  const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  return (
    <>
    <div className='flex flex-col md:flex-row'>
       <div className='w-full  p-10  '>
       <h2 className='font-semibold text-lg md:text-xl my-4'>About This Place</h2>
       <div className='flex justify-between items-center'>
        <h4 className='text-lg font-medium'>Menu</h4>
        <Link to={`/restaurant/${id}/menu`}>
            <span className='flex items-center gap-1 text-zomato-400'>See all menu items <IoMdArrowDropright/></span>
        </Link>

       </div>
        <div className='flex flex-wrap gap-3'>
          <MenuCollection menuTitle="Menu" pages="3" image="https://b.zmtcdn.com/data/menus/004/2004/cc939a804d2db0aaf322e5180e24ce6e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"/>
        </div>
        <h4 className="text-lg font-medium my-4">Cuisines</h4>
        <div className='flex flex-wrap gap-2'>
        <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>Street food</span>
        <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>Street food</span>
        <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>Street food</span>
        </div>
        <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹100 for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className='my-4'>
          <h4 className="text-lg font-medium">Similar resaurant</h4>
          <Slider {...settings}>
          <MenuresturantCard
          image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
          title="tea"/>
          <MenuresturantCard
          image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
          title="tea"/>
          <MenuresturantCard
          image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
          title="tea"/>
          <MenuresturantCard
          image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
          title="tea"/>
          </Slider>
          {/* <MenuresturantCard
          image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
          title="tea"/>
          <MenuresturantCard
          image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
          title="tea"/> */}
          </div>
       </div>
       <aside style={{height:"fit-content"}} className='hidden md:block md:w-2/5 sticky top-2  p-10 '></aside>

    </div>
   </>
  )
}

export default Overview