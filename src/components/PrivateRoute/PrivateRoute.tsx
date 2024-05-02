import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const location = useLocation();
  if (user == null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return <>{children}</>;
};
