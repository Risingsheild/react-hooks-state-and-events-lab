import React, { useState }from "react";

function Item({ name, category }) {
  const [isAdded , setIsAdded] = useState(false)
  function handleAddToCartCLick() {
    setIsAdded(isAdded => !isAdded)
  }


  return (
    <li className={isAdded ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isAdded ? "remove" : "add" }
        onClick={handleAddToCartCLick}>
          {isAdded ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
