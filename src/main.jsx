import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/Routes.jsx";
import { RouterProvider } from "react-router";
import FriendsContext from "./context/FriendsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsContext>
      <RouterProvider router={router} />
    </FriendsContext>
  </StrictMode>,
);
