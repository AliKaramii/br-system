import Login from "../pages/login";
import HomePage from "../pages/home-page";
import pathes from "./pathes";
import HallIntroSelectionPage from "../pages/hall-intro-selection";
import CafeIntroSelectionPage from "../pages/cafe-intro-selection";

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
  {
    name: "COFEINTROSELECTION",
    path: "cafe",
    component: CafeIntroSelectionPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "HALLINTROSELECTION",
    path: "hall",
    component: HallIntroSelectionPage,
    exact: true,
    needAuth: false,
  },
];

export default routes;
