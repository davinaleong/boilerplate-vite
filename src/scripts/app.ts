import "../styles/app.scss"
import { logFunction, logLoaded } from "./helpers"
import { renderCopyright, initTables, renderHeaderNav } from "./elements"

logLoaded(`app.ts`)

/// Variables

/// Functions
function main() {
  logFunction(`main`)

  renderHeaderNav()
  renderCopyright()
  initTables()
}

/// Execute
document.addEventListener(`DOMContentLoaded`, main)
