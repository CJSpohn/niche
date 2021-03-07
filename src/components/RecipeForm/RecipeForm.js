import React, { useState } from 'react';
import RecipeResults from '../RecipeResults/RecipeResults'
import PropTypes from 'prop-types';
import api from './RecipeFetch.js';
import './RecipeForm.css';

const RecipeForm = ({ setCurrentRecipe, favorites, setFavorites, recipes, setRecipes }) => {
  const [ingredients, setIngredients] = useState('');

  const getRecipes = async (e) => {
    const apiKey = process.env.REACT_APP_SPOON_KEY;
    e.preventDefault();
    const ingredientsSearchQuery = ingredients.replaceAll(' ', '');
    console.log('ingredients', ingredientsSearchQuery)
    const data = await api.getRecipes(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsSearchQuery}&addRecipeInformation=true&fillIngredients=true&number=5&apiKey=${apiKey}`)
    const results = await data.json();
    console.log('results', results);
    setRecipes(results.results);
    setIngredients('')
  }

  return(
    <>
      <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Enter as a comma separated list (e.g. garlic, onions, mushrooms)"
          name="ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <button onClick={e => getRecipes(e)} className="search-btn">Find recipes!</button>
      </form>
      {recipes.length !== 0 &&
        <RecipeResults
          setCurrentRecipe={setCurrentRecipe}
          setFavorites={setFavorites}
          recipes={recipes}
          favorites={favorites}
          />
      }
    </>
  )
}

RecipeForm.propTypes = {
  setCurrentRecipe: PropTypes.func,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
  recipes: PropTypes.array,
  setRecipes: PropTypes.func
}

export default RecipeForm;
