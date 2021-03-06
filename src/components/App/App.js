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
                <Aside />
                <Recipes
                  setCurrentRecipe={setCurrentRecipe}
                  setFavorites={setFavorites}
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
                <Aside />
                <RecipeDetails currentRecipe={currentRecipe}/>
              </div>
            </>
          )}
        />
      </Switch>
    </>
  )
}

export default App
