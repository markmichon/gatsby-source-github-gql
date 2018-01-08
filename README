# gatsby-source-github-gql (beta)

Pull any data from the [github graphql api](https://developer.github.com/v4/).

_Note_: Currently only supports single queries and no nested collections.

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
