import React from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../../components/Grid/GridItemLink'));
const Link = SplitComponent(() => import('../../../components/Link'));

const ItemsPage = (props) => {
  const { match } = props;

  console.log('match on items page: ', match);

  return (
    <main id="items-view">
      <GridWrapper>
        <GridItem width="fifth" enableScrolling>SideNav</GridItem>
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
            </GridWrapper>
          </section>
          <section>
            <GridWrapper>
              <GridItem width="full"><h4>Potions</h4></GridItem>
              <GridItemLink width="quarter" href={`${match.url}/potions`} centered>View Potions</GridItemLink>
              
            </GridWrapper>
          </section>
          <section>
            <GridWrapper>
              <GridItem width="full"><h4>Rings & Amulets</h4></GridItem>
              <GridItemLink width="quarter" href={`${match.url}/rings`} centered>View Rings</GridItemLink>
              <GridItemLink width="quarter" href={`${match.url}/amulets`} centered>View Amulets</GridItemLink>
            </GridWrapper>
          </section>
          <section>
            <GridWrapper>
              <GridItem width="full"><h4>Weapons & Armor</h4></GridItem>
              <GridItemLink width="half" href={`${match.url}/weapons`} centered>View Weapons</GridItemLink>
              <GridItemLink width="half" href={`${match.url}/armor`} centered>View Armor</GridItemLink>
            </GridWrapper>
          </section>
          <section>
            <GridWrapper>
              <GridItem width="full"><h4>Socketed Items</h4></GridItem>
              <GridItemLink width="quarter" href={`${match.url}/gems`} centered>View Gems</GridItemLink>
              <GridItemLink width="quarter" href={`${match.url}/jewels`} centered>View Jewels</GridItemLink>
              <GridItemLink width="half" href={`${match.url}/runes`} centered>View Runes</GridItemLink>
              <GridItemLink width="half" href={`${match.url}/runewords`} centered>View Runewords</GridItemLink>
            </GridWrapper>
          </section>
          <section>
            <GridWrapper>
              <GridItem width="full"><h4>Misc Items within Diablo 2</h4></GridItem>
              <GridItemLink width="quarter" href={`${match.url}/charms`} centered>View Charms</GridItemLink>
            </GridWrapper>
          </section>
        </GridItem>
      </GridWrapper>
    </main>
  );
};

export default ItemsPage;