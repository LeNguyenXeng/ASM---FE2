import { useRoutes, Navigate } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/cONTACT.JSX';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Profile from './pages/Profile';
import UpdateAccount from './pages/UpdateAccount';
import HomeAdmin from './pages/Admin/Home';
import AddProduct from './pages/admin/AddProduct';
import ListProduct from './pages/admin/ListProduct';
import AccountPage from './components/admin/Account';
import UpdateProduct from './pages/admin/UpdateProduct';
import UpdateAccountAdmin from './pages/admin/UpdateAccountPage';
import ProfileAdmin from './pages/admin/ProfileAdmin';
import Layout from './components/Layout.jsx';
import useAuthen from './hooks/useAuthen.jsx';
import Checkout from './pages/Checkout.jsx';
import Order from './pages/Order.jsx';
import OrderDetailsProductPage from './pages/OrderDetailsProduct.jsx';
import ThanksYou from './pages/ThanksYou.jsx';
import AdminLayout from './layouts/Admin.jsx';
import OrderAdmin from './pages/admin/OrderAdmin.jsx';
import UpdateOrder from './pages/admin/UpdateOrder.jsx';

const withLayout = (Component) => (
  <Layout>
    <Component />
  </Layout>
);

const PrivateRoute = ({ element }) => {
  const isAuthen = useAuthen();
  return isAuthen ? element : <Navigate to="/login" replace />;
};

const routerConfig = [
  { path: '/', element: withLayout(Home) },
  { path: '/shop', element: withLayout(Shop) },
  { path: '/about', element: withLayout(About) },
  { path: '/contact', element: withLayout(Contact) },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/product-detail/:id', element: withLayout(ProductDetail) },
  { path: '/profile/:id', element: withLayout(Profile) },
  { path: '/updateaccount/:id', element: withLayout(UpdateAccount) },
  { path: '/order/:id', element: withLayout(Order) },
  { path: '/orderproduct/:id', element: withLayout(OrderDetailsProductPage) },
  { path: '/thanksyou', element: withLayout(ThanksYou) },

  {
    path: '/shopping-cart',
    element: <PrivateRoute element={withLayout(ShoppingCart)} />,
  },
  { path: '/checkout', element: withLayout(Checkout) },

  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '/admin/home', element: <HomeAdmin /> },
      { path: '/admin/addproduct', element: <AddProduct /> },
      { path: '/admin/listproduct', element: <ListProduct /> },
      { path: '/admin/updateproduct/:id', element: <UpdateProduct /> },
      { path: '/admin/listaccount', element: <AccountPage /> },
      { path: '/admin/listorder', element: <OrderAdmin /> },
      { path: '/admin/updateorder/:id', element: <UpdateOrder /> },
      { path: '/admin/updateaccount/:id', element: <UpdateAccountAdmin /> },
      { path: '/admin/profile/:id', element: <ProfileAdmin /> },
    ],
  },

  { path: '*', element: <Error /> },
];

function App() {
  const routers = useRoutes(routerConfig);
  return <>{routers}</>;
}

export default App;
