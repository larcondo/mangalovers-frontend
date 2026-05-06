import { useMutation } from "@apollo/client/react";
import type {
  CreateSeriesResponse,
  CreateSeriesVariables,
} from "@graphql/types";
import { CREATE_SERIES } from "@graphql/mutations";
import {
  CombinedGraphQLErrors,
  type MutationUpdaterFunction,
} from "@apollo/client";
import { ALL_SERIES } from "@/graphql/queries";
import type { AllSeriesResponse } from "@graphql/types";
import type { ApolloCache } from "@apollo/client";

const cacheUpdate: MutationUpdaterFunction<
  CreateSeriesResponse,
  CreateSeriesVariables,
  ApolloCache
> = (cache, { data }) => {
  if (!data?.createSeries) return;

  const existingSeries = cache.readQuery<AllSeriesResponse>({
    query: ALL_SERIES,
  });

  if (existingSeries) {
    cache.writeQuery<AllSeriesResponse>({
      query: ALL_SERIES,
      data: {
        seriesQty: existingSeries.seriesQty + 1,
        allSeries: {
          ...existingSeries.allSeries,
          series: [data.createSeries, ...existingSeries.allSeries.series],
        },
      },
    });
  }
};

const useCreateSeries = () => {
  const [mutate, { loading }] = useMutation<
    CreateSeriesResponse,
    CreateSeriesVariables
  >(CREATE_SERIES, {
    update: cacheUpdate,
  });

  const createSeries = async (args: CreateSeriesVariables) => {
    try {
      const { data } = await mutate({
        variables: args,
      });
      return data;
    } catch (error) {
      if (CombinedGraphQLErrors.is(error)) {
        console.log(error);
      }
      throw error;
    }
  };

  return { createSeries, loading };
};

export default useCreateSeries;
