import { lazy } from "react";

export const Home = lazy(() =>
  import("./index").then(({ Home }) => ({ default: Home })),
);
