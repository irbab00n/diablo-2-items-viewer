import React from 'react';

import SplitComponent from '../SplitComponent';

const Link = SplitComponent(() => import('../Link'));

import './_grid.scss';

const GridItemLink = (props) => {
  const {
    centered = false,
    children = [],
    className = '',
    href = '',
    width = 'full'
  } = props;

  return(
    <Link 
      className={`grid-item-link ${width}-item ${centered ? 'centered' : ''} ${className}`} 
      href={href}
    >
      {children}
    </Link>
  );
};

export default GridItemLink;