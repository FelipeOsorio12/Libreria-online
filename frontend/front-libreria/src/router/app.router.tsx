import { createBrowserRouter, Navigate } from "react-router";
import { Admin } from "../pages/Admin/Admin";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { Profile } from "../pages/Profile/Profile";
import { Register } from "../pages/Register/Register";

export const appRouter = createBrowserRouter([
  { path: "/", element: <Home></Home> },
  { path: "/admin", element: <Admin></Admin> },
  { path: "/login", element: <Login></Login> },
  { path: "/profile", element: <Profile></Profile> },
  { path: "/register", element: <Register></Register> },
]);
