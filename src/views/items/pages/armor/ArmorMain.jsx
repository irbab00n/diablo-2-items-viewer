import React from 'react';

import SplitComponent from '../../../../components/SplitComponent';

const CrumbLinks = SplitComponent(() => import('../../../../components/CrumbLinks'));
const GridWrapper = SplitComponent(() => import('../../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../../../components/Grid/GridItemLink'));
const Link = SplitComponent(() => import('../../../../components/Link'));

const ArmorMain = (props) => {
  const { match } = props;
  const root = '/items';

  // console.log('match on items/armor :', match);

  return (
    <GridItem width="four-fifths" enableScrolling={true}>
      <section>
        <GridWrapper>
          {/* Insert Breadcrumb Link Component here */}
          {/* <GridItem width="full"><Link href={root}>Back to Items</Link></GridItem> */}
          <CrumbLinks path={match.path}/>
          {/*  */}
          <GridItem width="full"><h1>Welcome to the Armor Page</h1></GridItem>
          <GridItemLink width="quarter" centered href={`${match.path}/helms`}>Helms</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/armors`}>Armor</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/shields`}>Shields</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/gloves`}>Gloves</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/boots`}>Boots</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/belts`}>Belts</GridItemLink>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h1>Class-Specific Armor</h1></GridItem>
          <GridItemLink width="quarter" centered href={`${match.path}/barbarian-helms`}>Barbarian Helms</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/druid-pelts`}>Druid Pelts</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/paladin-shields`}>Paladin Shields</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/necromancer-heads`}>Necromancer Shrunken Heads</GridItemLink>
        </GridWrapper>
      </section>
    </GridItem>
  );
};

export default ArmorMain;