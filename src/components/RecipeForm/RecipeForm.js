import React, { useState } from 'react';
import RecipeResults from '../RecipeResults/RecipeResults'
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import ErrorPage from '../ErrorPage/ErrorPage'
import api from './RecipeFetch.js';
import './RecipeForm.css';
import chef from '../../cooking.png';


const RecipeForm = ({ setCurrentRecipe, favorites, setFavorites, recipes, setRecipes }) => {
  const [ingredients, setIngredients] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const getRecipes = async (e) => {
    setLoading(true);
    setNoResults(false);
    const apiKey = process.env.REACT_APP_SPOON_KEY;
    e.preventDefault();
    const ingredientsSearchQuery = ingredients.replaceAll(' ', '');
    try {
      const data = await api.getRecipes(`https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredientsSearchQuery}&addRecipeInformation=true&fillIngredients=true&number=10&apiKey=${apiKey}`)
      const results = await data.json();
      results.results.length === 0 ? setNoResults(true) : setRecipes(results.results);
      setIngredients('');
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }

  return(
    <>
      <form className="form">
        <input
          className="input"
          type="text"
          aria-label="Add two ingredients you need to use up as a comma separated list"
          placeholder="(e.g. onions, mushrooms)"
          name="ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
        <button onClick={e => getRecipes(e)} className="search-btn">Find recipes!</button>
      </form>
      {loading ? <Loader /> : null}
      {noResults && <p>Nothing came back from that search</p>}
      {recipes.length === 0 && !error &&
        <img className="placeholder-image" src={chef} alt="A happy chef" />}
        {recipes.length !== 0 && !error &&
          <RecipeResults
          setCurrentRecipe={setCurrentRecipe}
          setFavorites={setFavorites}
          recipes={recipes}
          favorites={favorites}
          />
        }
      {error && <ErrorPage />}
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
