import { Route, Redirect } from "react-router-dom";



//hoc
import HomeLayoutHOC from "./HOC/home.hoc";

// components

import Temp from "./components/temp";
// import Master from "./components/master";
// import Master from "./components/master";

//pages
import Home from "./Page/Home";



function App() {
 return (
 <>
 <Route path="/" exact>
    <Redirect to= "/Delivery"/>
 </Route>
 {/* <HomeLayoutHOC path="/" exact component={Temp}/> */}
 <HomeLayoutHOC path="/:type" exact component={Home}/>
 </>
 )
 
}

export default App;
