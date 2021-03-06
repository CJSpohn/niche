import React from 'react';
import './Recipes.css'
import RecipeForm from '../RecipeForm/RecipeForm'

const Recipes = () => {
  return(
    <section className="recipes">
      <h1>Recipes</h1>
      <RecipeForm />
    </section>
  )
}

export default Recipes;
