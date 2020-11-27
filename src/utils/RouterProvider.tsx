import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import Footer from "../components/Footer";
import { routes } from "../lib/routes";

const RouterProvider: React.FC = ({ children }) => {
  return (
    <Router>
      <Switch>
        {routes.map(({ auth, ...rest }, i) => {
          if (auth) {
            return <PrivateRoute key={i} {...rest} />;
          }
          return <Route key={i} {...rest} />;
        })}
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default RouterProvider;

const PrivateRoute: React.FC<RouteProps & { component: React.FC }> = ({
  component: Component,
  ...rest
}) => {
  const token = sessionStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          <Component />
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
