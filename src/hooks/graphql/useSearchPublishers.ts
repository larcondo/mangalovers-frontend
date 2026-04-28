import { useQuery } from "@apollo/client/react";
import type {
  SearchPublishersResponse,
  SearchPublishersVariables,
} from "@graphql/types";
import { SEARCH_PUBLISHERS } from "@graphql/queries";
import useDebounce from "../useDebounce";

const useSearchPublishers = ({ query }: SearchPublishersVariables) => {
  const debouncedQuery = useDebounce(query, 1500);

  const { data, loading, error } = useQuery<
    SearchPublishersResponse,
    SearchPublishersVariables
  >(SEARCH_PUBLISHERS, {
    variables: { query: debouncedQuery },
    skip: !debouncedQuery,
  });

  return { data, loading, error, editing: query !== debouncedQuery };
};

export default useSearchPublishers;
