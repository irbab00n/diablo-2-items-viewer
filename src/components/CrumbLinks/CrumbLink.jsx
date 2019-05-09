import React from 'react';

import SplitComponent from '../SplitComponent';

import './_crumb-link.scss';

const Link = SplitComponent(() => import('../Link'));

const capitolizeFirstChar = string => {
  console.log('string to capitolize: ', string);
  return string[0].toUpperCase() + string.substr(1);
}; 

const CrumbLink = (props) => (
  <li>
    <Link className="breadcrumb-link" href={props.href}>{capitolizeFirstChar(props.text)}</Link>
    <span className="breadcrumb-link-spacer">&#62;</span>
  </li>
);

export default CrumbLink;