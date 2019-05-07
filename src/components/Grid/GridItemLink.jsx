import React from 'react';

import SplitComponent from '../SplitComponent';

const Link = SplitComponent(() => import('../Link'));

import './_grid.scss';

const GridItemLink = (props) => {
  const {
    anchorRight = false,
    centered = false,
    children = [],
    className = '',
    href = '',
    width = 'full'
  } = props;

  return(
    <Link className={`${width}-item grid-item-link ${centered ? 'centered' : ''} ${anchorRight ? 'anchor-right' : ''} + ${className}`} href={href}>
      {children}
    </Link>
  );
};

export default GridItemLink;