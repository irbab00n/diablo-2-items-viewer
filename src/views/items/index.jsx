import React from 'react';
import { Route, Switch } from 'react-router';

import SplitComponent from '../../components/SplitComponent';

const ArmorPage = SplitComponent(() => import('./pages/ArmorPage'))
const CharmsPage = SplitComponent(() => import('./pages/CharmsPage'))
const GemsPage = SplitComponent(() => import('./pages/GemsPage'))
const ItemsPage = SplitComponent(() => import('./pages/ItemsPage'))
const JewelsPage = SplitComponent(() => import('./pages/JewelsPage'))
const PotionsPage = SplitComponent(() => import('./pages/PotionsPage'))
const RunesPage = SplitComponent(() => import('./pages/RunesPage'))
const RunewordsPage = SplitComponent(() => import('./pages/RunewordsPage'))
const WeaponsPage = SplitComponent(() => import('./pages/WeaponsPage'))

import './_items-view.scss';

const ItemsView = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ItemsPage}/>
      <Route path={`${match.path}/armor`} component={ArmorPage}/>
      <Route path={`${match.path}/charms`} component={CharmsPage}/>
      <Route path={`${match.path}/gems`} component={GemsPage}/>
      <Route path={`${match.path}/jewels`} component={JewelsPage}/>
      <Route path={`${match.path}/potions`} component={PotionsPage}/>
      <Route path={`${match.path}/runes`} component={RunesPage}/>
      <Route path={`${match.path}/runewords`} component={RunewordsPage}/>
      <Route path={`${match.path}/weapons`} component={WeaponsPage}/>
    </Switch>
  );
};

export default ItemsView;