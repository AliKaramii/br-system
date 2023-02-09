import Login from "../pages/login";
import HomePage from "../pages/home-page";
import pathes from "./pathes";

const routes = [
  {
    name: "LOGIN",
    path: pathes.LOGIN,
    component: Login,
    exact: true,
    needAuth: false,
  },
  {
    name: "HOMEPAGE",
    path: pathes.HOMEPAGE,
    component: HomePage,
    exact: true,
    needAuth: false,
  },
];

export default routes;
