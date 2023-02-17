import Login from "../pages/login";
import HomePage from "../pages/home-page";
import pathes from "./pathes";
import CafeIntroSelectionPage from "../pages/cafe/cafe-intro-selection-page.jsx";
import CafeReservationPage from "../pages/cafe/cafe-reservation-page.jsx";
import HallIntroSelectionPage from "../pages/hall/hall-intro-selection-page.jsx";

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
    name: "COFERESERVATION",
    path: "cafe/reservation",
    component: CafeReservationPage,
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
