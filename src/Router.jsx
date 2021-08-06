import React from "react";
import {
  Route,
  Switch
} from "react-router-dom";

import Counter from './pages/Counter';
import About from './pages/About';
import Users from './pages/Users';
import Home from './pages/Home';

export default function Router() {
  return (
    <Switch>
      <Route path="/counter">
        <Counter />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}