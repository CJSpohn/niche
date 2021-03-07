import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeDetails.css'

const RecipeDetails = ({ currentRecipe, setCurrentRecipe }) => {
  return (
    <>
      <h1 className="recipe-title">{currentRecipe.title}</h1>
      <Link to={{
        pathname:`/`
      }}>
        <button onClick={() => setCurrentRecipe([])} className="back-btn">Back to results</button>
      </Link>
    </>
  )
}

export default RecipeDetails;
