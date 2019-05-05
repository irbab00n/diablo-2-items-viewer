import React from 'react';

import AsyncComponent from '../AsyncComponent';

import './_navbar.scss';

const Link = AsyncComponent(() => import('../Link'));

const Navbar = (props) => (
  <header className="navbar">
    <Link className="logo no-underline" href="/" text={props.logoText} />
    <ul className="links">
      {
        props.links ?
          props.links.map((link, index) => (
            <li key={`navbar-link-${index}`}><Link className="navbar-link no-underline" href={link.href} text={link.text}/></li>
          )) :
          null
      }
    </ul>
  </header>
);

export default Navbar;