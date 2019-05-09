import React from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const Link = SplitComponent(() => import('../../../components/Link'));

const RunewordsPage = (props) => {
  const { match } = props;
  const root = '/items';

  console.log('match on armor view: ', match);

  return (
    <GridItem width="four-fifths" enableScrolling={true}>
      <GridWrapper>
        <GridItem width="full"><Link href={root}>Back to Items</Link></GridItem>
        <GridItem width="full"><h1>Welcome to the Runewords Page</h1></GridItem>
      </GridWrapper>
    </GridItem>
  );
};

export default RunewordsPage;