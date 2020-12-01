import React from 'react';
import './Layout.css';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
  <Auxiliary>
    <Toolbar />
    <SideDrawer />
    <main className="Content">{props.children}</main>
  </Auxiliary>
);

export default layout;
