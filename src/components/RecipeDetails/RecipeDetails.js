import React from 'react';
import './RecipeDetails.css'

const RecipeDetails = ({ currentRecipe }) => {
  return (
    <h1 className="recipe-title">{currentRecipe.title}</h1>
  )
}

export default RecipeDetails;
