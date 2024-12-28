import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import SeriesAndMovies from "./pages/SeriesAndMovies";
import { Error } from './pages/Error'
import { Footer } from "./components/Footer";
import { Info } from "./pages/Info";
import { Fav } from "./pages/Fav";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/content/:type" element={<SeriesAndMovies/>} />
        <Route path=":type/:id" element={<Info/>}/>
        <Route path="/fav" element={<Fav/>}/>


        <Route path="*" element={<Error/>}/> 
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}
