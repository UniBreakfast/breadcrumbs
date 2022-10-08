export { buildList }

import {buildLink} from './link.js'
import {handleGoTo} from './go-to.js'

function buildList(tree, pathIndices) {
  const list = document.createElement("ul")

  let current = tree

  for (const index of pathIndices) {
    current = current.children[index]
  }

  for (let i = 0; i < current.children.length; i++) {
    const child = current.children[i]
    const item = document.createElement("li")
    const link = document.createElement("a")
    const subPath = pathIndices.concat(i)

    link.textContent = child.name
    link.href = buildLink(tree, subPath)
    link.onclick = e => handleGoTo(e, tree, subPath)
    item.append(link)
    list.append(item)
  }

  return list
}
