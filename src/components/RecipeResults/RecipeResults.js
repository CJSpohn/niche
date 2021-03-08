import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../RecipeCard/RecipeCard'
import RecipeKey from '../RecipeKey/RecipeKey'
import './RecipeResults.css';

const RecipeResults = ({ recipes, setCurrentRecipe, favorites, setFavorites }) => {
  let recipesToDisplay;
  if (recipes.length) {
    recipesToDisplay = recipes.map((recipe, index) =>
      <RecipeCard
        recipe={recipe}
        setCurrentRecipe={setCurrentRecipe}
        favorites={favorites}
        setFavorites={setFavorites}
        key={index}
      />)
  }
  return (
    <>
      <RecipeKey />
      <section className="card-grid">
        {recipes.length ? recipesToDisplay : <h2 className="no-results">No results found</h2>}
      </section>
    </>
  )
}

RecipeResults.propTypes = {
  recipes: PropTypes.array,
  setCurrentRecipe: PropTypes.func,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func
}

export default RecipeResults;
