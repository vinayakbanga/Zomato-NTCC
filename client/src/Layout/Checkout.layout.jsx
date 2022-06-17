import React from 'react'
import CheckoutNavbar from '../components/Navbar/CheckoutNavbar'
// import CheckoutNavbar from '../components/Navbar/CheckoutNavbar'
// CheckoutNavbar

const CheckoutLayout = (props) => {
  return (
         <>
         <CheckoutNavbar/>
         <div className='container px-4 md:px-20'>
            {props.children}
        </div>

         </>
    )
}

export default CheckoutLayout