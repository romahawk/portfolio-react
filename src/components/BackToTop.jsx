import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "../context/LangContext.jsx";

const BackToTop = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`backtotop ${show ? "is-visible" : ""}`}
      onClick={top}
      aria-label={t("backToTop")}
      title={t("backToTop")}
    >
      <ArrowUp size={18} className="icon" />
    </button>
  );
};

export default BackToTop;
