import React from 'react';

import './BuildControl.css';

const buildControl = (props) => (
  <div className="BuildControl">
    <div className="Label">{props.label}</div>
    <button className="Add">Add</button>
    <button className="Remove">Remove</button>
  </div>
);

export default buildControl;
