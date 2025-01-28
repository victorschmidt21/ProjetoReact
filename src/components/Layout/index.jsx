import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Universal/Header";
import { MovieProvider } from "@/context/movieContext";
export function Layout() {
  return (
    <MovieProvider>
      <Header />
      <Outlet />
      <Footer />
    </MovieProvider>
  );
}
