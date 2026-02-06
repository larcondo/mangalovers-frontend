import { gql } from "@apollo/client";

export const SERIES_FIELDS_COMPLETE = gql`
  fragment SeriesFieldComplete on Series {
    id
    name
    isSingleVolume
    urlCover
    printFormat {
      id
      description
      name
    }
    publisher {
      id
      name
    }
    author {
      writer {
        id
        name
      }
      illustrator {
        id
        name
      }
    }
  }
`;

export const VOLUME_FIELDS_COMPLETE = gql`
  fragment VolumeFieldsComplete on Volume {
    id
    number
    publicationDate
    synopsis
    title
    urlCover
    series {
      id
      name
      isSingleVolume
    }
  }
`;
