import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import RecipeKey from '../RecipeKey/RecipeKey'
import './RecipeResults.css';

const RecipeResults = ({ recipes, setCurrentRecipe, favorites, setFavorites }) => {
  let recipesToDisplay;
  if (recipes.results.length) {
    recipesToDisplay = recipes.results.map((recipe, index) =>
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
        {recipesToDisplay.length && recipesToDisplay}
      </section>
    </>
  )
}

export default RecipeResults;
