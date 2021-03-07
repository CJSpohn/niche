import React from 'react';
import './Favorite.css';

const Favorite = ({ recipe }) => {
  return (
    <div className="fav-aside-div">
      <p className="aside-title">{recipe.title}</p>
      <button className="remove-btn">Delete</button>
      <button className="view-btn">View</button>
    </div>
  )
}

export default Favorite;
