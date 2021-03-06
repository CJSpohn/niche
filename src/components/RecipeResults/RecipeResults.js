import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard'
import './RecipeResults.css';

const RecipeResults = ({ recipes }) => {
  let recipesToDisplay;
  if (recipes.results.length) {
    recipesToDisplay = recipes.results.map((recipe, index) => <RecipeCard recipe={recipe} key={index}/>)
  }
  return (
    <>
      {recipesToDisplay.length && recipesToDisplay}
    </>
  )
}

export default RecipeResults;
