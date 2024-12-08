import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// Create an HTTP Link
const httpLink = new HttpLink({
  uri: "http://13.126.235.68:1337/graphql", // Replace with your Strapi endpoint
});

// Create a context link to include the Authorization header
const authLink = setContext((_, { headers }) => {
  const token = `409a52817b257fd8f2df54504a8de6740df7f2cc46918f81b886560066d4e57c25341fc43abd90cf251faf2d6490bdf5e03be522f1ddc577e3f8a60a4258d9c0407fd2d92f66e4c57af4dd61b10d31bb196eb3ed83fcefd69451ceb929df7006ecca582955847575a48fd6f4be2018285cf69c83c35273dde2771c3cb79bbdc2`;

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Combine authLink and httpLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
