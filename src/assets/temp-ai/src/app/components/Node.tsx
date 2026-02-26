import React from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface NodeProps {
  label: string;
  icon?: LucideIcon;
  subtext?: string;
  className?: string;
  delay?: number;
}

export const Node: React.FC<NodeProps> = ({ label, icon: Icon, subtext, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className={`bg-white border border-gray-200 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow flex items-start gap-3 min-w-[200px] ${className}`}
    >
      {Icon && <Icon className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-800 leading-tight">{label}</span>
        {subtext && <span className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{subtext}</span>}
      </div>
    </motion.div>
  );
};

interface ToolNodeProps {
  name: string;
  type?: "primary" | "secondary";
  className?: string;
  delay?: number;
}

export const ToolNode: React.FC<ToolNodeProps> = ({ name, type = "primary", className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={`px-3 py-1.5 rounded-full border border-dashed flex items-center gap-2 ${
        type === "primary" ? "border-blue-300 bg-blue-50/50" : "border-gray-300 bg-gray-50/50"
      } ${className}`}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${type === "primary" ? "bg-blue-500" : "bg-gray-400"}`} />
      <span className="text-[11px] font-semibold text-gray-600 uppercase tracking-tight">{name}</span>
    </motion.div>
  );
};
