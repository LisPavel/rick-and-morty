import { lazy } from "react";

export const Episodes = lazy(() =>
  import("./index").then(({ Episodes }) => ({
    default: Episodes,
  })),
);
