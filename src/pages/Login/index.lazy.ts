import { lazy } from "react";

export const Login = lazy(() =>
  import("./index").then(({ Login }) => ({ default: Login })),
);
