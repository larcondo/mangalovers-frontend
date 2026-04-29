import type { Pagination, Series } from "@/types";
import { ALL_SERIES } from "@graphql/queries";
import { useQuery } from "@apollo/client/react";

interface AllSeriesResponse {
  seriesQty: number;
  allSeries: {
    pagination: Pagination;
    series: Series[];
  };
}

interface AllSeriesVariables {
  page: number;
}

const useAllSeries = (page: number = 1) => {
  const { data, loading, error } = useQuery<
    AllSeriesResponse,
    AllSeriesVariables
  >(ALL_SERIES, {
    variables: { page },
  });

  return { data, loading, error };
};

export default useAllSeries;
