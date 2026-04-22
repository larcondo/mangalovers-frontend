import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";
import SeriesDetailsPage from "./pages/SeriesDetailsPage";
import VolumePage from "./pages/VolumePage";
import VolumeDetailsPage from "./pages/VolumeDetailsPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/series", element: <SeriesPage /> },
      {
        path: "/series/:id",
        element: <SeriesDetailsPage />,
        loader: ({ params }) => ({ id: params.id }),
      },
      { path: "/volumes", element: <VolumePage /> },
      {
        path: "/volume/:id",
        element: <VolumeDetailsPage />,
        loader: ({ params }) => ({ id: params.id }),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
