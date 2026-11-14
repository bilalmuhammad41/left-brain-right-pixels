import { createMouseFollower } from "./mouseFollower";
import Magnetic, { initMagneticElements } from "./Magnetic";
import { CURSOR_EVENTS, MAGNETIC_DEFAULTS, MENU_STICK_RADIUS } from "./constants";

export function shouldEnableCursor() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(pointer: coarse)").matches) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return window.matchMedia("(min-width: 768px)").matches;
}

export {
  createMouseFollower,
  Magnetic,
  initMagneticElements,
  CURSOR_EVENTS,
  MAGNETIC_DEFAULTS,
  MENU_STICK_RADIUS,
};
