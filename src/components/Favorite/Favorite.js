import React from 'react';
import './Favorite.css';

const Favorite = ({ recipe, favorites, setFavorites }) => {
  const deleteFavorite = () => {
    const filteredFavorites = favorites.filter(fav => fav.title !== recipe.title);
    setFavorites(filteredFavorites)
  }


  return (
    <div className="fav-aside-div">
      <p className="aside-title">{recipe.title}</p>
      <button onClick={deleteFavorite} className="remove-btn">Delete</button>
      <button className="view-btn">View</button>
    </div>
  )
}

export default Favorite;
