import React from 'react';
import './Burger.css';

import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      <Ingredient type="cheese" />
      <Ingredient type="meat" />
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
