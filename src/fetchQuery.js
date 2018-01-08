import { GraphQLClient } from "graphql-request"

export const fetchData = async (authId, query) => {
  const endpoint = "https://api.github.com/graphql"
  const client = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `bearer ${authId}`
    }
  })

  return client.request(query)
}
