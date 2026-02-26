import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface ConnectionArrowProps {
  className?: string;
  delay?: number;
}

export const ConnectionArrow: React.FC<ConnectionArrowProps> = ({ className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`hidden lg:flex flex-shrink-0 items-center justify-center p-4 self-center ${className}`}
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
        <ChevronRight className="w-8 h-8 text-gray-300 relative z-10" />
      </div>
    </motion.div>
  );
};
