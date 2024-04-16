import { useContext } from "react";
import { AuthContext, AuthObj } from "../../context/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext) as AuthObj;
};
