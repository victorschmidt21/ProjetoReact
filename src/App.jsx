import React from "react";
import Movies from "./components/Movies";
import Menu from "./components/Menu";
import Searches from "./components/Searches"
import Filter from "./components/Filter";
function App() {
  return (
    <>
  <div className="bg-slate-800">
      <Menu />
      <Searches type="filme"/>
      <div className="flex flex-row justify-center gap-10">
      <Filter />
      <Movies />
      </div>
  </div>
    </>
  );
}

export default App;
