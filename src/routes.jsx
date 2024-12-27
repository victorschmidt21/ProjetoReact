import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SeriesAndMovies from "./pages/SeriesAndMovies";
import { Error } from './pages/Error'

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/content/:type" element={<SeriesAndMovies/>} />
        <Route path="*" element={<Error/>}/> 
      </Routes>
    </BrowserRouter>
  );
}
