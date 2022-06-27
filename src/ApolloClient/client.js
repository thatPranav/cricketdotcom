import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  HttpLink,
} from "@apollo/client/core";

const httpLink = new HttpLink({
  uri: "https://api.devcdc.com/cricket",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
