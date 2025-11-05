import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`backtotop ${show ? "is-visible" : ""}`}
      onClick={top}
      aria-label="Back to top"
      title="Back to top"
    >
      <ArrowUp size={18} className="icon" />
    </button>
  );
};

export default BackToTop;
