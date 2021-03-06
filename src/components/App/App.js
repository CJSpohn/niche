import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from '../Header/Header';
import Aside from '../Aside/Aside';
import Recipes from '../Recipes/Recipes'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <div className="body-wrapper">
        <Aside />
        <Recipes />
      </div>
    </>
  )
}

export default App
