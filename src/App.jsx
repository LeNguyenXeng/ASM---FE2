import { useRoutes } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/cONTACT.JSX";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routerConfig = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
];

function App() {
  const routers = useRoutes(routerConfig);

  return <>{routers}</>;
}

export default App;
