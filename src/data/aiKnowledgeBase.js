// AI Field Guide — single source of truth for /kb.
// Edit content here; the page, project matrix and glossary are generated from it.
// Status values for project applications: "In use" | "In build". Only list work that exists today.
// Verdict values for tools: "Use" | "Try" | "Skip"

export const kbMeta = {
  title: "AI Field Guide",
  lastReviewed: "30 Sep 2026",
  intro:
    "My working reference for building with AI agents: the terms, the practices that hold up, and the tools I actually use across my own projects. Five pillars, each tied back to a real build.",
  mentalModel:
    "The model is the engine. The harness is the car around it. Skills are the driving lessons. Memory is the logbook. Tools are the roads it can reach. Cost is the fuel budget.",
};

export const kbProjects = [
  { id: "deutschon", name: "DeutschOn-AI", note: "MSc capstone — human-in-the-loop AI assessment for German B1 learners" },
  { id: "magic-kick", name: "Magic Kick", note: "AI-augmented personal execution OS" },
  { id: "alpharhythm", name: "AlphaRhythm", note: "Trading rule-compliance micro-SaaS" },
  { id: "proof-engine", name: "Proof Engine", note: "90-day plan tracker where tasks close only with evidence" },
  { id: "business-os", name: "AI-Business-OS", note: "Markdown + Git strategic OS that agents read first" },
  { id: "portfolio", name: "mazuryk.dev", note: "This site" },
];

