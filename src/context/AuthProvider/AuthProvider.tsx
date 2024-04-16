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

const USER_KEY = "user";

const getUser = (): UserInfo | null => {
  const user = localStorage.getItem(USER_KEY);
  if (!user) return null;
  return JSON.parse(user);
};
const saveUser = (user: UserInfo) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
const removeUser = () => {
  localStorage.removeItem(USER_KEY);
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserInfo | null>(getUser);
  const value: AuthObj = {
    user,
    login: ({ username }, callback) => {
      const newUser = { name: username };
      setUser(newUser);
      saveUser(newUser);
      callback?.();
    },
    logout: (callback) => {
      setUser(null);
      removeUser();
      callback?.();
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
