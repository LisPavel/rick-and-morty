import React, { useContext, useState } from "react";

import { PropsWithChildren, createContext } from "react";

export interface UserInfo {
  name: string;
}

export interface AuthObj {
  user?: UserInfo | null;
  login: (data: { username: string }, callback?: () => void) => void;
  logout: (callback?: () => void) => void;
}

export const AuthContext = createContext<AuthObj | null>(null);

export const useAuth = () => {
  return useContext(AuthContext) as AuthObj;
};

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const value: AuthObj = {
    user,
    login: ({ username }, callback) => {
      setUser({ name: username });
      callback?.();
    },
    logout: (callback) => {
      setUser(null);
      callback?.();
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
