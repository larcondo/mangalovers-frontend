import { gql } from "@apollo/client";

export const ALL_SERIES = gql`
  query AllSeries {
    seriesQty
    allSeries {
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
        name
        id
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
  }
`;

export const ALL_VOLUMES = gql`
  query AllVolumes {
    volumeQty
    allVolumes {
      id
      number
      publicationDate
      synopsis
      title
      urlCover
      series {
        id
        name
      }
    }
  }
`;
