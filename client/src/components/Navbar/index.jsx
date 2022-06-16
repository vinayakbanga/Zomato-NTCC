import React,{ useState }  from "react";
import {FaUserAlt} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {BsChevronDown,BsChevronUp,BsSearch} from "react-icons/bs";

// UserDropdown

//component
// Signin
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
// SignUp
// import UserDropdown from "./UserDropdown.jsx";


const MobileNav=({SignIn,SignUp})=>{

 const [isDropDownOpen, setIsDropDownOpen] = useState(false);


    return(
    <div className="flex w-full items-center justify-between md:hidden ">
         <div className="w-28 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt="logo"
                className="w-full h-full "/>
                
            </div>
            <div className="flex items-center gap-3  relative ">
                <button className=" rounded-2xl bg-zomato-400 text-white px-2 py-3 ">
                    Use App
                </button>
                <span
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border-2 border-grey text-zomato-300 rounded-full p-2 ">
                    <FaUserAlt/>
                </span>
                
                {isDropDownOpen && (
          <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
            <button onClick={SignIn}>Sign In</button>
            <button onClick={SignUp}>Sign Up</button>
          </div>
        )}


            </div>
            
    </div>
    )
}

const MediumNav=({SignIn,SignUp})=>{
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
                    <button onClick={SignIn} className="text-gray-500 text-lg hover:text-gray-800">Login</button>
                    <button onClick={SignUp} className="text-gray-500 text-lg hover:text-gray-800">Signup</button>
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

    const [openSignin,setOpenSignin] = useState(false);
    const [openSignup,setOpenSignup] = useState(false);

    
  const openSignInmodal = () => setOpenSignin(true);
  const openSignUpmodal = () => setOpenSignup(true);
    return(
        <>
        <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
        <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
        <nav className="p-4 flex bg-white  w-full items-center">
            <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
            <MediumNav SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
        </nav>

        </>
    )
};


export default Navbar