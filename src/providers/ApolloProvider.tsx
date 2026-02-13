import { tokenStore } from "@contexts/authContext";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { SetContextLink } from "@apollo/client/link/context";
import { ApolloProvider } from "@apollo/client/react";

interface ApolloProviderWithAuthProps {
  children?: React.ReactNode;
}

const ApolloProviderWithAuth = ({ children }: ApolloProviderWithAuthProps) => {
  const httpLink = new HttpLink({
    uri: import.meta.env.VITE_APOLLO_SERVER_URL,
  });

  const authLink = new SetContextLink(({ headers }) => {
    return {
      headers: {
        ...headers,
        authorization: tokenStore.token ? `Bearer ${tokenStore.token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWithAuth;
