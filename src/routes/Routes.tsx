import Communities from "../pages/Communities";
import Home from "../pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Networks from "../pages/Chats";
import Resources from "../pages/Resources";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/community",
      element: <Communities />,
    },
    {
      path: "/networks",
      element: <Networks />,
    },
    {
      path: "/resources",
      element: <Resources />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Routes;
