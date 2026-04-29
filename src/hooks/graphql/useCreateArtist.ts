import { useMutation } from "@apollo/client/react";
import type {
  CreateArtistResponse,
  CreateArtistVariables,
} from "@graphql/types";
import { CREATE_ARTIST } from "@graphql/mutations";
import { CombinedGraphQLErrors } from "@apollo/client";

const useCreateArtist = () => {
  const [mutate, { loading }] = useMutation<
    CreateArtistResponse,
    CreateArtistVariables
  >(CREATE_ARTIST);

  const createArtist = async (name: string) => {
    try {
      const { data } = await mutate({
        variables: { name },
      });
      return data;
    } catch (error) {
      if (CombinedGraphQLErrors.is(error)) {
        console.log(error);
      }
      throw error;
    }
  };

  return { createArtist, loading };
};

export default useCreateArtist;
