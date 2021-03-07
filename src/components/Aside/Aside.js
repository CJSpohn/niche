import React from 'react';
import Favorite from '../Favorite/Favorite.js'
import PropTypes from 'prop-types';
import './Aside.css';

const Aside = ({ favorites, setFavorites, setCurrentRecipe }) => {
  const favoriteComponents = favorites.map((fav, index) => (
    <Favorite
      key={index}
      recipe={fav}
      favorites={favorites}
      setFavorites={setFavorites}
      setCurrentRecipe={setCurrentRecipe}
    />))
  return (
    <section className="aside">
      <h1>Current Highlights</h1>
      <hr/>
      {favoriteComponents}
    </section>
  )
}

Aside.propTypes = {
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
  setCurrentRecipe: PropTypes.func
}

export default Aside;
