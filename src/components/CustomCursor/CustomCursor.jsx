"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  createMouseFollower,
  initMagneticElements,
  CURSOR_EVENTS,
  MENU_STICK_RADIUS,
  shouldEnableCursor,
} from "@/lib/cursor";
import "mouse-follower/dist/mouse-follower.min.css";
import "./CustomCursor.css";

/**
 * Mounts Cuberto Mouse Follower (stick) + magnetic demo (element pull).
 */
export default function CustomCursor() {
  const pathname = usePathname();
  const cursorRef = useRef(null);
  const cleanupMagneticRef = useRef(null);

  useEffect(() => {
    if (!shouldEnableCursor()) return;

    const cursor = createMouseFollower();
    cursorRef.current = cursor;
    cleanupMagneticRef.current = initMagneticElements(document);

    const getMenuStickTarget = () => {
      if (document.querySelector('[data-cursor-stick="#nav-menu-trigger"]')) {
        return document.getElementById("nav-menu-trigger");
      }
      if (document.querySelector('[data-cursor-stick="#nav-mobile-menu-trigger"]')) {
        return document.getElementById("nav-mobile-menu-trigger");
      }
      return null;
    };

    const distanceToCenter = (el) => {
      const rect = el.getBoundingClientRect();
      return Math.hypot(
        cursor.pos.x - (rect.left + rect.width / 2),
        cursor.pos.y - (rect.top + rect.height / 2)
      );
    };

    // Library stick ends on mouseout of the small trigger. Hold stick while
    // the pointer stays within MENU_STICK_RADIUS of the button center.
    cursor.on("render", () => {
      const target = getMenuStickTarget();
      if (!target) {
        if (cursor.stick) {
          cursor.removeStick();
          cursor.removeState("-exclusion -opaque");
        }
        return;
      }

      if (distanceToCenter(target) < MENU_STICK_RADIUS) {
        cursor.setStick(target);
        cursor.addState("-exclusion -opaque");
        return;
      }

      if (cursor.stick) {
        cursor.removeStick();
        cursor.removeState("-exclusion -opaque");
      }
    });

    const onReleaseStick = () => {
      cursor.removeStick();
      // Hiding the trigger skips mouseout, so hover states stay on the
      // follower until the next hover. Clear them with the library API.
      cursor.removeState("-exclusion -opaque");
    };

    document.addEventListener(CURSOR_EVENTS.RELEASE_STICK, onReleaseStick);

    return () => {
      document.removeEventListener(CURSOR_EVENTS.RELEASE_STICK, onReleaseStick);
      cleanupMagneticRef.current?.();
      cursor.destroy();
      cursorRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;
    cleanupMagneticRef.current?.();
    cleanupMagneticRef.current = initMagneticElements(document);
  }, [pathname]);

  return null;
}
