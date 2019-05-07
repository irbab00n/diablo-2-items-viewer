import React from 'react';

import './_grid.scss';

const GridItem = (props) => {
  const { anchorRight = false, centered = false, children = [], enableScrolling = false, width = 'full' } = props;

  return(
    <div className={`${width}-item ${centered ? 'centered' : ''} ${anchorRight ? 'anchor-right' : ''} ${enableScrolling ? 'should-scroll' : ''}`}>
      {children}
    </div>
  );
};

export default GridItem;