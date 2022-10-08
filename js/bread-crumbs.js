export { buildBreadCrumbs }

import { buildLink } from './link.js'
import { handleGoTo } from './go-to.js'

function buildBreadCrumbs(tree, pathIndices /* [1,2,3] */) {
  const crumbs = document.createElement("div")
  const parts = [tree.name]

  let current = tree
  
  for (const index of pathIndices) {
    parts.push(current.children[index].name)
    current = current.children[index]
  }
  
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    const crumb = document.createElement("a")
    
    if (i < parts.length - 1) {
      const partialPathIndices = pathIndices.slice(0, i)

      crumb.href = buildLink(tree, partialPathIndices)
      crumb.onclick = e => handleGoTo(e, tree, partialPathIndices)
    }
    
    crumb.textContent = part

    crumbs.append(crumb, '>')
  }
  
  crumbs.classList.add("crumbs")
  crumbs.lastChild.remove()

  return crumbs
}
