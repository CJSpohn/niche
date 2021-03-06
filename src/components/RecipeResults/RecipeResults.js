import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import RecipeKey from '../RecipeKey/RecipeKey'
import './RecipeResults.css';

const RecipeResults = ({ recipes, setCurrentRecipe, setFavorites }) => {
  let recipesToDisplay;
  if (recipes.results.length) {
    recipesToDisplay = recipes.results.map((recipe, index) =>
      <RecipeCard
        setCurrentRecipe={setCurrentRecipe}
        setFavorites={setFavorites}
        recipe={recipe}
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
