import React from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const Link = SplitComponent(() => import('../../../components/Link'));

const PotionsPage = (props) => {
  const { match } = props;
  const root = '/items';

  console.log('match on potions page: ', match);

  return (
    <main id="items-view">
      <section>
        <GridWrapper>
          <GridItem width="full"><Link href={root}>Back to Items</Link></GridItem>
          <GridItem width="full"><h1>Welcome to the Potions Page</h1></GridItem>
        </GridWrapper>
      </section>
    </main>
  );
};

export default PotionsPage;