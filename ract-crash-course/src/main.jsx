import React from "react";
import ReactDOM from "react-dom/client";
import Posts from "./routes/Posts.jsx";
import "./index.css";
import NewPost from "./routes/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        children: [
          {
            path: "/newpost",
            element: <NewPost />,
          },
          {
            path: "/salam",
            element: <h1>salam</h1>,
          },
        ],
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
