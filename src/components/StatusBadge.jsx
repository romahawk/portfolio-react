import React from "react";
import { useTranslation } from "../context/LangContext.jsx";

const getStatusSlug = (status = "") =>
  status
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function StatusBadge({ status }) {
  const { t } = useTranslation();
  if (!status) return null;
  const slug = getStatusSlug(status);
  const label = t(`site.status.${slug}`);

  return (
    <span className={`status-badge status-badge--${slug}`}>
      {label === `site.status.${slug}` ? status : label}
    </span>
  );
}
