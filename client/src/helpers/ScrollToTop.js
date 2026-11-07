import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top on route change, or to the #anchor when the URL has one
// (e.g. /life-sciences#readiness-review from the homepage button).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    let tries = 0;
    const id = decodeURIComponent(hash.slice(1));
    const timer = setInterval(() => {
      const el = document.getElementById(id);
      if (el || ++tries > 20) {
        clearInterval(timer);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
    return () => clearInterval(timer);
  }, [pathname, hash]);

  return null;
}
