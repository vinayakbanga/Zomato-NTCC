

import { Route, Redirect } from "react-router-dom";


// HOC
import HomeLayoutHOC from "./HOC/home.hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";

// pages
import Home from "./Page/Home";

import Temp from "./components/temp";


function App() {

  return (
    <>
      <Route path="/" exact>
        <Redirect to="/Delivery" />
      </Route>

      <HomeLayoutHOC path="/:type" exact component={Home} />

      
 <RestaurantLayoutHOC 
 path="/restaurant/:id"
 exact 
 component={Temp} 
 />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={Temp}
      />
      <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Temp} />
      
      <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Temp} />
      <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Temp} />
    </>
  );
}

export default App;

// :type

// delivery
// dining
// nightlife
// nutrition

// master -> type