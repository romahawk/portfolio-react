import { useEffect } from "react";

/**
 * Observes every element with class "reveal" and adds "reveal--visible"
 * the moment it enters the viewport. Fires once per element then stops
 * observing (no re-hide on scroll back up).
 *
 * rootMargin "-60px 0px" means the trigger fires when the element is
 * at least 60px inside the viewport — avoids instant pop-in at the very edge.
 */
export function useScrollReveal() {
  useEffect(() => {
    // Respect user's motion preference at the JS level too
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Make everything visible immediately — CSS already handles this,
      // but belt-and-suspenders for any JS-gated logic.
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("reveal--visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal--visible");
            observer.unobserve(entry.target); // fire once, no re-hide
          }
        });
      },
      {
        threshold: 0.08,          // 8% visible is enough to trigger
        rootMargin: "0px 0px -60px 0px", // don't fire right at the edge
      }
    );

    // Observe all current .reveal elements
    const observe = () => {
      document.querySelectorAll(".reveal:not(.reveal--visible)").forEach((el) => {
        observer.observe(el);
      });
    };

    observe();

    // Re-run after a short delay to catch any elements rendered asynchronously
    const t = setTimeout(observe, 300);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);
}
