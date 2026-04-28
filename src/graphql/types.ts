import type {
  Artist,
  PrintFormatBasic,
  Publisher,
  Series,
  UserLogged,
  UserSeries,
  Volume,
} from "@/types";

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

// search artists
export interface SearchArtistsResponse {
  searchArtists: Artist[];
}

export interface SearchArtistsVariables {
  query: string;
}

// search publishers
export interface SearchPublishersResponse {
  searchPublishers: Publisher[];
}

export interface SearchPublishersVariables {
  query: string;
}

// search printFormats
export interface SearchPrintFormatsResponse {
  searchPrintFormats: PrintFormatBasic[];
}

export interface SearchPrintFormatsVariables {
  query: string;
}
