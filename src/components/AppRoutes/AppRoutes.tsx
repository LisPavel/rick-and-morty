import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { ErrorBoundary } from "../ErrorBoundary";
import { Home } from "@/pages/Home/index.lazy";
import { MainLayout } from "@/layouts/MainLayout/index.lazy";
import { Episodes } from "@/pages/Episodes/index.lazy";
import { EpisodePage } from "@/pages/EpisodePage/index.lazy";
import { Locations } from "@/pages/Locations/index.lazy";
import { LocationPage } from "@/pages/LocationPage/index.lazy";
import { Characters } from "@/pages/Characters/index.lazy";
import { CharacterPage } from "@/pages/CharacterPage/index.lazy";
import { Login } from "@/pages/Login/index.lazy";
import { NotFound } from "@/pages/NotFound/index.lazy";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route path="episodes">
          <Route
            index
            element={
              <PrivateRoute>
                <ErrorBoundary>
                  <Episodes />
                </ErrorBoundary>
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <ErrorBoundary>
                  <EpisodePage />
                </ErrorBoundary>
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="locations">
          <Route
            index
            element={
              <PrivateRoute>
                <ErrorBoundary>
                  <Locations />
                </ErrorBoundary>
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <ErrorBoundary>
                  <LocationPage />
                </ErrorBoundary>
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="characters">
          <Route
            index
            element={
              <PrivateRoute>
                <ErrorBoundary>
                  <Characters />
                </ErrorBoundary>
              </PrivateRoute>
            }
          />
          <Route
            path=":id"
            element={
              <PrivateRoute>
                <ErrorBoundary>
                  <CharacterPage />
                </ErrorBoundary>
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <ErrorBoundary>
              <Login />
            </ErrorBoundary>
          }
        />
        <Route
          path="/*"
          element={
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
};
