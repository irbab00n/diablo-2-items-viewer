import React from 'react';

import SplitComponent from '../SplitComponent';

const CrumbLink = SplitComponent(() => import('./CrumbLink'));
const CurrentCrumb = SplitComponent(() => import('./CurrentCrumb'));

const buildBreadcrumbLinks = (links) => {
  let href = '';
  let crumbs = [];
  for (let i = 1; i < links.length; i++) {
    href += `/${links[i]}`;
    crumbs.push(
      i === links.length - 1 ?
        <CurrentCrumb href={href} text={links[i]} key={`breadcrumb-current-${i}`}/> :
        <CrumbLink href={href} text={links[i]} key={`breadcrumb-link-${i}`}/>
    );
  }
  return crumbs;
};

const BreadcrumbLinkWrapper = (props) => {
  const { path = '' } = props;

  return (
    <ul className="breadcrumb-wrapper">
      {buildBreadcrumbLinks(path.split('/'))}
    </ul>
  );
};

export default BreadcrumbLinkWrapper;