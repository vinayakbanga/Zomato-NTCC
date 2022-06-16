import React from 'react'
import {AiOutlineCompass} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"
import FloatMenuBtn from '../../components/restaurant/Order-online/FloatMenuBtn'
import FoodItem from '../../components/restaurant/Order-online/FoodItem'
import FoodList from '../../components/restaurant/Order-online/FoodList'
import MenuListContainer from '../../components/restaurant/Order-online/MenuListContainer'

// FoodItem
// import MenuCollection from "../../components/restaurant/MenuCollection"

const OrderOnline = () => {
  return (
    <>
    <div className='w-full flex'>
      <aside className='hidden md:flex w-1/4 overflow-y-scroll  flex-col border-r-2 border-gray-200 h-screen gap-3'>
<MenuListContainer/>
<MenuListContainer/>
<MenuListContainer/>
      </aside>
      <div className='w-full md:w-3/4 h-screen'>
      <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex  h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            
              <FoodList title="Recommended"
              items={[
                {
                image:"https://b.zmtcdn.com/data/dish_photos/71a/d68dd9042017af95875bdb396f85771a.jpg?fit=around|130:130&crop=130:130;*,*",
            title:"Molten Lava Cake",
            rating:4,
            price :"99",
            description:"Little muffin with a heart of chocolate! An all time classic and a serious all timer of a dessert!"
                },
               
              
              ]} /> 
                 
            
            {/* {menu.map((item) => (
              <FoodList key={item._id} {...item} />
            ))} */}
          </section>
      </div>
    </div>
      <FloatMenuBtn/>
    </>
  )
}

export default OrderOnline