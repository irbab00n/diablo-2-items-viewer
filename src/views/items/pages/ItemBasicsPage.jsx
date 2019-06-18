import React from 'react';
import './_page-common.scss';

// COMPONENTS
import SplitComponent from '../../../components/SplitComponent';
const CrumbLinks = SplitComponent(() => import('../../../components/CrumbLinks'));
const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const GridSpacer = SplitComponent(() => import('../../../components/Grid/GridSpacer'));
const GridItemLink = SplitComponent(() => import('../../../components/Grid/GridItemLink'));
// const Link = SplitComponent(() => import('../../../components/Link'));

// UTILS
import { addRarityColors } from './utils/addRarityColors';
import removeTitleTag from './utils/removeTitleTag';
import titleTag from './utils/titleTag';

// CONTENT
import itemBasicsContent from '../../../../lib/content/item-basics/home-page-content';

/**
 * 
 * @param {Array} content Array of strings resulting from splitting the content by every '\n' character
 * @returns {Array} An array of Content Components corresponding to the appropriate content type.
 * The possible components are:
 * - Title
 * - Spacer
 * - Paragraph
 */
const buildPageContentElements = content => (
  content.map((block, index) => {
    if (block.includes(titleTag)) {
      return (
        <h4 key={`content-block-${index}`}>{removeTitleTag(block)}</h4>
      );
    } else {
      return block === '' ? '' : (
        <p key={`content-block-${index}`}>{addRarityColors(block)}</p> // Add in an 'item rarity' color decorator based off of coloration tags within the content material
      );
    }
  })
);

const ItemBasicsPage = (props) => {
  const { match } = props;
  const root = '/items';

  console.log('item basics content page: ', itemBasicsContent.split('\n'));

  return (
    <GridItem width="four-fifths">
      <section id="item-basics">
        <GridWrapper>
          <CrumbLinks path={match.path}/>
          <GridItem width="full"><h1>Welcome to the Item Basics</h1></GridItem>
          <GridItem width="full">{buildPageContentElements(itemBasicsContent.split('\n'))}</GridItem>
          <GridItem width="full"><h3>Learn More In-Depth</h3></GridItem>
          <GridItemLink width="quarter" centered><h4>Durability</h4></GridItemLink>
          <GridItemLink width="quarter" centered><h4>Ethereal Items</h4></GridItemLink>
          <GridItemLink width="quarter" centered><h4>Low Quality & Superior Items</h4></GridItemLink>
          <GridItemLink width="quarter" centered><h4>FAQ</h4></GridItemLink>
          <GridItemLink width="quarter" centered><h4>Miscellaneous Info</h4></GridItemLink>
          <GridSpacer />
        </GridWrapper>
      </section>
    </GridItem>
  );
};

export default ItemBasicsPage;