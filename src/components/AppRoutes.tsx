import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Episodes from "../pages/Episodes";
import EpisodePage from "../pages/EpisodePage";
import Locations from "../pages/Locations";
import LocationPage from "../pages/LocationPage";
import Characters from "../pages/Characters";
import CharacterPage from "../pages/CharacterPage";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
