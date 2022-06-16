import { Dialog, Transition } from '@headlessui/react'
// import { text } from 'express'
import { Fragment, useState } from 'react'
import ReactStars from 'react-rating-stars-component'

export default function ReviewModal({isOpen,setIsOpen,handleRating,...props}) {
 
  function closeModal() {
    setIsOpen(false)
  }

//   function openModal() {
//     setIsOpen(true)
//   }

  return (
    // const handleRating = (value) => console.log(value);
    <>
      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Review
                  </Dialog.Title>
                  <div className="mt-2">
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
           <ReactStars
              count={5}
            
              size={24}
              activeColor="#ffd700"/>
                  </div>

                  <form className='flex flex-col gap-2' >
                  <div className='w-full flex flex-col  gap-2'>
                        <label htmlFor='Subject'>
                            Subject
                        </label>
                        <input type="text"   id="reviewText" placeholder='amazing Food' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-zomato-400' >
                            </input >
                        
                    </div>
                  <div className='flex flex-col gap-2'>
                        <label htmlFor='reviewText'>
                            Subject
                        </label>
                        <textarea  id="reviewText" placeholder='amazing Food' rows="5" className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-zomato-400'>
                            </textarea>
                        
                    </div>
                  </form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-zomato-100 px-4 py-2 text-sm font-medium text-zomato-900 hover:bg-zomato-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zomato-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
