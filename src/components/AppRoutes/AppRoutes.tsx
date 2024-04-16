import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../PrivateRoute";
import { ErrorBoundary } from "../ErrorBoundary";

const Home = lazy(() =>
  import("../../pages/Home").then(({ Home }) => ({ default: Home })),
);
const Episodes = lazy(() =>
  import("../../pages/Episodes").then(({ Episodes }) => ({
    default: Episodes,
  })),
);
const MainLayout = lazy(() =>
  import("../../layouts/MainLayout").then(({ MainLayout }) => ({
    default: MainLayout,
  })),
);
const EpisodePage = lazy(() =>
  import("../../pages/EpisodePage").then(({ EpisodePage }) => ({
    default: EpisodePage,
  })),
);
const Locations = lazy(() => import("../../pages/Locations"));
const LocationPage = lazy(() => import("../../pages/LocationPage"));
const Characters = lazy(() =>
  import("../../pages/Characters").then(({ Characters }) => ({
    default: Characters,
  })),
);
const CharacterPage = lazy(() =>
  import("../../pages/CharacterPage").then(({ CharacterPage }) => ({
    default: CharacterPage,
  })),
);
const NotFound = lazy(() => import("../../pages/NotFound"));
const Login = lazy(() => import("../../pages/Login"));

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
