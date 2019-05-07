import React from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const Link = SplitComponent(() => import('../../../components/Link'));

const JewelsPage = (props) => {
  const { match } = props;
  const root = '/items';

  console.log('match on jewels page: ', match);

  return (
    <main id="items-view">
      <section>
        <GridWrapper>
          <GridItem width="full"><Link href={root}>Back to Items</Link></GridItem>
          <GridItem width="full"><h1>Welcome to the Jewels Page</h1></GridItem>
        </GridWrapper>
      </section>
    </main>
  );
};

export default JewelsPage;