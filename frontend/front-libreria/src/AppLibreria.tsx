import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";
import { AuthContextProvider } from "./context/AuthContext";

export const AppLibreria = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={appRouter}></RouterProvider>
    </AuthContextProvider>
  );
};
