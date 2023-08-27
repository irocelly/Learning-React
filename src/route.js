import AboutUs from "./pages/AboutUs/AboutUs";
import Homepage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";

const routeItems = [
  {
    label: "Homepage",
    key: "",
    element: <Homepage />,
  },
  {
    label: "About Us",
    key: "about",
    element: <AboutUs />,
  },
];

const loginRoute = [
  {
    label: "Login Page",
    key: "login",
    element: <LoginPage />,
  },
];

const routes = { routeItems, loginRoute };

export default routes;
