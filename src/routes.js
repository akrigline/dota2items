import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/App';
import ItemLayoutPage from './components/ItemLayoutPage/ItemLayoutPage';
// eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ItemLayoutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
