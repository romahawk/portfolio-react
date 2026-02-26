import React, { ReactNode } from "react";
import { motion } from "motion/react";

interface WorkflowSectionProps {
  title: string;
  color: string;
  children: ReactNode;
  delay?: number;
  className?: string;
  note?: string;
  footer?: ReactNode;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({
  title,
  color,
  children,
  delay = 0,
  className = "",
  note,
  footer,
}) => {
  const bgColorMap: Record<string, string> = {
    blue: "bg-blue-50/30 border-blue-100",
    purple: "bg-purple-50/30 border-purple-100",
    green: "bg-green-50/30 border-green-100",
    amber: "bg-amber-50/30 border-amber-100",
    gray: "bg-gray-50/30 border-gray-100",
  };

  const accentColorMap: Record<string, string> = {
    blue: "text-blue-700 bg-blue-100/50 border-blue-200",
    purple: "text-purple-700 bg-purple-100/50 border-purple-200",
    green: "text-green-700 bg-green-100/50 border-green-200",
    amber: "text-amber-700 bg-amber-100/50 border-amber-200",
    gray: "text-gray-700 bg-gray-100/50 border-gray-200",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      className={`relative flex flex-col p-6 rounded-2xl border min-w-[320px] max-w-[400px] h-fit transition-all ${
        bgColorMap[color] || bgColorMap.blue
      } ${className}`}
    >
      <div
        className={`inline-block w-fit px-3 py-1 rounded-lg border mb-6 text-xs font-bold uppercase tracking-widest ${
          accentColorMap[color] || accentColorMap.blue
        }`}
      >
        {title}
      </div>

      <div className="flex flex-col gap-4 relative">
        {children}
      </div>

      {note && (
        <div className="mt-8 pt-4 border-t border-dashed border-current opacity-60">
          <p className="text-[11px] italic text-gray-600 font-medium italic leading-relaxed">
            “{note}”
          </p>
        </div>
      )}

      {footer && (
        <div className="mt-4">
          {footer}
        </div>
      )}
    </motion.div>
  );
};
