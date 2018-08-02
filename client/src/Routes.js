import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home';
import Apartment from './Components/Apartments/Apartments';
import Houses from './Components/Houses/Houses';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/apartments" component={Apartment} />
      <Route exact path="/houses" component={Houses} />
    </Switch>
  </BrowserRouter>
)

export default Routes;