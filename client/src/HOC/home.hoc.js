import React, { Component} from "react";

import { Route } from "react-router-dom";

//Layout

import HomeLayout from "../Layout/Home.layout";


const HomeLayoutHOC = ({component: Component, ...rest}) => {
    return (
      <>
       <Route
         {...rest}
         component={(props)=> (
           <HomeLayout>
            <Component {...rest} />
           </HomeLayout>
           
         )

         }
         
       />
       <hr/>
      </>
    );
  };
  
  export default HomeLayoutHOC;