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
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRouts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="episodes">
          <Route
            index
            element={
              <PrivateRoute>
                <Episodes />
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <EpisodePage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="locations">
          <Route
            index
            element={
              <PrivateRoute>
                <Locations />
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <LocationPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="characters">
          <Route
            index
            element={
              <PrivateRoute>
                <Characters />
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <CharacterPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
