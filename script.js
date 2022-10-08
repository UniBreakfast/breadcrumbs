const folderNames = [
  "system",
  "system32",
  "system64",
  "drivers",
  "drivers32",
  "Windows",
  "Adobe",
  "Program Files",
  "Program Files (x86)",
  "bin",
  "lib",
  "node_modules",
  "src",
  "dist",
  "build",
  "docs",
  "doc",
  "images",
  "js",
  "css",
  "templates",
  "components",
  "pages",
  "routes",
  "utils",
  "helpers",
  "hooks",
  "context",
  "reducers",
  "actions",
]

const tree = buildRandomTree(6, 12)

show()

function buildRandomTree(maxDepth, maxChildren) {
  const tree = {
    name: "root",
    children: []
  }

  buildRandomTreeRecursive(tree, maxDepth, maxChildren)

  return tree
}

function buildRandomTreeRecursive(node, maxDepth, maxChildren) {
  if (!maxDepth) return

  const numChildren = Math.floor(Math.random() * maxChildren)

  for (let i = 0; i < numChildren; i++) {
    const child = { name: randomName(), children: [] }

    node.children.push(child)

    buildRandomTreeRecursive(child, maxDepth - 1, maxChildren)
  }
}

function randomName() {
  return folderNames[Math.floor(Math.random() * folderNames.length)]
}

function show(path = []) {
  const breadCrumbs = buildBreadCrumbs(path)
  const list = buildList(path)

  body.replaceChildren(breadCrumbs, list)
}

function buildBreadCrumbs(path /* [1,2,3] */) {
  const crumbs = document.createElement("div")

  crumbs.classList.add("crumbs")

  const parts = ['root']

  let current = tree

  for (const i of path) {
    parts.push(current.children[i].name)
    current = current.children[i]
  }

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    const crumb = document.createElement("a")

    crumb.textContent = part
    if (i < parts.length - 1) crumb.href = buildLink(path.slice(0, i))
    crumb.onclick = e => handleGoTo(e, path.slice(0, i))
    crumbs.append('>', crumb)
  }

  crumbs.firstChild.remove()

  return crumbs
}

function buildList(path) {
  const list = document.createElement("ul")

  let current = tree

  for (const i of path) {
    current = current.children[i]
  }

  for (let i = 0; i < current.children.length; i++) {
    const child = current.children[i]
    const item = document.createElement("li")
    const link = document.createElement("a")
    const subPath = [...path, i]

    link.textContent = child.name
    link.href = buildLink(subPath)
    link.onclick = e => handleGoTo(e, subPath)
    item.append(link)
    list.append(item)
  }

  return list
}

function handleGoTo(e, path) {
  e.preventDefault()
  show(path)
}

function buildLink(path) {
  let current = tree
  let link = tree.name + ":"

  for (const i of path) {
    link += `/${current.children[i].name}`
    current = current.children[i]
  }

  return link
}
