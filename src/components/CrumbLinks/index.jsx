import React from 'react';

import SplitComponent from '../SplitComponent';

import './_crumb-links-wrapper.scss';

const CrumbLink = SplitComponent(() => import('./CrumbLink'));
const CurrentCrumb = SplitComponent(() => import('./CurrentCrumb'));

const buildCrumbLinks = (links) => {
  let href = '';
  let crumbs = [];
  for (let i = 1; i < links.length; i++) {
    href += `/${links[i]}`;
    crumbs.push(
      i === links.length - 1 ?
        <CurrentCrumb href={href} text={links[i]} key={`crumblinks-current-${i}`}/> :
        <CrumbLink href={href} text={links[i]} key={`crumblinks-link-${i}`}/>
    );
  }
  return crumbs;
};

const CrumbLinksWrapper = (props) => {
  const { path = '' } = props;

  return (
    <ul className="crumblinks-wrapper">
      {buildCrumbLinks(path.split('/'))}
    </ul>
  );
};

export default CrumbLinksWrapper;