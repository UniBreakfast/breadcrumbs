export { handleGoTo }

import {show} from './show.js'

function handleGoTo(e, tree, path) {
  e.preventDefault()
  show(tree, path)
}
