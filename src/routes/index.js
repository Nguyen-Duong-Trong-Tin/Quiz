import PrivateRoutes from "../components/PrivateRoutes";
import LayoutDefault from "../layouts/LayoutDefault";
import Answers from "../pages/Answers";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Questions from "../pages/Questions";
import Register from "../pages/Register";
import Result from "../pages/Result";
import Topics from "../pages/Topics";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "logout",
        element: <Logout />
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "topics",
            element: <Topics />
          },
          {
            path: "answers",
            element: <Answers />
          },
          {
            path: "questions/:id",
            element: <Questions />
          },
          {
            path: "result/:id",
            element: <Result />
          }
        ]
      },
      {
        path: "*",
        element: <Error404 />
      }
    ]
  },
]