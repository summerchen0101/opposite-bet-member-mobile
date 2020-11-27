import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import Footer from "../components/Footer";
import { Routes } from "../lib/Routes";

const RouterProvider: React.FC = ({ children }) => {
  return (
    <Router>
      <Switch>
        {Routes.map(({ auth, ...rest }, i) => {
          if (auth) {
            return <PrivateRoute key={i} {...rest} />;
          }
          return <Route key={i} {...rest} />;
        })}
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterProvider;

const PrivateRoute: React.FC<RouteProps> = ({ component, ...rest }) => {
  const token = sessionStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          component
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
