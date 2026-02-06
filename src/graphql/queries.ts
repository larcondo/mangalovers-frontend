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

export const ALL_VOLUMES = gql`
  query AllVolumes {
    volumeQty
    allVolumes {
      ...VolumeFieldsComplete
    }
  }
  ${VOLUME_FIELDS_COMPLETE}
`;
