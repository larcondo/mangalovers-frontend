import { useMutation } from "@apollo/client/react";
import type {
  CreatePublisherResponse,
  CreatePublisherVariables,
} from "@graphql/types";
import { CREATE_PUBLISHER } from "@graphql/mutations";
import { CombinedGraphQLErrors } from "@apollo/client";

const useCreatePublisher = () => {
  const [mutate, { loading }] = useMutation<
    CreatePublisherResponse,
    CreatePublisherVariables
  >(CREATE_PUBLISHER);

  const createPublisher = async (name: string) => {
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

  return { createPublisher, loading };
};

export default useCreatePublisher;
