import React from 'react'
import { useParams } from 'react-router-dom';

//components
import Delivery from '../components/Delivery';
import Dining from '../components/Dining';
import NightLife from '../components/NightLife';

// Dining

const Home = () => {
const { type } = useParams();

  return (
    <>
      <div className='my-5'>
     { type === "Delivery" && <Delivery/>}
     {type === "Dining" && <Dining/>}
     {type === "NightLife" && <NightLife/>}
     </div>
    

    
    </>
  )
}

export default Home;
