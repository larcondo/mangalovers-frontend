import { gql } from "@apollo/client";
import {
  SERIES_FIELDS_COMPLETE,
  SERIES_FIELDS_SIMPLE,
  VOLUME_FIELDS_COMPLETE,
  VOLUME_FIELDS_SIMPLE,
  PAGINATION_FIELDS_COMPLETE,
} from "./fragments";

export const ALL_SERIES = gql`
  query AllSeries {
    seriesQty
    allSeries {
      pagination {
        ...PaginationFieldsComplete
      }
      series {
        ...SeriesFieldSimple
      }
    }
  }
  ${SERIES_FIELDS_SIMPLE}
  ${PAGINATION_FIELDS_COMPLETE}
`;

export const SERIES_DETAILS = gql`
  query SeriesDetails($id: ID!) {
    seriesById(id: $id) {
      ...SeriesFieldComplete
    }
    volumesBySeries(seriesId: $id) {
      ...VolumeFieldsComplete
    }
  }
  ${SERIES_FIELDS_COMPLETE}
  ${VOLUME_FIELDS_COMPLETE}
`;

export const ALL_VOLUMES = gql`
  query AllVolumes {
    volumeQty
    allVolumes {
      pagination {
        ...PaginationFieldsComplete
      }
      volumes {
        ...VolumeFieldsSimple
      }
    }
  }
  ${VOLUME_FIELDS_SIMPLE}
  ${PAGINATION_FIELDS_COMPLETE}
`;

export const VOLUME_DETAILS = gql`
  query VolumeDetails($id: ID!) {
    volumeById(id: $id) {
      ...VolumeFieldsComplete
    }
  }
  ${VOLUME_FIELDS_COMPLETE}
`;

export const USER_SERIES = gql`
  query UserSeries {
    userSeries {
      id
      series {
        ...SeriesFieldComplete
      }
    }
  }
  ${SERIES_FIELDS_COMPLETE}
`;

export const SEARCH_ARTISTS = gql`
  query SearchArtists($query: String!) {
    searchArtists(query: $query) {
      id
      name
    }
  }
`;

export const SEARCH_PUBLISHERS = gql`
  query SearchPublishers($query: String!) {
    searchPublishers(query: $query) {
      id
      name
    }
  }
`;

export const SEARCH_PRINT_FORMATS = gql`
  query SearchPrintFormats($query: String!) {
    searchPrintFormats(query: $query) {
      id
      name
    }
  }
`;
