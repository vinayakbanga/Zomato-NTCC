import React from 'react'
import { useParams } from 'react-router-dom';

//components
import Delivery from './Delivery';
import Dining from './Dining';
import NightLife from './NightLife';

// Dining

const Master = () => {
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

export default Master;
