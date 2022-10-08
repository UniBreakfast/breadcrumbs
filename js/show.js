export { show }

import { buildBreadCrumbs } from './bread-crumbs.js'
import { buildList } from './list.js'

function show(tree, path = []) {
  const breadCrumbs = buildBreadCrumbs(tree, path)
  const list = buildList(tree, path)

  body.replaceChildren(breadCrumbs, list)
}
