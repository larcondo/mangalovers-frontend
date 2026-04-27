import { useMutation } from "@apollo/client/react";
import { LOGIN } from "@graphql/mutations";
import type { LoginResponse, LoginVariables } from "@graphql/types";
import type { Credentials } from "@/types";
import { CombinedGraphQLErrors } from "@apollo/client";

const useLogin = () => {
  const [mutate, { loading }] = useMutation<LoginResponse, LoginVariables>(
    LOGIN,
  );

  const login = async (credentials: Credentials) => {
    try {
      const { data } = await mutate({
        variables: credentials,
      });
      return data;
    } catch (err) {
      if (CombinedGraphQLErrors.is(err)) {
        console.log(err);
      }
      throw err;
    }
  };

  return { login, loading };
};

export default useLogin;
