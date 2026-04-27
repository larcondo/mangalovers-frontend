import { useQuery } from "@apollo/client/react";
import { VOLUME_DETAILS } from "@graphql/queries";
import type { VolumeDetailsResponse, VolumeDetailsVar } from "@graphql/types";

const useVolumeDetails = ({ id }: VolumeDetailsVar) => {
  const { data, loading, error } = useQuery<
    VolumeDetailsResponse,
    VolumeDetailsVar
  >(VOLUME_DETAILS, {
    variables: { id },
  });
  return { data, loading, error };
};

export default useVolumeDetails;
