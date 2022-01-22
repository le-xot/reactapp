import React from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import PageTwo from './pages/PageTwo';
import PageOne from './pages/PageOne';
import PageThree from './pages/PageThree';
import Home from './pages/Home';

export default function Router() {
  return (
    <Switch>
      <Route path="/PageTwo">
        <PageTwo />
      </Route>
      <Route path ="/PageOne">
        <PageOne />
      </Route>
      <Route path="/PageThree">
        <PageThree />
      </Route>
      <Route path="/">
        <Redirect to={"/PageOne"}>
        </Redirect>
        <Home />
      </Route>
    </Switch>
  )
}