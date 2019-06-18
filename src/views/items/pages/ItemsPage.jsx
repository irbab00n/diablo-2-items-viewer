import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import './_page-common.scss';

import SplitComponent from '../../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../../components/Grid/GridItemLink'));
const Link = SplitComponent(() => import('../../../components/Link'));

const ItemsPage = (props) => {
  const { match } = props;

  let gridSize = isMobile ? 'full' : 'four-fifths';

  return (
    <GridItem width={gridSize}>
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
          <GridItem width="full"><h2>Potions</h2></GridItem>
          <GridItem width="half" centered>
            <p>Learn more about the various types of potionsfound in the world.</p>
          </GridItem>
          <GridItemLink width="quarter" href={`${match.url}/potions`} centered>Potions</GridItemLink>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h2>Rings & Amulets</h2></GridItem>
          <GridItem width="half" centered>
            <p>Before gold coins were accepted as the universal currency, the wealthy fashioned gemstones and precious metals into jewelry in order to display their riches to others. Court mages eventually discovered that these adornments could be charged with magical enchantments.</p>
          </GridItem>
          <GridItemLink width="quarter" href={`${match.url}/rings`} centered>Rings</GridItemLink>
          <GridItemLink width="quarter" href={`${match.url}/amulets`} centered>Amulets</GridItemLink>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper id="armor-info-grid">
          <GridItem width="full"><h2>Weapons & Armor</h2></GridItem>
          <GridItemLink width="half" href={`${match.url}/weapons`} centered>Weapons</GridItemLink>
          <GridItemLink width="half" href={`${match.url}/armor`} centered>Armor</GridItemLink>
          <GridItem width="full"><h4>Normal</h4></GridItem>
          <GridItem width="full">
            <p>Normal Items can be found on Normal, Nightmare and Hell Difficulty Levels. <span className="color-item-magic">Magic</span> and <span className="color-item-rare">Rare</span> Items can be Gambled.</p>
          </GridItem>
          <GridItem width="full"><h4>Exceptional</h4></GridItem>
          <GridItem width="full">
            <p>Exceptional Items have Character Level Limits around level 25. Exceptional Armor has added Defense with higher Strength requirements. Exceptional Weapons have a higher Minimum and Maximum Damage. Weapons that give skill points, have higher level skills and spells on these items. Exceptional Weapons also have higher Strength and Dexterity requirements. There are Socketed, <span className="color-item-magic">Magic</span>, <span className="color-item-rare">Rare</span>, <span className="color-item-set">Set</span>, <span className="color-item-crafted">Crafted</span> and <span className="color-item-unique">Unique</span> versions of Exceptional items. Exceptional Items first appear late in Normal Difficulty and become more common as you get to higher difficulty levels tied to monster levels. <span className="color-item-magic">Magic</span> Exceptional Items can be found at the Vendors at higher Character and Difficulty Levels. <span className="color-item-rare">Rare</span> Exceptional Items can be Gambled.</p>
          </GridItem>
          <GridItem width="full"><h4>Elite</h4></GridItem>
          <GridItem width="full">
            <p>Elite Items have Character Level Limits of 39-73. Elite Armor has added Defense with higher Strength requirements. Elite Weapons have a higher Average Damage with higher Strength and Dexterity requirements. Weapons that give skill points, have higher level skills and spells on these items. There are Socketed, Magic, Rare, Set, Crafted and Unique versions of Elite items. Elite Items first appear late in Nightmare Difficulty and become more common as you get to higher difficulty levels tied to monster levels. Magic Elite Items can be found at the Vendors at higher Character and Difficulty Levels. Rare Elite Items can be Gambled.</p>
          </GridItem>
          <GridItem width="full"><h4>Normal/Exceptional vs Elite Items</h4></GridItem>
          <GridItem width="full">
            <p>Some Elite Armor has similar Defense to encourage players to adopt different looks. With regards to inconsistencies between Elite and Exceptionals in terms of how they "progress": Elite Weapons may not be perfectly analogous to their Exceptional versions. They are fairly balanced in such a way now that there is no clear superiority in terms of weapon selection. In general - average or minimum damage is more effective in gameplay than max damage. All of the weapons have been balanced for similar damage/time (as far as 1h vs. 1h and 2h vs. 2h is concerned).</p>
          </GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h2>Item Qualities</h2></GridItem>
          <GridItem width="full">
            <p>The names of Magic, Rare, Crafted/Very Rare, Set, and Unique Items appear in <span className="color-item-magic">Violet</span>, <span className="color-item-rare">Yellow</span>, <span className="color-item-crafted">Orange</span>, <span className="color-item-set">Green</span>, and <span className="color-item-unique">Gold</span> text, respectively.</p>
          </GridItem>
          <GridItem width="full" className="use-left-margin"><h5><span className="color-item-magic">Magic Items</span></h5></GridItem>
          <GridItem width="full" className="use-left-margin">
            <p>As Hell's will has corrupted the land, mages and smiths crafted many magical means to keep the people safe from harm. Fine jewelry, armor, and weapons were often enchanted with arcane energies in an effort to assist those who battled against the tide of evil. During your travels you will likely encounter items imbued with these magics, whose names appear in blue when highlighted. Magic Items have one or two magical attributes applied to the basic item. Learn more about [Magic Items]. Take a look at Magic [Prefixes and Suffixes].</p>
          </GridItem>
          <GridItem width="full" className="use-left-margin"><h5><span className="color-item-rare">Rare Items</span></h5></GridItem>
          <GridItem width="full" className="use-left-margin">
            <p>Some magic items radiate energy beyond that of a simple enchanted item. Although much less common, these rare items are significantly more powerful than standard magically enhanced items. A Rare item is distinguished by a yellow title when highlighted. Rare items contain two to six magic properties and are highly valued by those that have them. The names of rare items are not linked to their magical attributes. Learn more about [Rare Items].</p>
          </GridItem>
          <GridItem width="full" className="use-left-margin"><h5><span className="color-item-crafted">Crafted Items</span></h5></GridItem>
          <GridItem width="full" className="use-left-margin">
            <p>Crafted Items are similar to rare items but can only be created using the Horadric Cube. These items have fixed properties as well as random Magic Prefixes and Suffixes. [Learn more about Crafted Items.]</p>
          </GridItem>
          <GridItem width="full" className="use-left-margin"><h5><span className="color-item-set">Set Items</span></h5></GridItem>
          <GridItem width="full" className="use-left-margin">
            <p>Rumors persist of unique, distinguished item sets that once belonged to great champions and heroes from the past. These sets are said to bestow additional magic abilities once all its pieces have been found and equipped. Set items are recognizable by their green names. Once identified, each set item names the other pieces required to complete the set. Set Items are uniquely named and have several magic attributes. When a character is equipped with all the items of a Set, additional bonus magic attributes are added as well. When a set item is selected items in the entire set are listed, and the ones in the set you have in your possession are highlighted. See a list of [Set Items].</p>
          </GridItem>
          <GridItem width="full" className="use-left-margin"><h5><span className="color-item-unique">Unique Items</span></h5></GridItem>
          <GridItem width="full" className="use-left-margin">
            <p>Once in a long while, a dedicated and intrepid adventurer may come across an item of particularly legendary and unique power. Unique Items have unique names and attributes. Unique Items are more rare than Rare or Set Items. See some [Unique Items].</p>
          </GridItem>
          <GridItem width="full" className="use-left-margin">
            <p>Note: Magical attributes are typically listed along with any regular and superior attributes an item may have. This may result in a list of what appears to be more than the limits described above for magical attributes of an item type (magic, rare, set or unique).</p>
          </GridItem>
        </GridWrapper>
      </section>
      <section>
        <GridWrapper>
          <GridItem width="full"><h2>Socketed Items</h2></GridItem>
          <GridItem width="full">
            <p>Smiths of ancient times mastered the art of bestowing magical properties upon weapons and armor by setting them with powerful gems. Most surviving examples of this art have long since been stripped of their valuable stones by ignorant thieves, rendering their true power silent until new gems are found and set into their empty sockets. The exact nature of the enchantment depends on the type and quality of the gemstones inserted into the item, as well as the item type.</p>
          </GridItem>
          <GridItem width="half" centered column>
            <h4>Gems</h4>
            <p>Precious gems embody innate magical abilities. When set into a socketed item these gems can add powerful magic effects.</p>
          </GridItem>
          <GridItemLink width="half" href={`${match.url}/gems`} centered>Gems</GridItemLink>
          <GridItemLink width="half" href={`${match.url}/jewels`} centered>Jewels</GridItemLink>
          <GridItem width="half" centered column>
            <h4>Jewels</h4>
            <p>Jewels are similar to Gems, except that instead of having predetermined magical abilities like a Gem, each Jewel possesses random magic properties, allowing you to bestow a wide variety of magical abilities to your Socketed Item.</p>
          </GridItem>
          <GridItem width="half" centered column>
            <h4>Runes</h4>
            <p>Runes are small stones inscribed with magical glyphs that can be inserted into Socketed Items. Runes are different from other Insertable Items: not only do individual Runes have magical properties, certain combinations (or Rune Sets), when inserted into an item in the proper order, give that item even more wondrous abilities.</p>
          </GridItem>
          <GridItemLink width="quarter" href={`${match.url}/runes`} centered>Runes</GridItemLink>
          <GridItemLink width="quarter" href={`${match.url}/runewords`} centered>Runewords</GridItemLink>
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