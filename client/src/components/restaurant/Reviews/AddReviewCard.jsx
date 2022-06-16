import React,{ useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import ReviewModal from './ReviewModal'
// reactStars
// Component
// ReviewModal

const AddReviewCard = () => {
    // const handleRating =(value) => console.log(value);
    const [isOpen, setIsOpen] = useState(false)
    const openModal = () => setIsOpen(true)

  return (
    
    <>
    <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen}/>
     <h3 className='text-xl font-medium'>Rate your Experience for</h3>
           <div className='flex items-center gap-3'>
           <div className='flex items-center gap-1'>
            <label htmlFor='dining' >Dining</label>
           <input type="radio" name="Review"/>
           </div>
           <div className='flex items-center gap-1'>
            <label htmlFor='delivery' >Delivery</label>
           <input type="radio" name="Review"/>
           </div>
           </div>
           {/* <div>
           <ReactStars
              count={5}
              onChange={handleRating}
              size={24}
              activeColor="#ffd700"
            />
            
           </div> */}
           <button onClick={openModal} className='text-zomato-400'>Write Review</button>
    </>
  )
}

export default AddReviewCard