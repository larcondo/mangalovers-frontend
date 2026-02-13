import { useState, useMemo, type ReactNode, useCallback } from "react";
import { AuthContext } from "@/contexts/authContext";
import type { UserLogged } from "@/types";

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserLogged | null>(
    JSON.parse(localStorage.getItem("mluser") as string),
  );

  const login = useCallback((data: UserLogged) => {
    setUser(data);
    localStorage.setItem("mluser", JSON.stringify(data));
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      login,
    }),
    [user, login],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
