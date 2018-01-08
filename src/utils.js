import { isObject, isString, mapKeys } from "lodash"
import crypto from "crypto"
import uuid from "uuid/v4"
let nodes = []
let nodeIds = []

export const processData = data => {
  walkData(data, null)
  return nodes
}
const walkData = (data, parentKey = null) => {
  let activeKey = ""
  if (isObject(data)) {
    mapKeys(data, (value, key) => {
      activeKey = key

      if (Array.isArray(value)) {
        nodes = [...nodes, ...handleEdges(value, parentKey)]
      } else if (isString(value)) {
      } else if (isObject(value)) {
        walkData(value, key)
      }
    })
  }
}

// Converts an edges array into nodes
function handleEdges(arr, parentKey) {
  return arr.map((item, idx) => buildDataNode(item.node, parentKey))
}
function buildDataNode(fields, parentName) {
  console.log(fields)
  console.log(parentName)
  nodeIds.push(fields.id)
  return {
    ...fields,
    children: [],
    parent: "gh_source_items",
    internal: {
      type: `${parentName}`,
      contentDigest: crypto
        .createHash("md5")
        .update(JSON.stringify(fields))
        .digest("hex")
    }
  }
}
