import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { SeriesAndMovies } from "./pages/SeriesAndMovies";
import { Error } from "./pages/Error";
import { Info } from "./pages/Info";
import { Fav } from "./pages/Fav";
import { Layout } from "./components/Layout";

// export function RoutesApp() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/content/:type" element={<SeriesAndMovies />} />
//         <Route path=":type/:id" element={<Info />} />
//         <Route path="/fav" element={<Fav />} />

//         <Route path="*" element={<Error />} />
//       </Routes>
//       <Footer></Footer>
//     </BrowserRouter>
//   );
// }

export const RoutesApp = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/content/:type",
        element: <SeriesAndMovies />,
      },
      {
        path: "/:type/:id",
        element: <Info />,
      },
      {
        path: "/fav",
        element: <Fav />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
