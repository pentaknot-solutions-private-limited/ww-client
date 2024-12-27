const graphqlBaseUrl = "https://ww-blog-api.pentaknot.com/graphql";
const token = `409a52817b257fd8f2df54504a8de6740df7f2cc46918f81b886560066d4e57c25341fc43abd90cf251faf2d6490bdf5e03be522f1ddc577e3f8a60a4258d9c0407fd2d92f66e4c57af4dd61b10d31bb196eb3ed83fcefd69451ceb929df7006ecca582955847575a48fd6f4be2018285cf69c83c35273dde2771c3cb79bbdc2`;

type FetchGraphQLParams = {
  query: string;
  variables?: Record<string, any>;
};

/**
 * Common function to execute GraphQL queries using fetch.
 * @param query - GraphQL query string
 * @param variables - Variables for the query (optional)
 * @returns - Promise resolving to the query response
 */
export const fetchGraphQL = async <T>({
  query,
  variables,
}: FetchGraphQLParams): Promise<T> => {
  const response = await fetch(graphqlBaseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL fetch error: ${response.statusText}`);
  }

  const responseData = await response.json();

  if (responseData.errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(responseData.errors)}`);
  }

  return responseData.data as T;
};
