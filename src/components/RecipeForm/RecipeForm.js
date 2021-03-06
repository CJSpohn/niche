import React, { useState } from 'react';
import './RecipeForm.css';

const RecipeForm = () => {

  const [ingredients, setIngredients] = useState([]);

  return(
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Enter the ingredients you need to use"
        name="ingredients"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />
      <button className="search-btn">Find recipes!</button>
    </form>
  )
}

export default RecipeForm;