export const kbPillars = [
  {
    id: "harness",
    number: "01",
    icon: "Cpu",
    title: "Harness",
    tagline: "What it does before it types",
    definition:
      "A harness is everything wrapped around the model that turns it into an agent: the loop that calls the model, the system prompt, the tools it may use, the permissions, and the rules for planning, checking and stopping. Claude Code is a harness. The same model behaves very differently inside a good or a bad one.",
    parts: [
      { term: "Agent loop", text: "Model thinks → calls a tool → reads the result → repeats until the task is done or it hands back control." },
      { term: "Project instructions", text: "CLAUDE.md / AGENTS.md — the standing brief the agent reads at the start of every session." },
      { term: "Plan mode", text: "The agent proposes a plan and waits for approval before touching files." },
      { term: "Hooks", text: "Deterministic scripts that fire on events (before a tool call, after an edit, on stop). Rules that must always hold belong here, not in prose." },
      { term: "Subagents", text: "Separate agents with their own context for a bounded job (search, review), so the main session stays clean." },
      { term: "Permissions", text: "What the agent may do without asking: read, edit, run commands, reach the network." },
    ],
    practices: [
      "Pick one harness methodology and commit to it. Stacked harness packs give the model conflicting rules.",
      "Keep CLAUDE.md short and specific: commands, conventions, what not to touch. Point to docs instead of pasting them.",
      "Plan first, then build in small, reviewable steps — one issue, one branch, one session.",
      "Close the loop with verification: lint, build and tests the agent must run before it calls a task done.",
      "Enforce hard rules with hooks or CI, not with capital letters in a prompt.",
    ],
    pitfalls: [
      "Installing every popular pack at once — context fills with instructions before any work starts.",
      "Letting the agent mark its own work as done without a check it cannot fake.",
      "Unattended runs without a stop condition or a budget.",
    ],
    projects: [
      { project: "portfolio", status: "In use", text: "CLAUDE.md defines the orient → branch → lint → build → PR loop, a freeze list and architecture rules the agent must not break." },
      { project: "business-os", status: "In use", text: "AGENTS.md defines the entry protocol every agent follows before it touches a project." },
      { project: "deutschon", status: "In use", text: "Sessions start from docs/STATE.md and decisions.md; work ships as small, bounded issues." },
    ],
    tools: [
      { name: "Claude Code", href: "https://docs.claude.com/en/docs/claude-code/overview", verdict: "Use", note: "Primary harness." },
      { name: "superpowers", href: "https://github.com/obra/superpowers", verdict: "Try", note: "Plan / TDD / debug discipline. The one harness pack worth adding." },
      { name: "learn-claude-code", href: "https://github.com/shareAI-lab/learn-claude-code", verdict: "Try", note: "Read it to understand how an agent loop is built." },
      { name: "andrej-karpathy-skills", href: "https://github.com/forrestchang/andrej-karpathy-skills", verdict: "Try", note: "Borrow principles into your own CLAUDE.md." },
      { name: "ponytail", href: "https://github.com/DietrichGebert/ponytail", verdict: "Try", note: "Minimal-code bias. Test on one repo first." },
      { name: "ECC / gstack", href: "https://github.com/affaan-m/everything-claude-code", verdict: "Skip", note: "Heavy packs that overlap with each other and with a custom OS." },
    ],
  },
  {
    id: "skills",
    number: "02",
    icon: "Sparkles",
    title: "Skills",
    tagline: "The jobs it repeats",
    definition:
      "A skill is a packaged procedure: a folder with a SKILL.md (instructions) plus optional scripts, templates and references. Only its name and description sit in context until a task matches — then the full instructions load. Skills turn a workflow you explained once into one the agent runs the same way every time.",
    parts: [
      { term: "SKILL.md", text: "Frontmatter (name, description) and step-by-step instructions." },
      { term: "Description", text: "The trigger. It decides when the skill fires, so it must name the situations, not just the topic." },
      { term: "Progressive disclosure", text: "Metadata first, full body on demand, bundled files only when needed — cheap to keep many installed." },
      { term: "Plugin", text: "A bundle of skills, subagents, hooks and MCP servers installed together from a marketplace." },
    ],
    practices: [
      "Turn a workflow into a skill after you have done it by hand three times — not before.",
      "Write the description as trigger phrases: when to use it, and when not to.",
      "Keep one job per skill. Put long reference material in separate files the skill reads on demand.",
      "Put deterministic steps in scripts; keep judgement in the instructions.",
      "Test a skill against real inputs before trusting it.",
    ],
    pitfalls: [
      "Vague descriptions — the skill never fires, or fires on everything.",
      "Installing skill packs you have not read. Skills can run code on your machine.",
      "Two skills that cover the same job with different rules.",
    ],
    projects: [
      { project: "deutschon", status: "In use", text: "A sync skill orients each strategy session from the repo's STATE and decision log, and flags what needs a ruling." },
      { project: "alpharhythm", status: "In use", text: "A sync skill reads NEXT_SESSION_START and the decisions log before any work begins." },
      { project: "business-os", status: "In use", text: "Custom skills — recruiter research, VC-style pitch review, a German tutor — packaged once and reused across Claude apps." },
    ],
    tools: [
      { name: "anthropics/skills", href: "https://github.com/anthropics/skills", verdict: "Use", note: "Reference for structure; skill-creator for building and testing." },
      { name: "claude-plugins-official", href: "https://github.com/anthropics/claude-plugins-official", verdict: "Use", note: "Official plugin directory — browse before building." },
      { name: "ui-ux-pro-max", href: "https://github.com/nextlevelbuilder/ui-ux-pro-max-skill", verdict: "Try", note: "Pick this or taste-skill, not both." },
      { name: "taste-skill", href: "https://github.com/leonxlnx/taste-skill", verdict: "Try", note: "Anti-generic frontend design rules." },
      { name: "awesome-claude-skills", href: "https://github.com/ComposioHQ/awesome-claude-skills", verdict: "Skip", note: "Bookmark as a directory; do not bulk-install." },
      { name: "wshobson/agents", href: "https://github.com/wshobson/agents", verdict: "Skip", note: "Large subagent catalogue; more than a solo builder needs." },
    ],
  },
  {
    id: "memory",
    number: "03",
    icon: "Brain",
    title: "Memory",
    tagline: "What survives the session",
    definition:
      "A model forgets everything when a session ends. Memory is how context carries over: what is loaded every time (project instructions), what is written down as state (plans, decisions), what is retrieved on demand (search, code indexes), and what the context window holds right now.",
    parts: [
      { term: "Context window", text: "Working memory for one session. Everything the model sees — prompt, files, tool output — competes for it." },
      { term: "Instruction memory", text: "CLAUDE.md and similar files, loaded automatically at session start." },
      { term: "State files", text: "STATE.md, decision logs, next-session notes: the handover between sessions, written for the next agent." },
      { term: "Retrieval", text: "Search, embeddings (RAG) or code graphs that fetch only the relevant slice when needed." },
      { term: "Compaction", text: "Summarising a long session to free the window. Lossy — important decisions belong in files, not in chat." },
    ],
    practices: [
      "One source of truth per fact. Two memory systems for the same thing will drift.",
      "Write decisions and the reasons behind them, not transcripts.",
      "End every session with a parking note: exactly where the next one starts.",
      "Keep files in Git so memory has history and review, like code.",
      "Start a fresh session for a new task instead of dragging old context along.",
    ],
    pitfalls: [
      "Trusting a long chat as memory — it gets compacted, or it ends.",
      "Adding a memory plugin on top of an existing state-file system.",
      "Storing personal or regulated data in memory tools that leave your control.",
    ],
    projects: [
      { project: "business-os", status: "In use", text: "The strategic memory layer: goals, current focus, decision rules and a decision log in Markdown + Git." },
      { project: "deutschon", status: "In use", text: "docs/STATE.md and decisions.md are the handover between strategy and build sessions." },
      { project: "alpharhythm", status: "In use", text: "NEXT_SESSION_START.md and DECISIONS_LOG.md make every session resumable in one read." },
      { project: "proof-engine", status: "In build", text: "The 90-day plan lives as Markdown in AI-Business-OS; the app generates its data from it — one source, two views." },
    ],
    tools: [
      { name: "CLAUDE.md / AGENTS.md", href: "https://docs.claude.com/en/docs/claude-code/memory", verdict: "Use", note: "Built in. Keep it lean." },
      { name: "repomix", href: "https://github.com/yamadashy/repomix", verdict: "Try", note: "Pack a repo into one file for a chat-based strategy session." },
      { name: "planning-with-files", href: "https://github.com/OthmanAdi/planning-with-files", verdict: "Skip", note: "Good pattern — I already run it with my own state files." },
      { name: "claude-mem", href: "https://github.com/thedotmack/claude-mem", verdict: "Skip", note: "Would compete with existing state files as a second source of truth." },
      { name: "graphify / codegraph", href: "https://github.com/colbymchenry/codegraph", verdict: "Skip", note: "Pays off on large codebases; revisit when a repo outgrows direct reading." },
    ],
  },
  {
    id: "tools",
    number: "04",
    icon: "Wrench",
    title: "Tools",
    tagline: "What it reaches past the terminal",
    definition:
      "Tools are the actions an agent can take beyond writing text: read files, run commands, search the web, call an API, drive a browser. MCP (Model Context Protocol) is the open standard for plugging external systems in as tools, so one integration works across agents.",
    parts: [
      { term: "Tool call", text: "The model asks to run a named action with arguments; the harness executes it and returns the result." },
      { term: "MCP server", text: "A small service that exposes tools (and data) from a system — GitHub, a browser, a database — to any MCP client." },
      { term: "Connector", text: "A hosted MCP integration you switch on in the app, e.g. Drive or Notion." },
      { term: "Structured output", text: "Forcing a response into a schema so software, not a human, can consume it safely." },
    ],
    practices: [
      "Least privilege: give each agent only the tools and scopes the task needs.",
      "Fewer tools, better tools. Every tool definition costs context and adds a way to go wrong.",
      "Prefer an existing CLI (git, gh) when it does the same job as an MCP server.",
      "Validate every model output that feeds software against a schema.",
      "Keep humans at the boundary for anything irreversible: sending, publishing, paying, deleting.",
    ],
    pitfalls: [
      "Connecting a tool with write access \"just in case\".",
      "Sending personal or student data through third-party hosted tools.",
      "Scraping sites whose terms forbid it.",
    ],
    projects: [
      { project: "deutschon", status: "In build", text: "Claude via the Vercel AI SDK returns structured assessments checked against a schema; the teacher accepts, edits or rejects before a student sees anything." },
    ],
    tools: [
      { name: "playwright-mcp", href: "https://github.com/microsoft/playwright-mcp", verdict: "Use", note: "Lets the agent test in a real browser." },
      { name: "gh CLI / github-mcp", href: "https://github.com/github/github-mcp-server", verdict: "Use", note: "Issue-driven work. The CLI is often enough." },
      { name: "firecrawl", href: "https://github.com/firecrawl/firecrawl", verdict: "Try", note: "Clean web extraction. Respect site terms." },
      { name: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers", verdict: "Skip", note: "Directory to search, not to install." },
      { name: "multica / vibe-kanban", href: "https://github.com/BloopAI/vibe-kanban", verdict: "Skip", note: "Multi-agent orchestration — overkill at solo scale." },
      { name: "cc-switch / claude-code-router", href: "https://github.com/musistudio/claude-code-router", verdict: "Skip", note: "Provider switching adds complexity without a need." },
    ],
  },
  {
    id: "cost",
    number: "05",
    icon: "Gauge",
    title: "Cost",
    tagline: "What it costs to run",
    definition:
      "Every agent action is paid in tokens — input (everything in context) and output (what the model writes). Cost is driven less by the question than by what the harness loads: instructions, tool definitions, file reads and long histories. On a subscription the same drivers show up as usage limits.",
    parts: [
      { term: "Tokens", text: "The unit of text the model reads and writes. Context is re-read on every turn." },
      { term: "Model choice", text: "Smaller models for routine or high-volume steps; the strongest model for planning and hard reasoning." },
      { term: "Prompt caching", text: "Reusing an unchanged prompt prefix so repeated context is cheaper and faster." },
      { term: "Context hygiene", text: "Clearing or compacting between tasks; delegating noisy searches to subagents." },
    ],
    practices: [
      "Measure before optimising: watch context usage live, then fix the biggest consumer.",
      "One task per session. Clear context between unrelated tasks.",
      "Route by difficulty — do not pay top-model prices for formatting or extraction.",
      "Keep stable content (instructions, schemas) at the front so caching works.",
      "Cap unattended runs with a budget and a stop condition.",
    ],
    pitfalls: [
      "Dozens of MCP tools loaded in every session whether used or not.",
      "Re-pasting whole repos when a targeted read would do.",
      "Cutting tokens by making output unreadable — cheaper, but slower to review.",
    ],
    projects: [
      { project: "business-os", status: "In use", text: "A written usage discipline: one task per session, lean instruction files, periodic usage audits." },
    ],
    tools: [
      { name: "claude-hud", href: "https://github.com/jarrodwatts/claude-hud", verdict: "Use", note: "Shows context, tools and agents live in the status line." },
      { name: "claude-code-best-practice", href: "https://github.com/shanraisshan/claude-code-best-practice", verdict: "Try", note: "Reading material, not an install." },
      { name: "system-prompts-and-models-of-ai-tools", href: "https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools", verdict: "Try", note: "Study how production agents are prompted." },
      { name: "codex-plugin-cc", href: "https://github.com/openai/codex-plugin-cc", verdict: "Try", note: "Second-opinion review — only if you already pay for Codex." },
      { name: "caveman", href: "https://github.com/juliusbrussee/caveman", verdict: "Skip", note: "Saves tokens by trading away readability." },
    ],
  },
];

export const kbGlossary = [
  { term: "Agent", pillar: "harness", def: "A model running in a loop with tools, deciding its own next step until a goal is met." },
  { term: "Agent loop", pillar: "harness", def: "The cycle of think → act (tool call) → observe result → repeat." },
  { term: "Harness", pillar: "harness", def: "The software around a model that makes it an agent: loop, prompt, tools, permissions, rules." },
  { term: "System prompt", pillar: "harness", def: "Standing instructions the harness gives the model before any user input." },
  { term: "CLAUDE.md / AGENTS.md", pillar: "memory", def: "Project instruction files an agent loads at session start." },
  { term: "Plan mode", pillar: "harness", def: "A mode where the agent proposes a plan and makes no changes until approved." },
  { term: "Hook", pillar: "harness", def: "A script that runs automatically on an agent event, used to enforce rules deterministically." },
  { term: "Subagent", pillar: "harness", def: "A helper agent with its own context window, used to isolate a bounded task." },
  { term: "Permission mode", pillar: "harness", def: "The setting that decides which actions an agent may take without asking." },
  { term: "Headless mode", pillar: "harness", def: "Running an agent non-interactively, e.g. from a script, schedule or CI." },
  { term: "Git worktree", pillar: "harness", def: "A second checkout of the same repo, so parallel agents do not collide." },
  { term: "Skill", pillar: "skills", def: "A folder with SKILL.md and optional files that teaches the agent a repeatable procedure." },
  { term: "Progressive disclosure", pillar: "skills", def: "Loading only a skill's name and description until it is needed, then the full body." },
  { term: "Plugin", pillar: "skills", def: "An installable bundle of skills, subagents, hooks and MCP servers." },
  { term: "Marketplace", pillar: "skills", def: "A catalogue that plugins are installed from." },
  { term: "Context window", pillar: "memory", def: "The maximum amount of text a model can consider at once." },
  { term: "Compaction", pillar: "memory", def: "Summarising a long conversation to free context; details can be lost." },
  { term: "RAG", pillar: "memory", def: "Retrieval-augmented generation: fetch relevant documents and add them to the prompt." },
  { term: "Embedding", pillar: "memory", def: "A numeric representation of text used to find semantically similar content." },
  { term: "State file", pillar: "memory", def: "A document that records current status and decisions so the next session can resume." },
  { term: "Tool use", pillar: "tools", def: "The model requesting a defined action (function) with arguments; also called function calling." },
  { term: "MCP", pillar: "tools", def: "Model Context Protocol: an open standard for connecting agents to tools and data." },
  { term: "MCP server", pillar: "tools", def: "A service that exposes a system's tools and data over MCP." },
  { term: "Connector", pillar: "tools", def: "A ready-made integration (often MCP-based) enabled inside an AI app." },
  { term: "Structured output", pillar: "tools", def: "Model output constrained to a schema, e.g. JSON, so code can use it safely." },
  { term: "Human-in-the-loop", pillar: "tools", def: "A design where a person reviews or approves AI output before it takes effect." },
  { term: "Guardrail", pillar: "tools", def: "A check that blocks or corrects unsafe or invalid model behaviour." },
  { term: "Token", pillar: "cost", def: "A chunk of text (roughly ¾ of a word in English) — the unit of model input, output and billing." },
  { term: "Prompt caching", pillar: "cost", def: "Reusing a processed prompt prefix to cut cost and latency on repeat calls." },
  { term: "Model routing", pillar: "cost", def: "Sending each task to the cheapest model that does it well enough." },
  { term: "Eval", pillar: "cost", def: "A repeatable test set that scores model or agent output, used to compare prompts, models and cost." },
];
