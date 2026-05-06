import { useQuery } from "@apollo/client/react";
import type {
  SearchPrintFormatsResponse,
  SearchPrintFormatsVariables,
} from "@graphql/types";
import { SEARCH_PRINT_FORMATS } from "@graphql/queries";
import useDebounce from "../useDebounce";

const useSearchPrintFormats = ({ query }: SearchPrintFormatsVariables) => {
  const debouncedQuery = useDebounce(query, 1500);

  const { data, loading, error } = useQuery<
    SearchPrintFormatsResponse,
    SearchPrintFormatsVariables
  >(SEARCH_PRINT_FORMATS, {
    variables: { query: debouncedQuery },
    skip: !debouncedQuery,
  });

  return { data, loading, error, editing: query !== debouncedQuery };
};

export default useSearchPrintFormats;
