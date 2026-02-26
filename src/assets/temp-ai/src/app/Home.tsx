import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Target, 
  Layout, 
  Code2, 
  ShieldCheck, 
  Briefcase, 
  Bot, 
  Layers, 
  Zap, 
  Terminal,
  FileCode2,
  GitBranch,
  Rocket,
  SearchCode,
  CheckCircle2,
  MousePointer2,
  MessageCircleCode,
  Eye,
  Activity,
  BarChart3,
  Video,
  FileText,
  MonitorCheck,
  Download,
  Monitor,
  Smartphone
} from "lucide-react";
import { WorkflowSection } from "./components/WorkflowSection";
import { Node, ToolNode } from "./components/Node";
import { ConnectionArrow } from "./components/ConnectionArrow";

const SidePanel = () => {
  const rules = [
    "Max 3 active projects",
    "One outcome per week per repo",
    "No refactor without shipping impact",
    "One source of truth per layer",
    "AI accelerates, does not decide",
    "If not deployed, it doesn’t count"
  ];

  return (
    <motion.aside
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="w-[300px] bg-white border border-gray-200 rounded-3xl p-8 shadow-xl shadow-gray-100/50 flex flex-col gap-8 h-fit lg:sticky top-12 self-start"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Governance (Side Panel)</h3>
        <h4 className="text-lg font-black text-gray-900 leading-tight">Operating Rules</h4>
        <div className="h-1 w-12 bg-gray-900 rounded-full mt-1" />
      </div>

      <ul className="flex flex-col gap-5">
        {rules.map((rule, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + idx * 0.1, duration: 0.3 }}
            className="flex items-start gap-3 group"
          >
            <div className="w-5 h-5 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors">
              <Zap className="w-2.5 h-2.5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <span className="text-[13px] font-bold text-gray-700 leading-snug">{rule}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-4 pt-8 border-t border-gray-100 flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Optional Control Tools</span>
          <div className="flex flex-wrap gap-2">
            <ToolNode name="Linear" type="secondary" />
            <ToolNode name="Trello" type="secondary" />
            <ToolNode name="Calendar" type="secondary" />
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

interface HeaderProps {
  orientation: "landscape" | "portrait";
  setOrientation: (o: "landscape" | "portrait") => void;
}

const Header: React.FC<HeaderProps> = ({ orientation, setOrientation }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="flex flex-col items-center justify-center py-16 px-6 gap-3 mb-8 print:p-0 print:mb-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="px-4 py-1.5 rounded-full bg-gray-900 text-white flex items-center gap-2 mb-4 print:hidden"
      >
        <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        <span className="text-[10px] font-black uppercase tracking-[0.25em]">Production-Grade System</span>
      </motion.div>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-black text-gray-900 text-center tracking-tighter leading-[1.1] max-w-4xl print:text-3xl"
      >
        AI × Leverage Framework — Production-Grade Solo Workflow
      </motion.h1>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 print:hidden">
        <div className="flex bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => setOrientation("landscape")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[11px] font-black uppercase transition-all ${
              orientation === "landscape" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Monitor className="w-3 h-3" />
            Landscape
          </button>
          <button
            onClick={() => setOrientation("portrait")}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[11px] font-black uppercase transition-all ${
              orientation === "portrait" ? "bg-white text-gray-900 shadow-sm" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Smartphone className="w-3 h-3" />
            Portrait
          </button>
        </div>

        <motion.button
          onClick={handlePrint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all shadow-lg shadow-blue-100 font-bold text-sm"
        >
          <Download className="w-4 h-4" />
          Save as PDF
        </motion.button>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="w-full py-16 flex justify-center items-center">
    <div className="flex flex-col items-center gap-4 border-t border-gray-100 pt-12 w-full max-w-4xl mx-auto px-6">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">
        Designed for Remote-First Agile Environments
      </p>
    </div>
  </footer>
);

export default function Home() {
  const [orientation, setOrientation] = useState<"landscape" | "portrait">("landscape");

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative print:bg-white print:overflow-visible">
      <style>{`
        @media print {
          @page {
            size: ${orientation};
            margin: 10mm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .print\\:hidden {
            display: none !important;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .print-grid-layout {
            display: grid !important;
            grid-template-columns: ${orientation === "landscape" ? "repeat(5, 1fr)" : "repeat(2, 1fr)"} !important;
            gap: 1.5rem !important;
            width: 100% !important;
            min-width: unset !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-grid-layout > div {
            max-width: 100% !important;
            min-width: unset !important;
            width: 100% !important;
          }
          .side-panel-print {
            grid-column: 1 / -1 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin-top: 2rem !important;
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2rem !important;
          }
          .side-panel-print > div:last-child {
            margin-top: 0 !important;
          }
          .hidden.lg\\:flex {
            display: none !important;
          }
        }
      `}</style>
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] bg-repeat print:hidden" />
      
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 py-8 print:p-0">
        <Header orientation={orientation} setOrientation={setOrientation} />

        <div className="flex flex-col lg:flex-row gap-16 items-start justify-center print:block">
          
          <main className="flex-1 w-full overflow-x-auto pb-12 no-scrollbar print:pb-0">
            <div className="flex gap-4 items-start min-w-max px-4 print-grid-layout">
              
              {/* SECTION 1 - STRATEGY LAYER */}
              <WorkflowSection 
                title="Strategy / Architect (Weekly Decision Compression)" 
                color="blue" 
                delay={0.1}
                note="AI supports clarity. Human owns scope."
                footer={
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-blue-100/40">
                    <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest">Primary Tools</span>
                    <div className="flex flex-wrap gap-2">
                      <ToolNode name="ChatGPT" />
                      <ToolNode name="Claude" />
                      <ToolNode name="FigJam" type="secondary" />
                      <ToolNode name="GitHub Issues" type="secondary" />
                    </div>
                  </div>
                }
              >
                <Node label="Define 1–3 Weekly Outcomes" icon={Target} />
                <Node label="Scope Constraints (Max 3 Projects)" icon={Briefcase} />
                <Node label="Write Acceptance Criteria" icon={CheckCircle2} />
                <Node label="Update Roadmap" icon={Layers} />
                <Node label="Update Decision Log" icon={FileCode2} />
              </WorkflowSection>

              <ConnectionArrow delay={0.3} />

              {/* SECTION 2 - ARCHITECTURE LAYER */}
              <WorkflowSection 
                title="Architecture & System Design" 
                color="purple" 
                delay={0.3}
                footer={
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-purple-100/40">
                    <span className="text-[9px] text-purple-500 font-bold uppercase tracking-widest">Primary Tools</span>
                    <div className="flex flex-wrap gap-2">
                      <ToolNode name="Claude" />
                      <ToolNode name="ChatGPT" />
                      <ToolNode name="Mermaid" type="secondary" />
                      <ToolNode name="Figma" type="secondary" />
                    </div>
                  </div>
                }
              >
                <Node label="Data Model Definition" icon={Layers} />
                <Node label="API Schema" icon={Terminal} />
                <Node label="Folder Structure" icon={Layout} />
                <Node label="State Management Design" icon={Layers} />
                <Node label="Edge Case Review" icon={SearchCode} />
                <Node label="Scalability Considerations" icon={Zap} />
              </WorkflowSection>

              <ConnectionArrow delay={0.5} />

              {/* SECTION 3 - BUILD LOOP */}
              <WorkflowSection 
                title="Daily Build Loop" 
                color="green" 
                delay={0.5}
                note="Small PRs. Async clarity. Ship daily."
                footer={
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-green-100/40">
                    <span className="text-[9px] text-green-600 font-bold uppercase tracking-widest">Core Engine</span>
                    <div className="flex flex-wrap gap-2">
                      <ToolNode name="GitHub" />
                      <ToolNode name="GitHub Copilot" />
                      <ToolNode name="VS Code" />
                      <ToolNode name="Claude" type="secondary" />
                      <ToolNode name="ChatGPT" type="secondary" />
                      <ToolNode name="Vercel" type="secondary" />
                    </div>
                  </div>
                }
              >
                <div className="flex flex-col gap-3 relative">
                  <div className="absolute left-[11px] top-6 bottom-6 w-0.5 border-l-2 border-dashed border-green-200" />
                  <div className="flex items-center gap-2 group">
                     <div className="w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-sm flex-shrink-0 z-10" />
                     <Node label="Select GitHub Issue" icon={MessageCircleCode} className="flex-1" />
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                     <Node label="Define Micro-Scope" icon={Target} className="flex-1" />
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                     <Node label="Implement" icon={Code2} className="flex-1 bg-green-50/50 border-green-200" />
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                     <Node label="AI Code Review" icon={Bot} className="flex-1" />
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                     <Node label="Manual Reasoning Pass" icon={MousePointer2} className="flex-1" />
                  </div>
                  <div className="flex items-center gap-2 pl-4">
                     <Node label="PR + Merge" icon={GitBranch} className="flex-1" />
                  </div>
                  <div className="flex items-center gap-2 group">
                     <div className="w-6 h-6 rounded-full bg-green-600 border-4 border-white shadow-md flex-shrink-0 z-10 animate-pulse" />
                     <Node label="Deploy" icon={Rocket} className="flex-1 bg-green-600 text-white border-none shadow-lg" />
                  </div>
                </div>
              </WorkflowSection>

              <ConnectionArrow delay={0.7} />

              {/* SECTION 4 - PRODUCTION HARDENING */}
              <WorkflowSection 
                title="Production Hardening" 
                color="amber" 
                delay={0.7}
                note="Production readiness > feature count."
                footer={
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-amber-100/40">
                    <span className="text-[9px] text-amber-600 font-bold uppercase tracking-widest">Refinement Stack</span>
                    <div className="flex flex-wrap gap-2">
                      <ToolNode name="Claude" />
                      <ToolNode name="ChatGPT" />
                      <ToolNode name="Lighthouse" type="secondary" />
                      <ToolNode name="Sentry" type="secondary" />
                      <ToolNode name="PostHog" type="secondary" />
                    </div>
                  </div>
                }
              >
                <Node label="UX Review" icon={Eye} />
                <Node label="Loading & Error States" icon={Activity} />
                <Node label="Performance Optimization" icon={Zap} />
                <Node label="Error Monitoring" icon={ShieldCheck} />
                <Node label="Analytics Integration" icon={BarChart3} />
              </WorkflowSection>

              <ConnectionArrow delay={0.9} />

              {/* SECTION 5 - SIGNAL LAYER */}
              <WorkflowSection 
                title="Professional Signal Layer" 
                color="gray" 
                delay={0.9}
                footer={
                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-100">
                    <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Distribution Tools</span>
                    <div className="flex flex-wrap gap-2">
                      <ToolNode name="GitHub" />
                      <ToolNode name="Loom" />
                      <ToolNode name="README" type="secondary" />
                      <ToolNode name="Portfolio" type="secondary" />
                      <ToolNode name="ChatGPT" type="secondary" />
                    </div>
                  </div>
                }
              >
                <Node label="Clean Git History" icon={GitBranch} />
                <Node label="PR Discipline" icon={MessageCircleCode} />
                <Node label="Architecture Docs" icon={FileCode2} />
                <Node label="Public Deployment" icon={MonitorCheck} />
                <Node label="Demo Recording" icon={Video} />
                <Node label="Case Study Extraction" icon={FileText} />
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  className="mt-6 p-5 bg-gray-900 rounded-2xl flex items-center justify-between border-b-4 border-blue-500 shadow-xl"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest mb-1">Final Output</span>
                    <span className="text-white text-sm font-bold tracking-tight">Public Portfolio Artifact</span>
                  </div>
                  <Rocket className="w-5 h-5 text-blue-400" />
                </motion.div>
              </WorkflowSection>
              
            </div>
          </main>

          <div className="print:mt-12 print-grid-layout side-panel-print">
            <SidePanel />
          </div>

        </div>

        <Footer />
      </div>
    </div>
  );
}
