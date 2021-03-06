import React, { useState } from 'react';
import RecipeResults from '../RecipeResults/RecipeResults'
import api from './RecipeFetch.js';
import './RecipeForm.css';

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const ingredientsSearchQuery = ingredients.map(ingredient => ingredient.toLowercase()).join(',')
    const data = await api.getRecipes(`http://www.recipepuppy.com/api/?i=${ingredientsSearchQuery}`)
    const results = await data.json();
    console.log(results);
    setRecipes(results);
  }

  return(
    <>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Enter the ingredients you need to use"
          name="ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <button onClick={getRecipes}className="search-btn">Find recipes!</button>
      </form>
      {recipes && <RecipeResults recipes={recipes}/>}
    </>
  )
}

export default RecipeForm;
