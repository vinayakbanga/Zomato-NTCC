import React from "react";
import {BsBag} from "react-icons/bs"
import {IoFastFood} from "react-icons/io5"
import {BiDrink} from "react-icons/bi"

const MobileTabs=()=>{
    return(
        <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex  justify-around text-gray-500">
        <div className="flex flex-col items-center text-xl">
        <BsBag/>
        <h5 className="text-sm">Delivery</h5>

        </div>
        <div className="flex flex-col items-center text-xl">
        <IoFastFood/>
        <h5 className="text-sm">Dining out</h5>

        </div>
        <div className="flex flex-col items-center text-xl">
        <BiDrink/>
        <h5 className="text-sm">Night life</h5>

        </div>
        <div className="flex flex-col items-center text-xl">
        <BsBag/>
        <h5 className="text-sm">Delivery</h5>

        </div>



        </div>
        </>
    )
}

const LargeTab =()=>{
    return (
        <>
        <div className="hidden lg:flex gap-14 container px-20 mx-auto">
            <div className="flex items-center gap-2">
                <div className="w-14 h-14 border-2 rounded-full p-1 ">
                    
                    <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                    alt="delivery "
                    className="w-full h-full"/>
                </div>
                <h3 className="text-lg text-grey-700 font-semibold">Delivery</h3>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-14 h-14 border-2 rounded-full p-1 ">
                    
                    <img src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                    alt="dining "
                    className="w-full h-full"/>
                </div>
                <h3 className="text-lg text-grey-700 font-semibold">Dining</h3>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-14 h-14 border-2 rounded-full p-1 ">
                    
                    <img src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                    alt="Night Life "
                    className="w-full h-full"/>
                </div>
                <h3 className="text-lg text-grey-700 font-semibold">Delivery</h3>
            </div>

            <div className="flex items-center gap-2">
                <div className="w-14 h-14 border-2 rounded-full p-1 ">
                    
                    <img src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                    alt="delivery "
                    className="w-full h-full"/>
                </div>
                <h3 className="text-lg text-grey-700 font-semibold">Delivery</h3>
            </div>
             
        </div>
        
        </>
    )
}
const FoodTab =()=>{
    return (
        <>
    
    <div>
        <MobileTabs/>
        <LargeTab/>

    </div>
    </>
    )
}

export default FoodTab