import React from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const Link = SplitComponent(() => import('../../../components/Link'));

const WeaponsPage = (props) => {
  const { match } = props;
  const root = '/items';

  console.log('match on weapons page: ', match);

  return (
    <GridItem width="four-fifths" enableScrolling={true}>
      <section>
        <GridWrapper>
          <GridItem width="full"><Link href={root}>Back to Items</Link></GridItem>
          <GridItem width="full"><h1>Welcome to the Weapons Page</h1></GridItem>
          <GridItem width="quarter" centered>Axes</GridItem>
          <GridItem width="quarter" centered>Bows</GridItem>
          <GridItem width="quarter" centered>Crossbows</GridItem>
          <GridItem width="quarter" centered>Daggers</GridItem>
          <GridItem width="quarter" centered>Javelins</GridItem>
          <GridItem width="quarter" centered>Maces</GridItem>
          <GridItem width="quarter" centered>Polearms</GridItem>
          <GridItem width="quarter" centered>Scepters</GridItem>
          <GridItem width="quarter" centered>Spears</GridItem>
          <GridItem width="quarter" centered>Staves</GridItem>
          <GridItem width="quarter" centered>Swords</GridItem>
          <GridItem width="quarter" centered>Throwing</GridItem>
          <GridItem width="quarter" centered>Wands</GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h1>Class-Specific Weapons</h1></GridItem>
          <GridItem width="quarter" centered>Amazon Weapons</GridItem>
          <GridItem width="quarter" centered>Assassin Katars</GridItem>
          <GridItem width="quarter" centered>Sorceress Orbs</GridItem>
        </GridWrapper>
      </section>
    </GridItem>
  );
};

export default WeaponsPage;