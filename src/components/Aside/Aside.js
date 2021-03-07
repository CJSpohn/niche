import React from 'react';
import Favorite from '../Favorite/Favorite.js'
import './Aside.css';

const Aside = ({ favorites }) => {
  const favoriteComponents = favorites.map((fav, index) => <Favorite key={index} recipe={fav}/>)
  return (
    <section className="aside">
      <h1>Current Highlights</h1>
      <hr/>
      {favoriteComponents}
    </section>
  )
}

export default Aside;
