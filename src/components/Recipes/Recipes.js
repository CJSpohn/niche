import React from 'react';
import './Recipes.css'
import RecipeForm from '../RecipeForm/RecipeForm'

const Recipes = () => {
  return(
    <section className="recipes">
      <h1>What ingredients do you need to use?</h1>
      <RecipeForm />
    </section>
  )
}

export default Recipes;
