import { useQuery } from "@apollo/client/react";
import { SERIES_DETAILS } from "@graphql/queries";
import type { SeriesDetailsResponse, SeriesDetailsVar } from "@graphql/types";

const useSeriesDetails = ({ id }: SeriesDetailsVar) => {
  const { data, loading, error } = useQuery<
    SeriesDetailsResponse,
    SeriesDetailsVar
  >(SERIES_DETAILS, { variables: { id } });

  return { data, loading, error };
};

export default useSeriesDetails;
