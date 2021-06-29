import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Users from './pages/Users';
import Todo from './pages/Todo';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/todo/:id/:username" component={Todo} />
      </Switch>
    </BrowserRouter>
  );
}