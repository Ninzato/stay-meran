export interface AnimationEnabledElement extends HTMLElement {
  __startFooterAnimation?: () => void;
  __startAnimation?: () => void;
}

export interface AnimationElementWithFunction extends Element {
  __startFooterAnimation?: () => void;
}