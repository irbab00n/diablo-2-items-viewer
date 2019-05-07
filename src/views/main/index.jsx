import React from 'react';

import SplitComponent from '../../components/SplitComponent'

const GridWrapper = SplitComponent(() => import('../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../components/Grid/GridItem'));
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
        <GridItem width="quarter" ><Link href="/items">View Items</Link></GridItem>
      </GridWrapper>
    </section>
  </main>
);

export default MainView;