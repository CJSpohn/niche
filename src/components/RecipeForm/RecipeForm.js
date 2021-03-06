import React, { useState } from 'react';
import RecipeResults from '../RecipeResults/RecipeResults'
import api from './RecipeFetch.js';
import './RecipeForm.css';

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (e) => {
    const apiKey = process.env.REACT_APP_SPOON_KEY;
    e.preventDefault();
    console.log('ingredients', ingredients)
    const ingredientsSearchQuery = ingredients.replaceAll(' ', '');
    const data = await api.getRecipes(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsSearchQuery}&number=2&apiKey=${apiKey}`)
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
        <button onClick={e => getRecipes(e)}className="search-btn">Find recipes!</button>
      </form>
      {recipes && <RecipeResults recipes={recipes}/>}
    </>
  )
}

export default RecipeForm;
