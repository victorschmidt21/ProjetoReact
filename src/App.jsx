import { RoutesApp } from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
export function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <RouterProvider router={RoutesApp} />
    </>
  );
}
