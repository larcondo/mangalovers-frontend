import { useState, useMemo, type ReactNode, useCallback } from "react";
import { AuthContext, tokenStore } from "@contexts/authContext";
import type { UserLogged } from "@/types";

interface AuthProviderProps {
  children?: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserLogged | null>(
    JSON.parse(localStorage.getItem("mluser") as string),
  );

  const login = useCallback((data: UserLogged) => {
    setUser(data);
    tokenStore.token = data.accessToken;
    localStorage.setItem("mluser", JSON.stringify(data));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    tokenStore.token = undefined;
    localStorage.removeItem("mluser");
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
