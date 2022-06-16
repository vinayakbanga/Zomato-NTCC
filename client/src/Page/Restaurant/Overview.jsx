import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../../components/CarousalArrow'
import ReactStars from "react-rating-stars-component";

// /component
import MenuCollection from '../../components/restaurant/MenuCollection'
import MenuresturantCard from '../../components/restaurant/MenuresturantCard'
import ReviewCard from '../../components/restaurant/Reviews/reviewCard'

// Map
import Mapview from '../../components/restaurant/Mapview'


const Overview = () => {
  const {id} =useParams();
  const settings = {
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
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
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
    <div className='flex flex-col md:flex-row'>
       <div className='w-full md:w-8/12  p-10  '>
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
          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            
          </div>
          <div className='my-4 md:hidden flex felx-col gap-4 ' >
          <Mapview
           title="Pizza Villa" 
           phno="0914574xxx"
            mapLocation={[28.394623850378174, 77.30227737451017]} 
            address="98V2+3GF, New Industrial Town, Faridabad, Haryana 121001"
            />
          </div>
          <div className='my-4 flex flex-col gap-4'>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>

          </div>
       </div>
       
       <aside style={{height:"fit-content"}} className='hidden rounded-xl md:flex md:w-4/12 sticky top-2  p-10 shadow-md flex-col  gap-3 '>
        
        <Mapview title="Pizza Villa" phno="0914574xxx" mapLocation={[28.394623850378174, 77.30227737451017]} address="98V2+3GF, New Industrial Town, Faridabad, Haryana 121001"
        />
        
        
        {/* <div>
       <h4 className="text-xg font-medium">
              call
            </h4>
              <h5 className='text-zomato-400 font-medium'>+9198574xxx</h5>
              </div>
              <div>
              <h4 className="text-xg font-medium">
              Direction
            </h4>
            <div className='w-full h-48'>
            <MapContainer center={[28.394623850378174, 77.30227737451017]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[28.394623850378174, 77.30227737451017]}>
                  <Popup>
                    Pizza villa
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <p>
            98V2+3GF, New Industrial Town, Faridabad, Haryana 121001
            </p>
            <button className=' flex items-center px-3 py-2 my-1 text-gray-700 border rounded-lg'>
            <FaDirections/>Direction
            </button>
            </div> */}
              </aside>
    </div>
   </>
  )
}

export default Overview