import React from 'react';

import './_grid.scss';

const GridWrapper = ({children: listItems = [], id = ''}) => (
  <div id={id} className="grid-wrapper">
    {listItems}
  </div>
);

export default GridWrapper;