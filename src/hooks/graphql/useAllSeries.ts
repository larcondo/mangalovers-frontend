import type { AllSeriesResponse, AllSeriesVariables } from "@graphql/types";
import { ALL_SERIES } from "@graphql/queries";
import { useQuery } from "@apollo/client/react";

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
