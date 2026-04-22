import type { Series } from "@/types";
import { ALL_SERIES } from "@graphql/queries";
import { useQuery } from "@apollo/client/react";

interface AllSeriesResponse {
  seriesQty: number;
  allSeries: Series[];
}

const useAllSeries = () => {
  const { data, loading, error } = useQuery<AllSeriesResponse>(ALL_SERIES);

  return { data, loading, error };
};

export default useAllSeries;
