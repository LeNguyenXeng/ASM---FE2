import { useRoutes } from "react-router";

import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/cONTACT.JSX";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Profile from "./pages/Profile";
import HomeAdmin from "./pages/Admin/Home";
import UpdateAccount from "./pages/UpdateAccount";
import Addproduct from "./pages/admin/AddProduct";
import ListProduct from "./pages/admin/ListProduct";
import AccountPage from "./components/admin/Account";
import UpdateProduct from "./pages/admin/UpdateProduct";
import UpdateAccountAdmin from "./pages/admin/UpdateAccountPage";
import ProfileAdmin from "./pages/admin/ProfileAdmin";

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
    path: "/product-detail/:id",
    element: <ProductDetail />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/updateaccount/:id",
    element: <UpdateAccount />,
  },
  {
    path: "/shopping-cart",
    element: <ShoppingCart />,
  },
  {
    path: "/admin/home",
    element: <HomeAdmin />,
  },
  {
    path: "/admin/addproduct",
    element: <Addproduct />,
  },
  {
    path: "/admin/listproduct",
    element: <ListProduct />,
  },
  {
    path: "/admin/updateproduct/:id",
    element: <UpdateProduct />,
  },
  {
    path: "/admin/listaccount",
    element: <AccountPage />,
  },
  {
    path: "/admin/updateaccount/:id",
    element: <UpdateAccountAdmin />,
  },
  {
    path: "/admin/profile/:id",
    element: <ProfileAdmin />,
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
