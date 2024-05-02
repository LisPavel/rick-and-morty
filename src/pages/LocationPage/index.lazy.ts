import { lazy } from "react";

export const LocationPage = lazy(() =>
  import("./index").then(({ LocationPage }) => ({
    default: LocationPage,
  })),
);
