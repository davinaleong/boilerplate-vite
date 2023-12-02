import {
  logLoaded,
  logFunction,
  getElement,
  getElements,
  now,
  DATA_CELL_ATTR,
  addTableAria,
} from "./helpers.ts"
import { config } from "./config.ts"

logLoaded(`elements.ts`)

export interface ElementsInterface {
  initTables(): void
  renderCopyright(): void
}

export function initTables(): void {
  logFunction(`initTables`)

  const tableEls: NodeListOf<HTMLElement> = getElements(`table`)
  for (const tableEl of tableEls) {
    const firstTheadThEls: NodeListOf<HTMLElement> = tableEl.querySelectorAll(
      `thead > tr:first-child > th`
    )
    const tbodyTrEls: NodeListOf<HTMLElement> =
      tableEl.querySelectorAll(`tbody > tr`)
    for (const tbodyTrEl of tbodyTrEls) {
      const trEls = tbodyTrEl.querySelectorAll(`td`)
      for (let i: number = 0; i < trEls.length; ++i) {
        trEls[i].setAttribute(DATA_CELL_ATTR, firstTheadThEls[i].innerText)
      }
    }
  }

  addTableAria()
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
