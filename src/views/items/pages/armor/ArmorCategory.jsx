import React from 'react';

import SplitComponent from '../../../../components/SplitComponent';

const CrumbLinks = SplitComponent(() => import('../../../../components/CrumbLinks'));
const GridWrapper = SplitComponent(() => import('../../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../../../components/Grid/GridItemLink'));

const ArmorCategory = (props) => {
  const { match } = props;
  console.log('props on Armor Category: ', props);

  return (
    <GridItem width="four-fifths" enableScrolling={true}>
      <section>
        <GridWrapper>
          <CrumbLinks path={match.url}/>
        </GridWrapper>
      </section>
    </GridItem>
  );
};

export default ArmorCategory;