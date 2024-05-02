import { lazy } from "react";

export const EpisodePage = lazy(() =>
  import("./index").then(({ EpisodePage }) => ({
    default: EpisodePage,
  })),
);
