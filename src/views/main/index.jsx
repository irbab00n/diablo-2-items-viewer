import React from 'react';

import SplitComponent from '../../components/SplitComponent'

const GridWrapper = SplitComponent(() => import('../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../components/Grid/GridItemLink'));
const Link = SplitComponent(() => import('../../components/Link'));

import './_main-view.scss';

const MainView = () => (
  <main id="main-view">
    {/* <h1 className="page-title">A Grid with various sized components!</h1> */}
    <section className="bg-grey-400">
      <GridWrapper>
        <GridItem width="full">
          <h1>Welcome to the Horadric Armory</h1>
        </GridItem>
        <GridItemLink className="no-underline" width="quarter" href="/items" centered>View Items</GridItemLink>
      </GridWrapper>
    </section>
  </main>
);

export default MainView;