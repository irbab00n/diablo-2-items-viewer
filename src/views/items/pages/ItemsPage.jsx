import React from 'react';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const Link = SplitComponent(() => import('../../../components/Link'));

const ItemsPage = (props) => {
  const { match } = props;

  console.log('match on items page: ', match);

  return (
    <main id="items-view">
      <section>
        <GridWrapper>
          <GridItem width="full"><h1>Welcome to the Items Page</h1></GridItem>
          <GridItem width="full"><h4>Weapons & Armor</h4></GridItem>
          <GridItem width="half"><Link href={`${match.url}/weapons`}>View Weapons</Link></GridItem>
          <GridItem width="half"><Link href={`${match.url}/armor`}>View Armor</Link></GridItem>
          <GridItem width="quarter"><Link href={`${match.url}/gems`}>View Gems</Link></GridItem>
          <GridItem width="quarter"><Link href={`${match.url}/jewels`}>View Jewels</Link></GridItem>
          <GridItem width="quarter"><Link href={`${match.url}/charms`}>View Charms</Link></GridItem>
          <GridItem width="quarter"><Link href={`${match.url}/potions`}>View potions</Link></GridItem>
          <GridItem width="half">
            <Link href={`${match.url}/runes`}>View Runes</Link>
            <Link href={`${match.url}/runewords`}>View Runewords</Link>
          </GridItem>
          <GridItem width="half">
            <Link href={`${match.url}/rings`}>View Rings</Link>
            <Link href={`${match.url}/amulets`}>View Amulets</Link>
          </GridItem>
        </GridWrapper>
      </section>
    </main>
  );
};

export default ItemsPage;