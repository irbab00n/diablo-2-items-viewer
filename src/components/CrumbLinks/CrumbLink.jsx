import React from 'react';

import SplitComponent from '../SplitComponent';
import capitolizeFirstChar from './capitolizeFirstChar';

import './_crumb-link.scss';

const Link = SplitComponent(() => import('../Link'));

const CrumbLink = (props) => (
  <li>
    <Link className="breadcrumb-link" href={props.href}>{capitolizeFirstChar(props.text)}</Link>
    <span className="breadcrumb-link-spacer">&#62;</span>
  </li>
);

export default CrumbLink;