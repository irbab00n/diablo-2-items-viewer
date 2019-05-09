import React from 'react';
import { Route, Switch } from 'react-router';

import SplitComponent from '../../../../components/SplitComponent';

const ArmorCategory = SplitComponent(() => import('./ArmorCategory'));
const ArmorMain = SplitComponent(() => import('./ArmorMain'));

const ArmorPage = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ArmorMain}/>
      <Route path={`${match.path}/:armorBase`} component={ArmorCategory}/>
    </Switch>
  );
};

export default ArmorPage;