import Login from "../pages/login";
import HomePage from "../pages/home-page";
import pathes from "./pathes";
import CafeIntroSelectionPage from "../pages/cafe/cafe-intro-selection-page.jsx";
import CafeReservationPage from "../pages/cafe/cafe-reservation-page.jsx";
import VenueIntroSelectionPage from "../pages/venue/venue-intro-selection-page.jsx";
import VenueReservationPage from "../pages/venue/venue-reservation-page.jsx";
import CheckoutPage from "../pages/checkout";
import FormSecondStepPage from "../pages/cafe/form-second-step";
import NotFoundPage from "../pages/not-found";
export const routesList = [
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
    name: "RESERVATION",
    path: pathes.RESERVATION,
    component: FormSecondStepPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "CHECKOUT",
    path: "/checkout",
    component: CheckoutPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "CAFEINTROSELECTION",
    path: pathes.CAFEINTROSELECTION,
    component: CafeIntroSelectionPage,
    exact: true,
    needAuth: false,
  },
  // {
  //   name: "CAFERESERVATION",
  //   path: pathes.CAFERESERVATION,
  //   component: CafeReservationPage,
  //   exact: true,
  //   needAuth: false,
  // },

  {
    name: "VENUEINTROSELECTION",
    path: pathes.VENUEINTROSELECTION,
    component: VenueIntroSelectionPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "NOTFOUND",
    path: pathes.NOTFOUND,
    component: NotFoundPage,
    exact: true,
    needAuth: false,
  },
];

export const routesParamList = [
  {
    name: "CAFERESERVATION",
    path: pathes.CAFERESERVATION,
    component: CafeReservationPage,
    exact: true,
    needAuth: false,
  },
  {
    name: "VENUERESERVATION",
    path: pathes.VENURESERVATION,
    component: VenueReservationPage,
    exact: true,
    needAuth: false,
  },
];
