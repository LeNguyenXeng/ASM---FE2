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
import Layout from "../src/components/Layout.jsx";
import HomePage from "./components/admin/Home.jsx";
import AddProduct from "./pages/admin/AddProduct";

const withLayout = (Component) => {
  return (
    <Layout>
      <Component />
    </Layout>
  );
};

const routerConfig = [
  { path: "/", element: withLayout(Home) },
  { path: "/shop", element: withLayout(Shop) },
  { path: "/about", element: withLayout(About) },
  { path: "/contact", element: withLayout(Contact) },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/product-detail/:id", element: withLayout(ProductDetail) },
  { path: "/profile/:id", element: withLayout(Profile) },
  { path: "/updateaccount/:id", element: withLayout(UpdateAccount) },
  { path: "/shopping-cart", element: withLayout(ShoppingCart) },
  { path: "/admin/home", element: <HomePage /> },
  { path: "/admin/addproduct", element: <AddProduct /> },
  { path: "/admin/listproduct", element: <ListProduct /> },
  { path: "/admin/updateproduct/:id", element: <UpdateProduct /> },
  { path: "/admin/listaccount", element: <AccountPage /> },
  { path: "/admin/updateaccount/:id", element: <UpdateAccount /> },
  { path: "/admin/profile/:id", element: <ProfileAdmin /> },
  { path: "*", element: <Error /> },
];

function App() {
  const routers = useRoutes(routerConfig);

  return <>{routers}</>;
}

export default App;
