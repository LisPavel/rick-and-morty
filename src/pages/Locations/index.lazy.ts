import { lazy } from "react";

export const Locations = lazy(() =>
  import("./index").then(({ Locations }) => ({
    default: Locations,
  })),
);
