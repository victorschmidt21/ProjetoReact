import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SeriesAndMovies from "./pages/SeriesAndMovies";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/content" element={<SeriesAndMovies/>} />
      </Routes>
    </BrowserRouter>
  );
}
