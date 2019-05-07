import React from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const Link = SplitComponent(() => import('../../../components/Link'));

const ArmorPage = (props) => {
  const { match } = props;
  const root = '/items';

  console.log('match on armor view: ', match);

  return (
    <main id="items-view">
      <section>
        <GridWrapper>
          <GridItem width="full"><Link href={root}>Back to Items</Link></GridItem>
          <GridItem width="full"><h1>Welcome to the Armor Page</h1></GridItem>
          <GridItem width="full">Filter Bar</GridItem>
        </GridWrapper>
      </section>
    </main>
  );
};

export default ArmorPage;