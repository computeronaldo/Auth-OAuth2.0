import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/NotFound";
import GoogleLogin from "./components/GoogleLogin";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <GoogleLogin />,
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
