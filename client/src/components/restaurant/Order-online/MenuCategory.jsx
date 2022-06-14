import React from 'react'

const MenuCategory = (props) => {
  return (
    <>
    <div className={`text-${props.isActive ? `zomato`  :``}-400 bg-${props.isActive ? `zomato`  :`gray`}-100 border-r-4 border-zomato-400 py-2 px-1`}
    >
        <h3 onClick={props.onClickHandler}
    id={props.name}>
            {props.name}({props.items.length})
        </h3>

    </div>
    </>
  )
}

export default MenuCategory