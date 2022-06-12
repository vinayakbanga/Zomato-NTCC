import { Route, Redirect } from "react-router-dom";



// //hoc
import HomeLayoutHOC from "./HOC/home.hoc";
import RestaurantLayoutHOC from "./Layout/Restaurant.layout";
// // RestaurantLayout

// // components

import Temp from "./components/temp";
// // import Master from "./components/master";
// // import Master from "./components/master";

// //pages
import Home from "./Page/Home";



function App() {
 return (
  <>
 <Route path="/" exact>
     <Redirect to= "/Delivery"/>
 </Route>
 
  {/* <HomeLayoutHOC path="/:type" exact component={Home}/>
  <RestaurantLayoutHOC 
 path="/restaurant/:id"
/ exact 
 component={Temp} 
 /> */}
 <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Temp}/>
 <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={Temp}/>
 <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp}/>
 <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Temp}/>
 <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Temp}/>

  </>
 )
 
}

export default App;

