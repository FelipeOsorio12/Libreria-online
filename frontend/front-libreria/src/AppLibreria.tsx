import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const AppLibreria = () => {
  return (
    <>
      <RouterProvider router={appRouter}></RouterProvider>
    </>
  );
};
