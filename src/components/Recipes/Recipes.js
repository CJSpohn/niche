import React from 'react';
import './Recipes.css'
import RecipeForm from '../RecipeForm/RecipeForm'

const Recipes = ({ setCurrentRecipe, setFavorites, setRecipes, recipes }) => {
  return(
    <section className="recipes">
      <h1>What ingredients do you need to use?</h1>
      <RecipeForm
        setCurrentRecipe={setCurrentRecipe}
        setFavorites={setFavorites}
        setRecipes={setRecipes}
        recipes={recipes}
      />
    </section>
  )
}

export default Recipes;
