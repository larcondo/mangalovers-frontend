import { createContext } from "react";
import type { Auth } from "@/types";

export const AuthContext = createContext<Auth | undefined>(undefined);

// lee del LocalStorage la info del usuario
function readLS(): string | undefined {
  const item = localStorage.getItem("mluser");
  if (!item) return undefined;

  const data = JSON.parse(item).accessToken as string;

  if (!data) return undefined;
  return data;
}

// Para almacenar el token en memoria y modificar
// el authorization header con apollo-clients
type TokenStore = {
  token: string | undefined;
};

export const tokenStore: TokenStore = {
  token: readLS(),
};
