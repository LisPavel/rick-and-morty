import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouts";

const Home = lazy(() => import("../pages/Home"));
const Episodes = lazy(() => import("../pages/Episodes"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const EpisodePage = lazy(() => import("../pages/EpisodePage"));
const Locations = lazy(() => import("../pages/Locations"));
const LocationPage = lazy(() => import("../pages/LocationPage"));
const Characters = lazy(() => import("../pages/Characters"));
const CharacterPage = lazy(() => import("../pages/CharacterPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/Login"));

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
