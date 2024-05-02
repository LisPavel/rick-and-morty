import { lazy } from "react";

export const NotFound = lazy(() =>
  import("./index").then(({ NotFound }) => ({
    default: NotFound,
  })),
);
