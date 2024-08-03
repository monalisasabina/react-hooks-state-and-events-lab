// import React, { useState } from "react";
import React, {useState} from "react";

function Item({ name, category }) {

  const[isInCart,setCart]=useState(false)

  function handleCartClick(){

    setCart(function (isInCart){return !isInCart})
  }

  return (
    <li className={isInCart?"in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className="add">{isInCart? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
