import React from "react";
import {FaUserAlt} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {BsChevronDown,BsChevronUp,BsSearch} from "react-icons/bs";


const MobileNav=()=>{
    return(
    <div className="flex w-full items-center justify-between md:hidden ">
         <div className="w-28 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full "/>
                
            </div>
            <div className="flex items-center gap-3  ">
                <button className=" rounded-2xl bg-zomato-400 text-white px-2 py-3 ">
                    Use App
                </button>
                <span className="border-2 border-grey text-zomato-300 rounded-full p-2 ">
                    <FaUserAlt/>
                </span>
            </div>
            
    </div>
    )
}

const MediumNav=()=>{
    return <>
    <div className=" hidden w-full md:flex items-center justify-between  gap-4 ">
    <div className="w-28 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full "/>
                
            </div>
            <div className="w-full bg-white shadow-md py-3 px-3 border border-gray-200 flex items-center gap-3 rounded-md">
                <div className="flex items-center gap-2 border-r-2 pr-2">
                    <span className="text-zomato-400">
                    <HiLocationMarker/>
                    </span>
                    <input type="text" placeholder="Faridabad"  className=""/>
                    <BsChevronDown/>

                </div>
                <div className="flex items-center  gap-2  w-full  ">
                    <BsSearch/>
                    <input type="search" placeholder="Search for restaurant ,cuisine or a dish" className="w-full" />
                </div>
            </div>
                <div className="flex gap-2 ">
                    <button className="text-gray-500 text-lg hover:text-gray-800">Login</button>
                    <button className="text-gray-500 text-lg hover:text-gray-800">Signup</button>
                </div>

    </div>
    </>

}

const LargeNav=()=>{
    return <>
    <div className=" hidden w-full md:flex items-center justify-between  gap-4 lg:w-3/4 ">
    <div className="w-28 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full "/>
                
            </div>
            <div className="w-full bg-white shadow-md py-3 px-3 border border-gray-200 flex items-center gap-3 rounded-md">
                <div className="flex items-center gap-2 border-r-2 pr-2">
                    <span className="text-zomato-400">
                    <HiLocationMarker/>
                    </span>
                    <input type="text" placeholder="Faridabad"  className=""/>
                    <BsChevronDown/>

                </div>
                <div className="flex items-center  gap-2    ">
                    <BsSearch/>
                    <input type="search" placeholder="Search for restaurant ,cuisine or a dish" className="w-full" />
                </div>
            </div>
                <div className="flex gap-2 ">
                    <button className="text-gray-500 text-lg hover:text-gray-800">Login</button>
                    <button className="text-gray-500 text-lg hover:text-gray-800">Signup</button>
                </div>

    </div>
    </>

}

const Navbar =()=>{
    return(
        <>
        <nav className="p-4 flex bg-white shadow-md w-full items-center">
            <MobileNav/>
            <MediumNav/>
        </nav>

        </>
    )
};


export default Navbar