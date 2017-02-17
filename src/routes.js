import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
// eslint-disable-line import/no-named-as-default
import FuelSavingsPage from './containers/FuelSavingsPage';
import ItemLayoutPage from './components/ItemLayoutPage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="fuel-savings" component={FuelSavingsPage}/>
    <Route path="items" component={ItemLayoutPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
