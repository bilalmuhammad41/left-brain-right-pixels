import { gsap } from "@/lib/gsap";
import { MAGNETIC_DEFAULTS } from "./constants";

/**
 * Cuberto magnetic effect — element pulls toward the pointer on hover.
 * @see https://github.com/Cuberto/cursor-magnetic-demo
 */
export default class Magnetic {
  /**
   * @param {HTMLElement} el
   * @param {Partial<typeof MAGNETIC_DEFAULTS>} [options]
   */
  constructor(el, options = {}) {
    this.el = el;
    this.options = { ...MAGNETIC_DEFAULTS, ...options };

    const datasetOptions = this.parseDatasetOptions();
    if (datasetOptions) {
      this.options = { ...this.options, ...datasetOptions };
    }

    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);

    this.bind();
  }

  parseDatasetOptions() {
    const raw = this.el.getAttribute("data-magnetic");
    if (!raw || raw === "true") return null;

    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  bind() {
    this.el.addEventListener("mouseenter", this.onMouseEnter);
    this.el.addEventListener("mousemove", this.onMouseMove);
    this.el.addEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseEnter() {
    const rect = this.el.getBoundingClientRect();
    this.x = rect.left;
    this.y = rect.top;
    this.width = rect.width;
    this.height = rect.height;
  }

  onMouseMove(event) {
    const offsetY = (event.clientY - this.y - this.height / 2) * this.options.y;
    const offsetX = (event.clientX - this.x - this.width / 2) * this.options.x;
    this.move(offsetX, offsetY, this.options.s);
  }

  onMouseLeave() {
    this.move(0, 0, this.options.rs);
  }

  move(x, y, speed) {
    gsap.to(this.el, {
      x,
      y,
      force3D: true,
      overwrite: true,
      duration: speed,
    });
  }

  destroy() {
    this.el.removeEventListener("mouseenter", this.onMouseEnter);
    this.el.removeEventListener("mousemove", this.onMouseMove);
    this.el.removeEventListener("mouseleave", this.onMouseLeave);
    gsap.set(this.el, { x: 0, y: 0 });
  }
}

/**
 * @param {Document | HTMLElement} [root]
 * @returns {() => void}
 */
export function initMagneticElements(root = document) {
  const scope = root instanceof Document ? root : root;
  /** @type {Magnetic[]} */
  const instances = [];

  scope.querySelectorAll("[data-magnetic]").forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    instances.push(new Magnetic(el));
  });

  return () => {
    instances.forEach((instance) => instance.destroy());
  };
}
