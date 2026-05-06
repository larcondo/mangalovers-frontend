import { useMutation } from "@apollo/client/react";
import { CREATE_PRINT_FORMAT } from "@graphql/mutations";
import type {
  CreatePrintFormatResponse,
  CreatePrintFormatVariables,
} from "@graphql/types";
import { CombinedGraphQLErrors } from "@apollo/client";

const useCreatePrintFormat = () => {
  const [mutate, { loading }] = useMutation<
    CreatePrintFormatResponse,
    CreatePrintFormatVariables
  >(CREATE_PRINT_FORMAT);

  const createPrintFormat = async (
    name: string,
    description: string | null = null,
  ) => {
    try {
      const { data } = await mutate({
        variables: { name, description },
      });
      return data;
    } catch (error) {
      if (CombinedGraphQLErrors.is(error)) {
        console.log(error);
      }
      throw error;
    }
  };

  return { createPrintFormat, loading };
};

export default useCreatePrintFormat;
