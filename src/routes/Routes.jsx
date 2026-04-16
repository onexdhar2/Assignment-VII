import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../pages/Homepage/Homepage";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import ErrorPage from "../pages/Errorpage/Errorpage";
import FriendsDetais from "../pages/Friendsdetails.jsx/FriendsDetais";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "friendsDetails/:id",
        element: <FriendsDetais />,
        loader: () => fetch("/AllFriendsData.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
