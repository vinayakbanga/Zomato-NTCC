import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {FcGoogle} from "react-icons/fc"
export default function SignIn({isOpen, setIsOpen,}) {
//   let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
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
                    Sign In
                  </Dialog.Title>
                  <div className="mt-2 w-full">
                   <button className='flex items-center justify-center  rounded-lg py-2 gap-2 w-full border-gray-400 bg-white text-gray-700 hover:bg-gray-100'>
                    Sign in with Google <FcGoogle/>
                   </button>
                   <form className='flex flex-col gap-3'>
                   <div className='w-full flex flex-col  gap-2'>
                        <label htmlFor='Subject'>
                            Email
                        </label>
                        <input type="email"   id="email" placeholder='email@email.com' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-zomato-400' >
                            </input >
                        
                    </div>
                    <div className='w-full flex flex-col  gap-2'>
                        <label htmlFor='Password'>
                            Password
                        </label>
                        <input type="password"   id="password" placeholder='Password' className='w-full px-3 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-zomato-400' >
                            </input >
                        
                    </div>
                    <div className='w-full text-center bg-zomato-400 text-white py-2 rounded-lg'>
                         Sign In
                    </div>
                   </form>
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
