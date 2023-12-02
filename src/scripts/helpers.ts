logLoaded(`helpers.ts`)

export interface HelpersInterface {
  DATA_ELEMENT_ATTR: string
  DATA_ACTIVE_ATTR: string
  DATA_CELL_ATTR: string
  now: Date
  logFunction(name: string, params?: any): void
  logValue(name: string, value: string | number | boolean | null): void
  logLoaded(name: string): void
  getElement(name: string, parent?: HTMLElement): HTMLElement | null
  getElements(name: string, parent?: HTMLElement): NodeListOf<HTMLElement>
  toggleAttribute(element: HTMLElement, toggle: boolean, attr: string): void
  addTableAria(): void
}

export const DATA_ELEMENT_ATTR: string = `data-element`
export const DATA_ACTIVE_ATTR: string = `data-active`
export const DATA_CELL_ATTR: string = `data-cell`
export const now: Date = new Date()

export function logFunction(name: string, params: any = {}): void {
  console.log(`fn: ${name}:(${JSON.stringify(params)})`)
}

export function logValue(
  name: string,
  value: string | number | boolean | null
): void {
  console.log(name, value)
}

export function logLoaded(name: string) {
  console.log(`${name} loaded.`)
}

export function getElement(
  name: string,
  parent?: HTMLElement
): HTMLElement | null {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelector(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

export function getElements(
  name: string,
  parent?: HTMLElement
): NodeListOf<HTMLElement> {
  logFunction(`getElement`, { name, parent })

  if (parent) {
    return parent.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
  }

  return document.querySelectorAll(`[${DATA_ELEMENT_ATTR}="${name}"]`)
}

export function toggleAttribute(
  element: HTMLElement,
  toggle: boolean = false,
  attr: string = DATA_ACTIVE_ATTR
): void {
  logFunction(`toggleAttribute`, { element, toggle, attr })

  if (toggle) {
    element.setAttribute(attr, String(toggle))
  } else {
    element.removeAttribute(attr)
  }
}

export function addTableAria(): void {
  try {
    var allTables = document.querySelectorAll("table")
    for (var i = 0; i < allTables.length; i++) {
      allTables[i].setAttribute("role", "table")
    }
    var allCaptions = document.querySelectorAll("caption")
    for (var i = 0; i < allCaptions.length; i++) {
      allCaptions[i].setAttribute("role", "caption")
    }
    var allRowGroups = document.querySelectorAll("thead, tbody, tfoot")
    for (var i = 0; i < allRowGroups.length; i++) {
      allRowGroups[i].setAttribute("role", "rowgroup")
    }
    var allRows = document.querySelectorAll("tr")
    for (var i = 0; i < allRows.length; i++) {
      allRows[i].setAttribute("role", "row")
    }
    var allCells = document.querySelectorAll("td")
    for (var i = 0; i < allCells.length; i++) {
      allCells[i].setAttribute("role", "cell")
    }
    var allHeaders = document.querySelectorAll("th")
    for (var i = 0; i < allHeaders.length; i++) {
      allHeaders[i].setAttribute("role", "columnheader")
    }
    // this accounts for scoped row headers
    var allRowHeaders = document.querySelectorAll("th[scope=row]")
    for (var i = 0; i < allRowHeaders.length; i++) {
      allRowHeaders[i].setAttribute("role", "rowheader")
    }
  } catch (e) {
    console.log("AddTableARIA(): " + e)
  }
}

export const helpers: HelpersInterface = {
  DATA_ELEMENT_ATTR,
  DATA_ACTIVE_ATTR,
  DATA_CELL_ATTR,
  now,
  logFunction,
  logValue,
  logLoaded,
  getElement,
  getElements,
  toggleAttribute,
  addTableAria,
}
