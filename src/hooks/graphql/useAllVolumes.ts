import type { AllVolumesResponse, AllVolumesVariables } from "@graphql/types";
import { ALL_VOLUMES } from "@graphql/queries";
import { useQuery } from "@apollo/client/react";

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
