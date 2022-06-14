import React from 'react'
import { useState } from 'react'
import MenuCategory from './MenuCategory'

//components
// MenuCategory

const MenuListContainer = (props) => {
    const [selected,setSelected] = useState("")
    const onClickHandler=(e)=>{
        
        if(e.target.id){
            setSelected(e.target.id);
        }

    }
  return (
    <>
    <div className='w-full'>
        <MenuCategory name="Recommended" items={["",""]}
        onClickHandler={onClickHandler}
        isActive= {selected === "Recommended"}/>
    </div>
    
    </>
  )
}

export default MenuListContainer