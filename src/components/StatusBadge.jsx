import React from "react";

const getStatusSlug = (status = "") =>
  status
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function StatusBadge({ status }) {
  if (!status) return null;
  const slug = getStatusSlug(status);

  return (
    <span className={`status-badge status-badge--${slug}`}>
      {status}
    </span>
  );
}
