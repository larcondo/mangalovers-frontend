import type { Volume } from "@/types";
import { ALL_VOLUMES } from "@graphql/queries";
import { useQuery } from "@apollo/client/react";

interface AllVolumesResponse {
  volumeQty: number;
  allVolumes: Volume[];
}

const useAllVolumes = () => {
  const { data, loading, error } = useQuery<AllVolumesResponse>(ALL_VOLUMES);

  return { data, loading, error };
};

export default useAllVolumes;
