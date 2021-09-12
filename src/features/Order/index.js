import React from "react";
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import MainPage from "./pages/Main";

const OrderPage = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/:menuType`} component={MainPage} />
    </Switch>
  );
};

export default OrderPage;
