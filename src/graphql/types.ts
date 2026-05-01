import type {
  Artist,
  Pagination,
  PrintFormat,
  PrintFormatBasic,
  Publisher,
  Series,
  SeriesSimple,
  UserLogged,
  UserSeries,
  Volume,
  VolumeSimple,
} from "@/types";

export interface LoginResponse {
  login: UserLogged;
}

export interface LoginVariables {
  username: string;
  password: string;
}

// create new artist
export interface CreateArtistResponse {
  createArtist: Artist;
}

export interface CreateArtistVariables {
  name: string;
}

// create new print format
export interface CreatePrintFormatResponse {
  createPrintFormat: PrintFormat;
}

export interface CreatePrintFormatVariables {
  name: string;
  description?: string | null;
}

// create new publisher
export interface CreatePublisherResponse {
  createPublisher: Publisher;
}

export interface CreatePublisherVariables {
  name: string;
}

// get all series
export interface AllSeriesResponse {
  seriesQty: number;
  allSeries: {
    pagination: Pagination;
    series: SeriesSimple[];
  };
}

export interface AllSeriesVariables {
  page: number;
}

// get all volumes
export interface AllVolumesResponse {
  volumeQty: number;
  allVolumes: {
    pagination: Pagination;
    volumes: VolumeSimple[];
  };
}

export interface AllVolumesVariables {
  page: number;
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
