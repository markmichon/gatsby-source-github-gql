# gatsby-source-github-gql (beta)

Pull any data from the [github graphql api](https://developer.github.com/v4/).

_Note_: Currently only supports single queries of results and no nested collections.

## Setup

To get started install via yarn or npm:

```bash
yarn add gatsby-source-github-gql
```

Then configure in your `gatsby-config.js` file:

```js
module.exports = {
  //...
  plugins: [
    //...,
    {
      resolve: "gatsby-source-github-gql",
      options: {
        auth: YOUR_GITHUB_TOKEN,
        query: `{
          viewer {
            name
            repositories(last: 10) {
              edges {
                node {
                  id
                  name
                  url
                  description
                }
              }
            }
          }
        }
        `
      }
    }
  ]
}
```

The plugin accepts two options (both are required):

* auth: This is your GitHub auth token and can be generated [here](https://github.com/settings/tokens). It's recommened that you use it via environment variables. For more on that and Gatsby, see the [Environment Variables](https://www.gatsbyjs.org/docs/environment-variables/) page on the Gatsby docs.
* query: The GraphQL query, as it would be made to GitHub's API. Some features form GitHub's old REST API haven't made it over yet, so check the [API Docs](https://developer.github.com/v4/) and experiment in the explorer.

## Accessing the data in Gatsby

The Gatsby queries will be dependent on the content of the data you're pulling in from github, but this plugin attempts to keep collection names consistent. For example: `repositories` in a query to the GitHub API will become `allRepositories` when accessing Gatsby's data. The above example can be accessed as:

```
{
allRepositories {
  edges {
    node {
      id
      name
      url
      description
    }
  }
}
```

## Contributing

Feel free to open an issue or submit a PR for improvements or features. The ideal goal is to map as closely to the GitHub API as possible within the structure of Gatsby's graphql api.
