import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="locations" element={<Locations />} />
          <Route path="characters" element={<Characters />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
