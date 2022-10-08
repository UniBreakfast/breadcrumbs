export { chooseRandomName }

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

function chooseRandomName() {
  return folderNames[Math.floor(Math.random() * folderNames.length)]
}
