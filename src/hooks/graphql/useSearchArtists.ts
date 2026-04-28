import { useQuery } from "@apollo/client/react";
import type {
  SearchArtistsResponse,
  SearchArtistsVariables,
} from "@graphql/types";
import { SEARCH_ARTISTS } from "@graphql/queries";
import useDebounce from "../useDebounce";

const useSearchArtists = ({ query }: SearchArtistsVariables) => {
  const debouncedQuery = useDebounce(query, 1500);

  const { data, loading, error } = useQuery<
    SearchArtistsResponse,
    SearchArtistsVariables
  >(SEARCH_ARTISTS, {
    variables: { query: debouncedQuery },
    skip: !debouncedQuery,
  });

  return { data, loading, error, editing: query !== debouncedQuery };
};

export default useSearchArtists;
