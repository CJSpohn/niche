import React from 'react';
import './Aside.css';

const Aside = ({ favorites }) => {
  //make a favorite component from favorites and render after hr
  return (
    <section className="aside">
      <h1>Current Highlights</h1>
      <hr/>
    </section>
  )
}

export default Aside;
