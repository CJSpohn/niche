import React, { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Recipes from '../Recipes/Recipes';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import './App.css';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState([]);
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <div className="body-wrapper">
                <Aside
                  favorites={favorites}
                  setFavorites={setFavorites}
                  setCurrentRecipe={setCurrentRecipe}
                />
                <Recipes
                  setRecipes={setRecipes}
                  recipes={recipes}
                  setCurrentRecipe={setCurrentRecipe}
                  setFavorites={setFavorites}
                  favorites={favorites}
                />
              </div>
            </>
          )}
        />
        <Route
          exact
          path="/recipes/:title"
          render={() => (
            <>
              <Header />
              <div className="body-wrapper">
                <Aside
                  favorites={favorites}
                  setFavorites={setFavorites}
                  setCurrentRecipe={setCurrentRecipe}
                />
                <RecipeDetails
                  currentRecipe={currentRecipe}
                  setCurrentRecipe={setCurrentRecipe}/>
              </div>
            </>
          )}
        />
        <Route render={() => (
          <>
            <Header />
            <h2 className="no-page">There is nothing here</h2>
          </>
        )}
        />
      </Switch>
    </>
  )
}

export default App
