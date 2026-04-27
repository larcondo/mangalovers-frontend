import type { Series, UserLogged, UserSeries, Volume } from "@/types";

export interface LoginResponse {
  login: UserLogged;
}

export interface LoginVariables {
  username: string;
  password: string;
}

export interface SeriesDetailsResponse {
  seriesById: Series;
  volumesBySeries: Volume[];
}

export interface SeriesDetailsVar {
  id: string;
}

export interface VolumeDetailsResponse {
  volumeById: Volume;
}

export interface VolumeDetailsVar {
  id: string;
}

export interface UserSeriesResponse {
  userSeries: UserSeries[];
}
