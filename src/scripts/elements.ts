import { logLoaded, logFunction, getElement, now } from "./helpers.ts"
import { config } from "./config.ts"

logLoaded(`elements.ts`)

export interface ElementsInterface {
  initTables(): void
  renderCopyright(): void
}

export function initTables(): void {
  logFunction(`initTables`)
}

export function renderCopyright(): void {
  logFunction(`renderCopyright`)

  // Format: The Beloved's Blog &copy; Davina Leong, 2022-2024
  const copyrightEl: HTMLElement | null = getElement(`copyright`)
  if (copyrightEl) {
    const yearHtml =
      config.year === now.getFullYear()
        ? `${config.year}`
        : `${config.year} &ndash; ${now.getFullYear()}`

    copyrightEl.innerHTML = `
          ${config.appName} &copy; ${config.author}, ${yearHtml}
          `
  }
}

export const elements: ElementsInterface = {
  initTables,
  renderCopyright,
}
