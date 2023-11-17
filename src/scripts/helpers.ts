export interface HelpersInterface {
  dataElementAttr: string;
  dataActiveAttr: string;
  now: Date;
  logFunction(name: string, params?: any): void;
  logValue(name: string, value: string | number | boolean | null): void;
  getElement(name: string, parent?: HTMLElement): HTMLElement | null;
  getAllElements(name: string, parent?: HTMLElement): NodeListOf<Element>;
  toggleAttribute(element: HTMLElement, toggle: boolean, attr: string): void;
}

export const dataElementAttr: string = `data-element`;
export const dataActiveAttr: string = `data-active`;
export const now: Date = new Date();

export function logFunction(name: string, params?: any = {}): void {
  console.log(`fn: ${name}:(${JSON.stringify(params)})`);
}

export function logValue(
  name: string,
  value: string | number | boolean | null
): void {
  console.log(name, value);
}

export function getElement(
  name: string,
  parent?: HTMLElement
): HTMLElement | null {
  logFunction(`getElement`, { name, parent });

  if (parent) {
    return parent.querySelector(`[${dataElementAttr}="${name}"]`);
  }

  return document.querySelector(`[${dataElementAttr}="${name}"]`);
}

export function getAllElements(
  name: string,
  parent?: HTMLElement
): NodeListOf<Element> {
  logFunction(`getElement`, { name, parent });

  if (parent) {
    return parent.querySelectorAll(`[${dataElementAttr}="${name}"]`);
  }

  return document.querySelectorAll(`[${dataElementAttr}="${name}"]`);
}

export function toggleAttribute(
  element: HTMLElement,
  toggle: boolean = false,
  attr: string = dataActiveAttr
): void {
  logFunction(`toggleAttribute`, { element, toggle, attr });

  if (toggle) {
    element.setAttribute(attr, String(toggle));
  } else {
    element.removeAttribute(attr);
  }
}

export const helpers: HelpersInterface = {
  dataElementAttr,
  dataActiveAttr,
  now,
  logFunction,
  logValue,
  getElement,
  getAllElements,
  toggleAttribute,
};
