import { lazy } from "react";

export const CharacterPage = lazy(() =>
  import("./index").then(({ CharacterPage }) => ({
    default: CharacterPage,
  })),
);
