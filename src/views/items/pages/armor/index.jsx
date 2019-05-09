import React from 'react';
import { Route, Switch } from 'react-router';

import SplitComponent from '../../../../components/SplitComponent';

const ArmorMain = SplitComponent(() => import('./ArmorMain'));

const ArmorPage = (props) => {
  const { match } = props;
  return (
    <Switch>
      <Route exact path={`${match.path}`} component={ArmorMain}/>
      <Route path={`${match.path}/:armorBase`} render={(props) => {console.log('props to render on new component: ', props);}}/>
    </Switch>
  );
};

export default ArmorPage;