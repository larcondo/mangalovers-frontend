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

export const SERIES_FIELDS_SIMPLE = gql`
  fragment SeriesFieldSimple on Series {
    id
    name
    isSingleVolume
    urlCover
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

export const VOLUME_FIELDS_SIMPLE = gql`
  fragment VolumeFieldsSimple on Volume {
    id
    number
    urlCover
    series {
      id
      name
      isSingleVolume
    }
  }
`;

export const PAGINATION_FIELDS_COMPLETE = gql`
  fragment PaginationFieldsComplete on Pagination {
    page
    totalPages
    totalEntries
    offset
    hasNextPage
    nextPage
  }
`;
