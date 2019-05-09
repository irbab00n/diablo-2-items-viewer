import React from 'react';

const capitolizeFirstChar = string => {
  console.log('string to capitolize: ', string);
  return string[0].toUpperCase() + string.substr(1);
}; 

const CurrentCrumb = (props) => (
  <li className="current-crumb">{capitolizeFirstChar(props.text)}</li>
);

export default CurrentCrumb;