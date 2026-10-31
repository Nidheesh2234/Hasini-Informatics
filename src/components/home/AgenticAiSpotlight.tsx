"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Bot,
  Terminal,
  Activity,
  Play,
  CheckCircle2,
  Database,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";

interface AgentStep {
  agent: string;
  role: string;
  status: "pending" | "running" | "completed";
  action: string;
  latency: string;
  detail: string;
}

const scenarios = [
  {
    id: "inventory",
    title: "Global Supply Allocation",
    trigger: "Autonomous Rebalance: 14 Global Distribution Centers",
    steps: [
      {
        agent: "Nexus-Supervisor",
        role: "Orchestrator",
        status: "completed",
        action: "Deconstructing prompt into 4 concurrent task DAGs",
        latency: "14ms",
        detail: "Evaluating regional inventory discrepancies across APAC, EMEA, and US.",
      },
      {
        agent: "pgVector-Worker",
        role: "Data Engine",
        status: "completed",
        action: "Queried 4.2M SKU records via private VPC connection",
        latency: "38ms",
        detail: "Identified 840 out-of-stock items; matched nearest warehouse radius.",
      },
      {
        agent: "Optimizer-Critic",
        role: "Safety & Cost",
        status: "completed",
        action: "Evaluated 12 freight carrier contracts with confidence 99.8%",
        latency: "52ms",
        detail: "Selected optimal routing saving $4,850 in freight surcharges.",
      },
      {
        agent: "ERP-Dispatcher",
        role: "Autonomous Execution",
        status: "completed",
        action: "Dispatched automated SAP transfer orders with signed auth token",
        latency: "32ms",
        detail: "All 14 distribution center manifests updated with zero human intervention.",
      },
    ],
  },
  {
    id: "incident",
    title: "Self-Healing Canary Rollback",
    trigger: "Anomaly Detected: p99 Latency spike on Auth Service (780ms)",
    steps: [
      {
        agent: "Telemetry-Sentinel",
        role: "Real-time Monitor",
        status: "completed",
        action: "Ingested Datadog flamegraph & distributed traces",
        latency: "8ms",
        detail: "Isolated memory leak in v2.4.1 token deserializer.",
      },
      {
        agent: "Chaos-Governor",
        role: "Decision Matrix",
        status: "completed",
        action: "Initiated automated circuit breaker on vulnerable pod replicas",
        latency: "19ms",
        detail: "Prevented cascade failure across downstream microservices.",
      },
      {
        agent: "GitOps-Deployer",
        role: "Infrastructure",
        status: "completed",
        action: "Triggered ArgoCD canary rollback to stable build v2.4.0",
        latency: "64ms",
        detail: "Traffic seamlessly shifted. Error rate returned to 0.001%.",
      },
      {
        agent: "Audit-Recorder",
        role: "Post-Mortem",
        status: "completed",
        action: "Generated Jira incident ticket with root cause analysis & patch PR",
        latency: "28ms",
        detail: "Sent Slack executive alert with resolution logs.",
      },
    ],
  },
];

export default function AgenticAiSpotlight() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleStepCount, setVisibleStepCount] = useState(4);

  const scenario = scenarios[activeScenarioIdx];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setVisibleStepCount(0);
  };

  useEffect(() => {
    if (!isRunning) return;

    if (visibleStepCount < scenario.steps.length) {
      const timer = setTimeout(() => {
        setVisibleStepCount((prev) => prev + 1);
      }, 550);
      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [isRunning, visibleStepCount, scenario.steps.length]);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-[#03060f] border-t border-white/[0.08] overflow-hidden">
      {/* Background Neon Energy Web */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-violet-600/15 via-pink-600/15 to-cyan-500/15 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-4 h-4 animate-spin" />
            <span>AGENTIC AI &amp; AUTONOMOUS WORKFLOWS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.08]">
            Beyond Basic Chatbots: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-400 to-violet-400">
              Autonomous Agent Swarms.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We engineer autonomous multi-agent networks that reason, orchestrate distributed tools, execute private database transactions, and self-correct with mathematical precision.
          </p>
        </div>

        {/* Live Simulation Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Controls & Agent Topology (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-3xl bg-[#080d1c] border border-white/[0.08] backdrop-blur-xl">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center justify-between">
                <span>Select Live Simulation</span>
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
              </h3>

              <div className="space-y-2.5">
                {scenarios.map((sc, idx) => (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => {
                      setActiveScenarioIdx(idx);
                      setVisibleStepCount(sc.steps.length);
                      setIsRunning(false);
                    }}
                    className={`w-full text-left p-3.5 rounded-2xl transition-all cursor-pointer ${
                      activeScenarioIdx === idx
                        ? "bg-violet-600/20 border border-violet-500/50 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                        : "bg-white/[0.03] border border-white/[0.06] text-slate-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="text-xs font-mono font-bold">{sc.title}</div>
                    <div className="text-[11px] text-slate-400 truncate mt-1">
                      {sc.trigger}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.08]">
                <button
                  type="button"
                  disabled={isRunning}
                  onClick={handleRunSimulation}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-cyan-500 text-white hover:opacity-95 transition-opacity disabled:opacity-50 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{isRunning ? "Dispatching Swarm..." : "Replay Agent Flow"}</span>
                </button>
              </div>
            </div>

            {/* Architecture Node Map */}
            <div className="p-6 rounded-3xl bg-[#080d1c] border border-white/[0.08] backdrop-blur-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                Agent Swarm Topology
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 flex items-center gap-2">
                  <Bot className="w-4 h-4 text-violet-400" />
                  <span>Supervisor</span>
                </div>
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 flex items-center gap-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  <span>pgVector</span>
                </div>
                <div className="p-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-300 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-pink-400" />
                  <span>Critic Loop</span>
                </div>
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Dispatcher</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Live Terminal & Execution Trace (8 cols) */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-[#060a14] border border-white/[0.12] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
              {/* Terminal Window Chrome */}
              <div className="px-5 py-3.5 bg-[#090e1f] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs font-mono text-slate-400">
                    hasini-swarm://orchestrator-cluster-asia-south1
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE
                  </span>
                  <span>Latency: 42ms</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div className="p-6 sm:p-8 space-y-6 font-mono text-xs">
                {/* Trigger banner */}
                <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-cyan-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>&gt; {scenario.trigger}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">INIT</span>
                </div>

                {/* Animated Execution Steps */}
                <div className="space-y-4">
                  {scenario.steps.map((step, sIdx) => {
                    const isVisible = sIdx < visibleStepCount;
                    if (!isVisible) return null;

                    return (
                      <motion.div
                        key={step.agent}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/40 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span className="font-bold text-white text-sm">
                              [{step.agent}]
                            </span>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-slate-400 border border-white/[0.08]">
                              {step.role}
                            </span>
                          </div>
                          <span className="text-[11px] text-pink-400 font-bold">
                            &Delta; {step.latency}
                          </span>
                        </div>
                        <div className="text-slate-200 font-semibold mb-1">
                          {step.action}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {step.detail}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Final Execution Status */}
                {visibleStepCount >= scenario.steps.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span>Swarm Execution Success: Zero Policy Violations. Total Time: 136ms.</span>
                    </div>
                    <span className="text-[10px] font-mono bg-emerald-500/20 px-2.5 py-1 rounded">
                      VERIFIED
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
