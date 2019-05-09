import React, { useState } from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../../components/Grid/GridItemLink'));
const Link = SplitComponent(() => import('../../../components/Link'));

const ItemsPage = (props) => {
  const { match } = props;

  console.log('match on items page: ', match);

  return (
    <GridItem width="four-fifths" enableScrolling={true}>
      <section>
        <GridWrapper>
          <GridItem width="full"><h1>Welcome to the Items Page</h1></GridItem>
          <GridItem width="full"><p>As you journey through the lands of Sanctuary you will come across numerous items that can help you accomplish your goals.</p></GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h4>Item Basics</h4></GridItem>
          <GridItem width="full"><p>To learn more about some of <Link href={`${match.url}/item-basics`}>the basics</Link> of how items work within Diablo 2.</p></GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h4>Potions</h4></GridItem>
          <GridItem width="full">
            <p>Learn more about the various types of <Link href={`${match.url}/potions`}>potions</Link> found in the world.</p>
          </GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h4>Rings & Amulets</h4></GridItem>
          <GridItem width="full">
            <p>Before gold coins were accepted as the universal currency, the wealthy fashioned gemstones and precious metals into jewelry in order to display their riches to others. Court mages eventually discovered that these adornments could be charged with magical enchantments. Of this jewelry, we have <Link href={`${match.url}/rings`}>rings</Link> and <Link href={`${match.url}/amulets`}>amulets</Link>.</p>
          </GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h4>Weapons & Armor</h4></GridItem>
          <GridItemLink width="half" href={`${match.url}/weapons`} centered>Weapons</GridItemLink>
          <GridItemLink width="half" href={`${match.url}/armor`} centered>Armor</GridItemLink>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h4>Socketed Items</h4></GridItem>
          <GridItemLink width="quarter" href={`${match.url}/gems`} centered>Gems</GridItemLink>
          <GridItemLink width="quarter" href={`${match.url}/jewels`} centered>Jewels</GridItemLink>
          <GridItemLink width="half" href={`${match.url}/runes`} centered>Runes</GridItemLink>
          <GridItemLink width="full" href={`${match.url}/runewords`} centered>Runewords</GridItemLink>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h4>Misc Items within Diablo 2</h4></GridItem>
          <GridItemLink width="quarter" href={`${match.url}/charms`} centered>Charms</GridItemLink>
        </GridWrapper>
      </section>
    </GridItem>
  );
};

export default ItemsPage;