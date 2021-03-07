import React from 'react';
import './Favorite.css';

const Favorite = ({ recipe }) => {
  return (
    <button className="fav-aside-btn">
      <p className="aside-btn-title">{recipe.title}</p>
      <img className="thumbnail" src={recipe.image} alt={recipe.title}/>
    </button>
  )
}

export default Favorite;
