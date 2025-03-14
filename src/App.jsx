import { useRoutes } from "react-router";
import "./App.css";
import Home from "./pages/Home";

const routerConfig = [
  {
    path: "/",
    element: <Home />,
  },
];

function App() {
  const routers = useRoutes(routerConfig);

  return <>{routers}</>;
}

export default App;
