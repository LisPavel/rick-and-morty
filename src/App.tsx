import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Locations from "./pages/Locations";
import Characters from "./pages/Characters";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import EpisodePage from "./pages/EpisodePage";
import LocationPage from "./pages/LocationPage";
import CharacterPage from "./pages/CharacterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="episodes">
            <Route index element={<Episodes />} />
            <Route path=":id" element={<EpisodePage />} />
          </Route>
          <Route path="locations">
            <Route index element={<Locations />} />
            <Route path=":id" element={<LocationPage />} />
          </Route>
          <Route path="characters">
            <Route index element={<Characters />} />
            <Route path=":id" element={<CharacterPage />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
