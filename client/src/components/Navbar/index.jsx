import React from "react";
import {FaUserAlt} from "react-icons/fa"

const Navbar =()=>{
    return(
        <>
        <nav className="py-4 px-4 flex bg-white shadow-md -px-4 justify-between">
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
        </nav>
        </>
    )
};


export default Navbar