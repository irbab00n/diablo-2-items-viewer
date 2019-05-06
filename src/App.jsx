import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router';

/* Components */
import SplitComponent from './components/SplitComponent';
const Navbar = SplitComponent(() => import('./components/Navbar'));

/* Views */
const ItemsView = SplitComponent(() => import('./views/items'));
const MainView = SplitComponent(() => import('./views/main'));

const hist = createBrowserHistory();

const links = [
];

const App = () => (
  <Router history={hist}>
    <Navbar logoText="Horadric Armory" links={links} />
    <Switch>
      <Route exact path="/" component={MainView} />
      <Route path="/items" component={ItemsView} />
    </Switch>
  </Router>
);

export default App;