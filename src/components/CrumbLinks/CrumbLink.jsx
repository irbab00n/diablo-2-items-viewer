import React from 'react';

import SplitComponent from '../SplitComponent';

const Link = SplitComponent(() => import('../Link'));

const capitolizeFirstChar = string => {
  console.log('string to capitolize: ', string);
  return string[0].toUpperCase() + string.substr(1);
}; 

const CrumbLink = (props) => (
  <li className="breadcrumb-link"><Link href={props.href}>{capitolizeFirstChar(props.text)}</Link></li>
);

export default CrumbLink;