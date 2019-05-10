import React from 'react';

import './_grid.scss';

const GridItem = (props) => {
  const { anchorRight = false, centered = false, children = [], column = false, enableScrolling = false, width = 'full' } = props;

  return(
    <div className={`${width}-item ${centered ? 'centered' : ''} ${column ? 'column' : ''} ${anchorRight ? 'anchor-right' : ''} ${enableScrolling ? 'should-scroll' : ''}`}>
      {children}
    </div>
  );
};

export default GridItem;