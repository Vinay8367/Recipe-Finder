import React from 'react';
import "./styles/loader.css";

const loader = () => {
  return (
    <div className='loader-container'>
      <div className='spinner '></div>
      <p>Loading Tasty Recipes 😋🤤... </p>
    </div>
  )
}

export default loader ;