import type { UserLogged } from "@/types";

export interface LoginResponse {
  login: UserLogged;
}

export interface LoginVariables {
  username: string;
  password: string;
}
