import React from 'react';
import Favorite from '../Favorite/Favorite.js'
import './Aside.css';

const Aside = ({ favorites, setFavorites }) => {
  const favoriteComponents = favorites.map((fav, index) => (
    <Favorite
      key={index}
      recipe={fav}
      favorites={favorites}
      setFavorites={setFavorites}
    />))
  return (
    <section className="aside">
      <h1>Current Highlights</h1>
      <hr/>
      {favoriteComponents}
    </section>
  )
}

export default Aside;
