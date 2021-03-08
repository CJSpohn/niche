import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

const RecipeCard = ({ recipe, setCurrentRecipe, setFavorites, favorites }) => {
  const addFavorite = () => {
    if (!favorites.includes(recipe)) {
      setFavorites([...favorites, recipe])
    }
  }
  console.log('recipeCard', recipe)
  const missingIngredients = recipe.missedIngredients.map((ingr, index) => <p key={index}>{ingr.original}</p>)
  const classColor = missingIngredients.length > 7 ? 'red' : 'green';
  return (
    <article className="recipe-card">
      <h4 className="title">{recipe.title}</h4>
      <img className="recipe-img" src={recipe.image} alt={recipe.title}/>
      <p>You will need <span className={classColor + " missing"}>{missingIngredients.length}</span> more ingredients.</p>
      <div className="dietary-info-wrapper">
        {recipe.glutenFree && <p className="dietary-info">GF</p>}
        {recipe.vegan && <p className="dietary-info">V+</p>}
        {recipe.vegetarian && <p className="dietary-info">VG</p>}
        {recipe.veryHealthy && <p className="dietary-info">H</p>}
        {recipe.veryPopular && <p className="dietary-info">A+</p>}
      </div>
      <Link to={{
        pathname:`/recipes/${recipe.title}/${recipe.id}`
      }}>
        <button onClick={() => setCurrentRecipe(recipe)} className="details-btn">Recipe</button>
      </Link>
      <button onClick={addFavorite} className="fav-btn">Fav</button>
    </article>
  )
}

RecipeCard.propTypes = {
  recipe: PropTypes.object,
  setCurrentRecipe: PropTypes.func,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func
}

export default RecipeCard;
