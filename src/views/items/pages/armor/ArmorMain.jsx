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
        <GridWrapper id="armor-info-grid">
          <CrumbLinks path={match.path}/>
          <GridItem width="full"><h1>Armor</h1></GridItem>
          <GridItem width="full"><h4>Normal Armor</h4></GridItem>
          <GridItem width="full"><p>Normal Items can be found on Normal, Nightmare and Hell Difficulty Levels. Magic and Rare Items can be Gambled.</p></GridItem>
          <GridItem width="full"><h4>Exceptional Armor</h4></GridItem>
          <GridItem width="full"><p>Exceptional Items have Character Level Limits around level 25. Exceptional Armor has added Defense with higher Strength requirements. Exceptional Weapons have a higher Minimum and Maximum Damage. Weapons that give skill points, have higher level skills and spells on these items. Exceptional Weapons also have higher Strength and Dexterity requirements. There are Socketed, Magic, Rare, Set, Crafted and Unique versions of Exceptional items. Exceptional Items first appear late in Normal Difficulty and become more common as you get to higher difficulty levels tied to monster levels. Magic Exceptional Items can be found at the Vendors at higher Character and Difficulty Levels. Rare Exceptional Items can be Gambled.</p></GridItem>
          <GridItem width="full"><h4>Elite Armor</h4></GridItem>
          <GridItem width="full"><p>Elite Items have Character Level Limits of 39-73. Elite Armor has added Defense with higher Strength requirements. Elite Weapons have a higher Average Damage with higher Strength and Dexterity requirements. Weapons that give skill points, have higher level skills and spells on these items. There are Socketed, Magic, Rare, Set, Crafted and Unique versions of Elite items. Elite Items first appear late in Nightmare Difficulty and become more common as you get to higher difficulty levels tied to monster levels. Magic Elite Items can be found at the Vendors at higher Character and Difficulty Levels. Rare Elite Items can be Gambled.</p></GridItem>
          <GridItem width="full"><h4>Normal/Exceptional vs Elite Items</h4></GridItem>
          <GridItem width="full"><p>Some Elite Armor has similar Defense to encourage players to adopt different looks. With regards to inconsistencies between Elite and Exceptionals in terms of how they "progress": Elite Weapons may not be perfectly analogous to their Exceptional versions. They are fairly balanced in such a way now that there is no clear superiority in terms of weapon selection. In general - average or minimum damage is more effective in gameplay than max damage. All of the weapons have been balanced for similar damage/time (as far as 1h vs. 1h and 2h vs. 2h is concerned).</p></GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper id="armor-types-grid">
          <GridItem width="full"><h1>Armor Types</h1></GridItem>
          <GridItemLink width="quarter" centered href={`${match.path}/circlets`}>Circlets</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/helms`}>Helms</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/armor`}>Armor</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/shields`}>Shields</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/gloves`}>Gloves</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/boots`}>Boots</GridItemLink>
          <GridItemLink width="quarter" centered href={`${match.path}/belts`}>Belts</GridItemLink>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper id="class-specific-armor-types-grid">
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