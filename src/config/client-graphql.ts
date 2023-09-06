import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = false;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token
        ? `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTM1MjI5NDEsImV4cCI6MTY5MzYwOTM0MX0.FFl_m-EMGge8dWrS1CHJh6W7a8_TBUYIcPjFR-ydQjE`
        : "",
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
