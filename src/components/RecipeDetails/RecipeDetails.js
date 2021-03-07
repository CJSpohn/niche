import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './RecipeDetails.css'

const RecipeDetails = ({ currentRecipe, setCurrentRecipe }) => {
  console.log(currentRecipe)
  let instructions;
  let instructionComponents;
  const missingIngredients = currentRecipe.missedIngredients.map(ingr => ingr.original);
  const missingIngredientsComponents = missingIngredients.map((ingr, index) => <li className="mising" key={index}>{ingr}</li>);
  const usedIngredients = currentRecipe.usedIngredients.map(ingr => ingr.original);
  const usedIngredientComponents = usedIngredients.map((ingr, index) => <li className="used" key={index}>{ingr}</li>)

  if (currentRecipe.analyzedInstructions.length) {
    instructions = currentRecipe.analyzedInstructions[0].steps.map(step => step.step);
    instructionComponents = instructions.map((instr, index) => <li key={index}>{instr}</li>)
  }

  return (
    <section className="details">
      <h1 className="recipe-title">{currentRecipe.title}</h1>
      <p>Gluten Free: {currentRecipe.glutenFree ? 'Yes' : 'No'} | Vegan: {currentRecipe.vegan ? 'Yes' : 'No'} | Dairy Free: {currentRecipe.dairyFree ? 'Yes' : 'No'}</p>
      <div className="details-wrapper">
        <img className="recipe-image" src={currentRecipe.image} alt={`${currentRecipe.title}`}/>
        <h2>Ingredients</h2>
        <ul>
          {usedIngredientComponents}
          {missingIngredientsComponents}
        </ul>
        <h2>Instructions</h2>
        <ul>
          {instructionComponents ? instructionComponents : <li>No Recipe Found</li>}
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

RecipeDetails.propTypes = {
  currentRecipe: PropTypes.object,
  setCurrentRecipe: PropTypes.func
}

export default RecipeDetails;
