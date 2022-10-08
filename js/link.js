export {buildLink}

function buildLink(tree, path) {
  let current = tree
  let link = tree.name + ":"

  for (const i of path) {
    link += '/' + current.children[i].name
    current = current.children[i]
  }

  return link
}
