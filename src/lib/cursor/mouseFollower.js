import MouseFollower from "mouse-follower";
import { gsap } from "@/lib/gsap";

let gsapRegistered = false;

function registerGSAP() {
  if (gsapRegistered) return;
  MouseFollower.registerGSAP(gsap);
  gsapRegistered = true;
}

/**
 * Creates a Cuberto MouseFollower instance.
 * Stick: `data-cursor-stick` + `stickDelta` (library-native).
 * @see https://github.com/Cuberto/mouse-follower
 * @param {Record<string, unknown>} [options]
 */
export function createMouseFollower(options = {}) {
  registerGSAP();

  return new MouseFollower({
    skewing: 0.8,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.28,
    speed: 0.55,
    stateDetection: {
      "-pointer": "a,button:not(.menu-button--hamburger)",
      "-hidden": "iframe",
    },
    ...options,
  });
}
