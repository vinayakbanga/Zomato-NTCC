import React from 'react'
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '../CarousalArrow';


//componrnts
import PictureCarousalCard from '../PictureCarousel'
// PictureCarousalCard

//carousel not working with functional component so converted to class component

class DiningCArousel extends React.Component {
    render() {

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
    <div className='w-full'>

     <Slider {...settings}>

        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>
        <PictureCarousalCard/>

     </Slider>

    </div>
  )
}
}

export default DiningCArousel