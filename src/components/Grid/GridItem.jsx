import React from 'react';

import './_grid.scss';

const GridItem = (props) => {
  const { anchorRight = false, centered = false, children = [], className = '', column = false, enableScrolling = false, width = 'full' } = props;

  return(
    <div className={`${width}-item ${centered ? 'centered' : ''} ${column ? 'column' : ''} ${anchorRight ? 'anchor-right' : ''} ${enableScrolling ? 'should-scroll' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default GridItem;