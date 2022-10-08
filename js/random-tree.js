export { buildRandomTree }

import { chooseRandomName } from './random-name.js'

function buildRandomTree(maxDepth, maxChildren) {
  const tree = { name: "root", children: [] }

  buildBranch(tree, maxDepth, maxChildren)

  return tree
}

function buildBranch(node, maxDepth, maxChildren) {
  if (!maxDepth) return

  const numChildren = Math.floor(Math.random() * maxChildren)

  for (let i = 0; i < numChildren; i++) {
    const child = { name: chooseRandomName(), children: [] }

    node.children.push(child)

    buildBranch(child, maxDepth - 1, maxChildren)
  }
}
