import { lazy } from "react";

export const MainLayout = lazy(() =>
  import("./index").then(({ MainLayout }) => ({
    default: MainLayout,
  })),
);
