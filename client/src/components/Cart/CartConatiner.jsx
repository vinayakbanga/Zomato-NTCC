import React ,{useState} from 'react'
import { BiChevronUp,BiChevronDown,BiChevronRight } from 'react-icons/bi'
import { IoCloseSharp } from 'react-icons/io5'
import FoodItem from './FoodItem'

// FoodItem


const CartSm =({toggle})=>{
return(
    <>
    <div className='md:hidden flex items-center justify-between'>
    <div className='flex flex-col gap-1 items-start'>
    <small className='flex items-center gap-1' onClick={toggle}>
        1 Item <BiChevronDown/>
    </small>
    <h4>₹300 <sub>(Plus tax)</sub></h4>
</div>
<button className='flex items-center text-white gap-1 bg-zomato-400 px-3 py-1 rounded-lg'>
    Continue <BiChevronRight/>
</button>
</div>


    </>
)
}

const Cartlg =({toggle})=>{
    return(
        <>
        <div className='hidden md:flex shadow-lg items-center justify-between container px-20 mx-auto'>
        <div className='flex  text-xl font-bold gap-1 items-start'>
        <span className='flex items-center gap-1 border bg-white border-gray-300 p-1 rounded' onClick={toggle}>
             <BiChevronUp/>
        </span>
        <h4>
          Your Orders (1)
        </h4>

    </div>
   <div className='flex items-center gap-2'>
        <h4 className='text-xl gap-2 font-bold'>Sub Total: ₹300 </h4>
   <button className='flex items-center text-xl font-light h-10 text-white gap-1 bg-zomato-400 px-3 py-1 rounded-lg'>
        Continue <BiChevronRight/>
    </button>
   </div>
    </div>
    
    
        </>
    )
    }

const CartConatiner = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart =()=> setIsOpen((prev)=>!prev);
    const closeCart = ()=> setIsOpen(false);
  return (
    <>
    {isOpen && <div className='fixed w-full overflow-y-scroll h-48 bottom-16  bg-white z-10 px-3'>
<div className='flex items-center justify-between'>
    <h3 className='text-xl font-semibold'>Your Orders</h3>
    <IoCloseSharp onClick={closeCart}/>

</div>
<hr className='my-2'/>
        <div className='flex flex-col gap-2'>

        <div className='flex flex-col gap-2'>
        <FoodItem name="Pizza" quantity="3" price="90"/>
        <FoodItem name="Pizza" quantity="3" price="90"/>
        <FoodItem name="Pizza" quantity="3" price="90"/>
        <FoodItem name="Pizza" quantity="3" price="90"/>
        <FoodItem name="Pizza" quantity="3" price="90"/>
        <FoodItem name="Pizza" quantity="3" price="90"/>
        <FoodItem name="Pizza" quantity="3" price="90"/>
        </div>
        
        </div>
    </div>}
    <div className='fixed w-full bottom-0 bg-white z-10 p-2 px-3'>
        <CartSm toggle ={toggleCart}/>
        <Cartlg toggle ={toggleCart}/>
    </div>
    
    </>
  )
}

export default CartConatiner