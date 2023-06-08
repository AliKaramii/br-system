import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import checkAuth from "../services/mock-data/auth-mock/check-auth";
import Loading from "../components/base/loading";
import { routesList, routesParamList } from "./routes";

const token = checkAuth(false);

const RouterProvider = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }, 200);
  }, []);

  const hendleRouterEnter = (route) => {
    if (isAuthenticated && route.needAuth) {
      return <route.component />;
    } else {
      return <b>you dont have permission</b>;
      //   return <Redirect to="/403" />;
    }
  };

  if (isAuthenticated === null) {
    return <Loading />;
  } else {
    return (
      <BrowserRouter scrollRestoration="manual">
        <Routes>
          {routesList.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={
                route.needAuth ? hendleRouterEnter(route) : <route.component />
              }
            ></Route>
          ))}
          {/* //Todo refactor single product routes */}
          {routesParamList.map((route, index) => {
            return (
              <Route
                key={index}
                path={`${route.path}/:id`}
                exact="true"
                element={<route.component />}
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    );
  }
};

export default RouterProvider;
