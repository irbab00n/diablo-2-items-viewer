import React from 'react';

import SplitComponent from '../SplitComponent';

const GridItem = SplitComponent(() => import('../Grid/GridItem'));

const NavSidebar = (props) => {
  return (
    <GridItem width="fifth">
      SideNav
    </GridItem>
  );
};

export default NavSidebar;