import React from 'react';
import './Ingredient.css';
import PropTypes from 'prop-types';

const ingredient = (props) => {
  let burgerIngredient = null;

  switch (props.type) {
    case 'bread-top':
      burgerIngredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case 'bread-bottom':
      burgerIngredient = <div className="BreadBottom"></div>;
      break;
    case 'salad':
      burgerIngredient = <div className="Salad"></div>;
      break;
    case 'bacon':
      burgerIngredient = <div className="Bacon"></div>;
      break;
    case 'cheese':
      burgerIngredient = <div className="Cheese"></div>;
      break;
    case 'meat':
      burgerIngredient = <div className="Meat"></div>;
      break;
    default:
      burgerIngredient = null;
  }

  return burgerIngredient;
};

ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ingredient;
