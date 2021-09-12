import React, { Suspense, useLayoutEffect } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import AdminPage from "../features/Admin";
import HomePage from "../features/Home";
import OrderPage from "../features/Order";

const App = () => {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/orders" component={OrderPage} />
      <Route path="/admin" component={AdminPage} />
    </Switch>
  );
};

export default App;
