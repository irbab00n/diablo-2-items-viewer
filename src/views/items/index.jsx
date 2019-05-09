import React from 'react';
import { Route, Switch } from 'react-router';

import SplitComponent from '../../components/SplitComponent';

const GridWrapper = SplitComponent(() => import('../../components/Grid/GridWrapper'));
const GridItem = SplitComponent(() => import('../../components/Grid/GridItem'));
const GridItemLink = SplitComponent(() => import('../../components/Grid/GridItemLink'));

const ArmorPage = SplitComponent(() => import('./pages/armor'));
const CharmsPage = SplitComponent(() => import('./pages/CharmsPage'));
const GemsPage = SplitComponent(() => import('./pages/GemsPage'));
const ItemBasicsPage = SplitComponent(() => import('./pages/ItemBasicsPage'));
const ItemsPage = SplitComponent(() => import('./pages/ItemsPage'));
const JewelsPage = SplitComponent(() => import('./pages/JewelsPage'));
const PotionsPage = SplitComponent(() => import('./pages/PotionsPage'));
const RunesPage = SplitComponent(() => import('./pages/RunesPage'));
const RunewordsPage = SplitComponent(() => import('./pages/RunewordsPage'));
const WeaponsPage = SplitComponent(() => import('./pages/WeaponsPage'));

import './_items-view.scss';

const ItemsView = (props) => {
  const { match } = props;
  return (
    <main id="items-view">
      <GridWrapper id="items-view-grid">
        <GridItem width="fifth">
          SideNav
        </GridItem>
        <Switch>
          <Route exact path={`${match.path}`} component={ItemsPage}/>
          <Route path={`${match.path}/armor`} component={ArmorPage}/>
          <Route path={`${match.path}/charms`} component={CharmsPage}/>
          <Route path={`${match.path}/gems`} component={GemsPage}/>
          <Route path={`${match.path}/item-basics`} component={ItemBasicsPage}/>
          <Route path={`${match.path}/jewels`} component={JewelsPage}/>
          <Route path={`${match.path}/potions`} component={PotionsPage}/>
          <Route path={`${match.path}/runes`} component={RunesPage}/>
          <Route path={`${match.path}/runewords`} component={RunewordsPage}/>
          <Route path={`${match.path}/weapons`} component={WeaponsPage}/>
        </Switch>
      </GridWrapper>
    </main>
  );
};

export default ItemsView;