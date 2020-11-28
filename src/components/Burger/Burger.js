import React from 'react';
import './Burger.css';

import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Add your favourite ingredients...</p>;
  }

  return (
    <div className="Burger">
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
};

export default burger;
