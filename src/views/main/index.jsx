import React from 'react';
import './_main-view.scss';

// import diablo2wallpaper from '../../../assets/images/diablo-2-wallpaper.jpg';

import SplitComponent from '../../components/SplitComponent';
const GridWrapper = SplitComponent(() => import('../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../components/Grid/GridItemLink'));
const Link = SplitComponent(() => import('../../components/Link'));


const MainView = () => (
  <main id="main-view">
    {/* <h1 className="page-title">A Grid with various sized components!</h1> */}
    <section className="bg-grey-400">
      <GridWrapper>
        <GridItem width="full">
          <img src={''} className="hero-image"/>
        </GridItem>
        <GridItem width="full">
          <h1>Welcome to the Horadric Armory</h1>
        </GridItem>
        <GridItemLink className="no-underline" width="quarter" href="/items" centered>View Items</GridItemLink>
      </GridWrapper>
    </section>
  </main>
);

export default MainView;