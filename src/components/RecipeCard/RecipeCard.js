import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  console.log('recipeCard', recipe)

  //move to details page
  const missingIngredients = recipe.missedIngredients.map((ingr, index) => <p key={index}>{ingr.original}</p>)
  const classColor = missingIngredients.length > 7 ? 'red' : 'green';
  return (
    <article className="recipe-card">
      <h4>{recipe.title}</h4>
      <img className="recipe-img" src={recipe.image} alt={recipe.title}/>
      <p>You will need <span className={classColor + " missing"}>{missingIngredients.length}</span> more ingredients.</p>
      <div className="dietary-info-wrapper">
        {recipe.glutenFree && <p className="dietary-info">GF</p>}
        {recipe.vegan && <p className="dietary-info">V+</p>}
        {recipe.vegetarian && <p className="dietary-info">VG</p>}
        {recipe.veryHealthy && <p className="dietary-info">H</p>}
        {recipe.veryPopular && <p className="dietary-info">A+</p>}
      </div>
      <button className="details-btn">Recipe</button>
    </article>
  )
}

export default RecipeCard;
