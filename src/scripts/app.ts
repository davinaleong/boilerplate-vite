import "../styles/app.scss"
import { logFunction, logLoaded } from "./helpers"
import { renderCopyright, initTables } from "./elements"

logLoaded(`app.ts`)

/// Variables

/// Functions
function main() {
  logFunction(`main`)

  renderCopyright()
  initTables()
}

/// Execute
document.addEventListener(`DOMContentLoaded`, main)
