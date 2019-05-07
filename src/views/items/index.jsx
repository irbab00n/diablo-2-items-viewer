import React from 'react';

import SplitComponent from '../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../components/Grid/GridItem'));
const Link = SplitComponent(() => import('../../components/Link'));

import './_items-view.scss';

const ItemsView = () => (
  <main id="items-view">
    <section>
      <GridWrapper>
        <GridItem width="full"><h1>Welcome to the Items View</h1></GridItem>
        <GridItem width="full">Weapons & Armor</GridItem>
        <GridItem width="quarter">Gems</GridItem>
        <GridItem width="quarter">Jewels</GridItem>
        <GridItem width="quarter">Charms</GridItem>
        <GridItem width="quarter">Potions</GridItem>
        <GridItem width="half">Rune & Runewords</GridItem>
        <GridItem width="half">Rings & Amulets</GridItem>
      </GridWrapper>
    </section>
  </main>
);

export default ItemsView;