import React, { useState } from 'react';
import RecipeResults from '../RecipeResults/RecipeResults'
import api from './RecipeFetch.js';
import './RecipeForm.css';

const RecipeForm = ({ setCurrentRecipe, setFavorites }) => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (e) => {
    const apiKey = process.env.REACT_APP_SPOON_KEY;
    e.preventDefault();
    const ingredientsSearchQuery = ingredients.replaceAll(' ', '');
    console.log('ingredients', ingredientsSearchQuery)
    const data = await api.getRecipes(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsSearchQuery}&addRecipeInformation=true&fillIngredients=true&number=5&apiKey=${apiKey}`)
    const results = await data.json();
    console.log('results', results);
    setRecipes(results);
    setIngredients('')
  }

  return(
    <>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Enter ingredients as a comma separated list (e.g. garlic, onions, mushrooms)"
          name="ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <button onClick={e => getRecipes(e)} className="search-btn">Find recipes!</button>
      </form>
      {recipes.length !== 0 &&
        <RecipeResults
          setCurrentRecipe={setCurrentRecipe}
          setFavorites={setFavorites}recipes={recipes}
          />
      }
    </>
  )
}

export default RecipeForm;
