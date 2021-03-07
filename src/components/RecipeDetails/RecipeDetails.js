import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeDetails.css'

const RecipeDetails = ({ currentRecipe, setCurrentRecipe }) => {
  console.log(currentRecipe)
  const missingIngredients = currentRecipe.missedIngredients.map(ingr => ingr.original);
  const missingIngredientsComponents = missingIngredients.map((ingr, index) => <li key={index}>{ingr}</li>);
  return (
    <section className="details">
      <h1 className="recipe-title">{currentRecipe.title}</h1>
      <div className="details-wrapper">
        <img className="recipe-image" src={currentRecipe.image} alt={`${currentRecipe.title}`}/>
        <h4>You are missing:</h4>
        <ul>
          {missingIngredientsComponents}
        </ul>
      </div>
      <Link to={{
        pathname:`/`
      }}>
        <button onClick={() => setCurrentRecipe([])} className="back-btn">Back to results</button>
      </Link>
    </section>
  )
}

export default RecipeDetails;
