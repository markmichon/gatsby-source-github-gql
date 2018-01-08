import { fetchData } from "./fetchQuery"
import { processData } from "./utils"
import crypto from "crypto"

exports.sourceNodes = async (
  { boundActionCreators, getNode, hasNodeChanged },
  userOptions
) => {
  const { createNode, createParentChildLink } = boundActionCreators

  if (!userOptions.auth && !userOptions.query) {
    console.log("--GH Plugin Error--\n")
    console.log(
      "Ensure that a valid auth token and query are provided in gatsby-config.js"
    )
  } else {
    const data = await fetchData(userOptions.auth, userOptions.query)
    processData(data).forEach(node => createNode(node))
  }

  return
}
