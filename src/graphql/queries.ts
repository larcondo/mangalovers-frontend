import { gql } from "@apollo/client";
import { SERIES_FIELDS_COMPLETE, VOLUME_FIELDS_COMPLETE } from "./fragments";

export const ALL_SERIES = gql`
  query AllSeries {
    seriesQty
    allSeries {
      ...SeriesFieldComplete
    }
  }
  ${SERIES_FIELDS_COMPLETE}
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
      ...VolumeFieldsComplete
    }
  }
  ${VOLUME_FIELDS_COMPLETE}
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
