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
          <GridItem width="quarter" centered>Helms</GridItem>
          <GridItem width="quarter" centered>Armor</GridItem>
          <GridItem width="quarter" centered>Shields</GridItem>
          <GridItem width="quarter" centered>Gloves</GridItem>
          <GridItem width="quarter" centered>Boots</GridItem>
          <GridItem width="quarter" centered>Belts</GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h1>Class-Specific Armor</h1></GridItem>
          <GridItem width="quarter" centered>Barbarian Helms</GridItem>
          <GridItem width="quarter" centered>Druid Pelts</GridItem>
          <GridItem width="quarter" centered>Paladin Shields</GridItem>
          <GridItem width="quarter" centered>Necromancer Shrunken Heads</GridItem>
        </GridWrapper>
      </section>
    </main>
  );
};

export default ArmorPage;