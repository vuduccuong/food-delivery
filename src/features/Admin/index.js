import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch, useRouteMatch } from "react-router";
import LayoutAdmin from "./components/Layout";
import DashBoardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import MenuPage from "./pages/Menu";
import { fetchMenu } from "./pages/Menu/menu-slide";

const AdminPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  return (
    <Switch>
      <Route exact path={`${match.url}/login`} component={LoginPage} />
      <LayoutAdmin>
        <Route exact path={`${match.url}`} component={DashBoardPage} />

        <Route path={`${match.url}/dashboard`} component={DashBoardPage} />
        <Route path={`${match.url}/menu`} component={MenuPage} />
      </LayoutAdmin>
    </Switch>
  );
};

export default AdminPage;
