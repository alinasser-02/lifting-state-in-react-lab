// src/components/IngredientList/IngredientList.jsx
import { useState } from "react";

const IngredientList = (props) => {
  return (
    <ul>
      {props.availableIngredients.map((ingredient) => (
        <li style={{ backgroundColor: ingredient.color }}>{ingredient.name}
        <button>x</button></li>
      ))}
    </ul>
  );
};

export default IngredientList;
