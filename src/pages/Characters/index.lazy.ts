import { lazy } from "react";

export const Characters = lazy(() =>
  import("./index").then(({ Characters }) => ({
    default: Characters,
  })),
);
