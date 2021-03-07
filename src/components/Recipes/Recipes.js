import React from 'react';
import PropTypes from 'prop-types';
import './Recipes.css'
import RecipeForm from '../RecipeForm/RecipeForm'

const Recipes = ({ setCurrentRecipe, favorites, setFavorites, setRecipes, recipes }) => {
  return(
    <section className="recipes">
      <h1>What ingredients do you need to use?</h1>
      <RecipeForm
        setCurrentRecipe={setCurrentRecipe}
        setFavorites={setFavorites}
        setRecipes={setRecipes}
        recipes={recipes}
        favorites={favorites}
      />
    </section>
  )
}

Recipes.propTypes = {
   setCurrentRecipe: PropTypes.func,
   favorites: PropTypes.array,
   setFavorites: PropTypes.func,
   setRecipes: PropTypes.func,
   recipes: PropTypes.array 
}

export default Recipes;
