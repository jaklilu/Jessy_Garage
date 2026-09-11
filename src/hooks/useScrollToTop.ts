import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to top on every client-side route change.
 * Resets both window scroll and document.documentElement for cross-browser support.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);
}
