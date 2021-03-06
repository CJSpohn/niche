import React from 'react';
import './RecipeResults.css';

const RecipeResults = ({ recipes }) => {
  let recipesToDisplay;
  if (recipes.length) {
    recipesToDisplay = recipes.map((recipe, index) => <p key={index}>{recipe.title}</p>)
  }
  return (
    <>
    {recipesToDisplay}
    </>
  )
}

export default RecipeResults;
