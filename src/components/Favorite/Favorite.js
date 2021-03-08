import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Favorite.css';

const Favorite = ({ recipe, favorites, setFavorites, setCurrentRecipe }) => {
  const deleteFavorite = () => {
    const filteredFavorites = favorites.filter(fav => fav.title !== recipe.title);
    setFavorites(filteredFavorites)
  }

  return (
    <div className="fav-aside-div">
      <p className="aside-title">{recipe.title}</p>
      <button onClick={deleteFavorite} className="remove-btn">Delete</button>
      <Link to={{
        pathname:`/recipes/${recipe.title}/${recipe.id}`
      }}>
        <button onClick={() => setCurrentRecipe(recipe)} className="view-btn">View</button>
      </Link>
    </div>
  )
}

Favorite.propTypes = {
  recipe: PropTypes.object,
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
  setCurrentRecipe: PropTypes.func
}

export default Favorite;
