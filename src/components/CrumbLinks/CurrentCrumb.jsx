import React from 'react';

import capitolizeFirstChar from './capitolizeFirstChar';

import './_current-crumb.scss';

const CurrentCrumb = (props) => (
  <li className="current-crumb">{capitolizeFirstChar(props.text)}</li>
);

export default CurrentCrumb;