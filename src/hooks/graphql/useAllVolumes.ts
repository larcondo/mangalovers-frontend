import type { Pagination, Volume } from "@/types";
import { ALL_VOLUMES } from "@graphql/queries";
import { useQuery } from "@apollo/client/react";

interface AllVolumesResponse {
  volumeQty: number;
  allVolumes: {
    pagination: Pagination;
    volumes: Volume[];
  };
}

interface AllVolumesVariables {
  page: number;
}

const useAllVolumes = (page: number = 1) => {
  const { data, loading, error } = useQuery<
    AllVolumesResponse,
    AllVolumesVariables
  >(ALL_VOLUMES, {
    variables: { page },
  });

  return { data, loading, error };
};

export default useAllVolumes;
