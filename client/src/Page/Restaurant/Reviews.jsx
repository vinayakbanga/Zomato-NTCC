import React from 'react'
import { useState } from 'react'
import ReviewCard from '../../components/restaurant/Reviews/reviewCard'
import ReactStars from "react-rating-stars-component";
import AddReviewCard from '../../components/restaurant/Reviews/AddReviewCard';

// ReviewCard
const Reviews = () => {
const [reviews,setReviews]=useState(["", "","",""]);


  return (
    <>
    <div className='flex flex-col md:flex-row'>

    <div className=' w-full md:w-8/12  p-10 flex flex-col gap-2 '>
      <div className='md:hidden my-2' >
      <AddReviewCard/>
      </div>
        
    {  
        reviews.map((review)=>(
            <ReviewCard {...review}/>
        ))
    }
    </div>
    <aside style={{height:"fit-content"}} className='hidden rounded-xl md:flex items-start md:w-4/12 sticky top-2  p-10 shadow-md flex-col  gap-3 '>
      <AddReviewCard/>
    </aside>
    </div>
    </>
  )
}

export default Reviews