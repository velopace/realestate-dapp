import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Realtor from "./pages/Realtor";
import Seller from "./pages/Seller";
import Bank from "./pages/Bank";
import Coop from "./pages/Coop";

const AppRouter = ({ account, contracts }) => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Main account={account} contracts={contracts} />}
      />
      <Route path="/realtor" component={Realtor} />
      <Route
        path="/seller"
        render={() => <Seller account={account} contracts={contracts} />}
      />
      <Route path="/bank" component={Bank} />
      <Route path="/coop" component={Coop} />
    </Switch>
  </Router>
);

export default AppRouter;
