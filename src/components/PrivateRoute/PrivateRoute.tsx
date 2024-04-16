import React from "react";

import { PropsWithChildren } from "react";
import { useAuth } from "../../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user == null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return <>{children}</>;
};
