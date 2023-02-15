import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import checkAuth from "../mock-data/auth-mock/check-auth";
import Loading from "../components/common/loading";
import routes from "./routes";

const token = checkAuth(false);

class RouterProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      if (token) {
        this.setState({
          isAuthenticated: true,
        });
      } else {
        this.setState({
          isAuthenticated: false,
        });
      }
    }, 300);
  }
  hendlePouterEnter = (route) => {
    const { isAuthenticated } = this.state;
    if (isAuthenticated && route.needAuth) {
      return <route.component />;
    } else {
      return <b>you dont have permission</b>;
      //   return <Redirect to="/403" />;
    }
  };
  render() {
    const { isAuthenticated } = this.state;

    if (isAuthenticated === null) {
      return <Loading />;
    }

    return (
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={
                route.needAuth ? (
                  this.hendlePouterEnter(route)
                ) : (
                  <route.component />
                )
              }
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default RouterProvider;
