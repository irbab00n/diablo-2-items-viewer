import React from 'react';

import capitolizeFirstChar from './capitolizeFirstChar';

import './_current-crumb.scss';

const CurrentCrumb = (props) => (
  <li className="current-crumb">{props.text.split('-').map(word => capitolizeFirstChar(word)).join(' ')}</li>
);

export default CurrentCrumb;