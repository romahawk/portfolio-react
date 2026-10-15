// /ai "How I implement AI": single source of truth for the page copy.
// Edit content here; the page, project matrix and glossary are generated from it.
// Status values for project applications: "In use" | "In build" | "Pre-beta". Only list work that exists today.
// Verdict values for tools: "Use" | "Try" | "Skip". Three tools per pillar.
// Fixed decisions (A1 to A8): Rolevoice has no user, PR or check counts. The personal agent operating
// system is described, never named or linked, with no agent counts or tool names. Magic Kick gets at
// most one unlinked line in the field notes.

export const kbMeta = {
  title: "How I implement AI",
  updated: "Oct 2026",
};

export const kbHero = {
  eyebrow: "AI in practice · Updated Oct 2026",
  title: "How I implement AI",
  subtitle:
    "I run AI work the way I run regulated rollouts. One source of truth, clear approvals, and nothing ships without a check.",
  workLink: { label: "See my implementation work", href: "/#work" },
};

export const kbPrinciples = {
  kicker: "01 · How I work",
  title: "Three rules, carried over from hospital go-lives and GDP logistics",
  items: [
    { lead: "One source of truth.", text: "Every AI tool reads the same current context. No re-explaining, no drift." },
    { lead: "A human approves anything irreversible.", text: "AI drafts and proposes. I decide what gets written, sent or shipped." },
    {
      lead: "Checks, not trust.",
      text: "Lint, build, tests and schema checks run before a task counts as done. A pilot runs against a baseline before anyone calls it a win.",
    },
  ],
  // Diagram nodes, left to right. "accent" fills the node, "outline" outlines it; the last node loops back to the second.
  diagram: [
    { label: "I write" },
    { label: "One source of truth", tone: "accent" },
    { label: "AI tools read it" },
    { label: "Proposals" },
    { label: "I approve", tone: "outline" },
  ],
  caption: "I write. One file feeds every AI tool. Agents only propose. I approve.",
};

export const kbProof = {
  kicker: "02 · Proof",
  title: "Two systems I run this way",
  cards: [
    {
      title: "Rolevoice",
      status: "Deployed, pre-pilot",
      what: "AI-assisted foreign-language assessment for professionals. First pilot: German. My M.Sc. Computer Science capstone, due Dec 2026.",
      bullets: [
        "Built with an AI coding agent in small, reviewed pull requests. I merge every change.",
        "Structured AI output is checked against a schema before anyone sees it.",
        "Access rules were written and tested before the features.",
      ],
      footer: "No users yet. Results will be published after the pilot, not before.",
    },
    {
      title: "My personal agent operating system",
      status: "Running daily",
      what: "The system my own work runs on: one private, versioned repository that every AI tool I use reads first.",
      bullets: [
        "Goals, decisions, projects and routines live in one Markdown repo under version control.",
        "The context every tool reads is rebuilt on each commit by an automated check.",
        "Agents are read-only. They drop proposals into an inbox, and I approve every write and every outbound action.",
      ],
      footer: "Private repository. Described here, not linked.",
    },
  ],
};

export const kbNotes = {
  kicker: "03 · Field notes",
  title: "My working notes",
  intro: "The practices and tools behind the systems above. Written for builders. Open a row if you want the detail.",
  termsTitle: "Terms",
  practicesTitle: "Best practices",
  pitfallsTitle: "Pitfalls",
  projectsTitle: "In my projects",
  toolsTitle: "Tools: use, try, skip",
  matrixTitle: "Which pillar does what, per project",
  matrixProjectColumn: "Project",
  matrixEmpty: "n/a",
  matrixEmptyLabel: "Not applicable",
};

export const kbGlossaryCopy = {
  title: (count) => `Glossary: ${count} terms in one line`,
  searchLabel: "Search terms",
  countLabel: (count) => `${count} terms`,
  showAll: (count) => `Show all ${count} terms`,
  // Terms past this many are hidden="until-found" until searched, found in page or shown.
  previewCount: 8,
};

export const kbMaintenance = {
  title: "How this guide is maintained",
  text:
    "Status labels are literal: In use runs today, In build is being built, Pre-beta runs in a product that is not released yet. Plans are not listed until they are built. Tool verdicts reflect a solo builder working across a few repos. Your context may differ.",
};

export const kbClosing = {
  title: "Hiring a Technical Project Manager / Implementation Lead who already works with AI every day?",
};

// Sticky chip strip. Ids are the section ids on the page.
export const kbSectionNav = {
  label: "On this page",
  items: [
    { id: "principles", label: "How I work" },
    { id: "proof", label: "Proof" },
    { id: "notes", label: "Field notes" },
    { id: "glossary", label: "Glossary" },
    { id: "contact", label: "Contact" },
  ],
};

// status: the project's own state, shown on the mobile project cards.
export const kbProjects = [
  { id: "rolevoice", name: "Rolevoice", status: "Deployed, pre-pilot", note: "M.Sc. capstone, first pilot: German" },
  // matrix: false keeps Magic Kick to its single field-notes line (A3).
  { id: "magic-kick", name: "Magic Kick", status: "In use", note: "Private-use planner", matrix: false },
  { id: "alpharhythm", name: "AlphaRhythm", status: "Pre-beta", note: "Trading rule-compliance micro-SaaS" },
  { id: "proof-engine", name: "Proof Engine", status: "In build", note: "90-day plan tracker where tasks close only with evidence" },
  { id: "agent-os", name: "My personal agent operating system", status: "In use", note: "Markdown + Git strategic OS that agents read first" },
  { id: "portfolio", name: "mazuryk.dev", status: "In use", note: "This site" },
];

export const kbPillars = [
  {
    id: "harness",
    principle: "Plan first, build in small reviewable steps, verify before done.",
    number: "01",
    title: "Harness",
    definition:
      "A harness is everything wrapped around the model that turns it into an agent: the loop that calls the model, the system prompt, the tools it may use, the permissions, and the rules for planning, checking and stopping. Claude Code is a harness. The same model behaves very differently inside a good or a bad one.",
    parts: [
      { term: "Agent loop", text: "Model thinks → calls a tool → reads the result → repeats until the task is done or it hands back control." },
      { term: "Project instructions", text: "CLAUDE.md: the standing brief the agent reads at the start of every session." },
      { term: "Plan mode", text: "The agent proposes a plan and waits for approval before touching files." },
      { term: "Hooks", text: "Deterministic scripts that fire on events (before a tool call, after an edit, on stop). Rules that must always hold belong here, not in prose." },
      { term: "Subagents", text: "Separate agents with their own context for a bounded job (search, review), so the main session stays clean." },
      { term: "Permissions", text: "What the agent may do without asking: read, edit, run commands, reach the network." },
    ],
    practices: [
      "Pick one harness methodology and commit to it. Stacked harness packs give the model conflicting rules.",
      "Keep CLAUDE.md short and specific: commands, conventions, what not to touch. Point to docs instead of pasting them.",
      "Plan first, then build in small, reviewable steps: one issue, one branch, one session.",
      "Close the loop with verification: lint, build and tests the agent must run before it calls a task done.",
      "Enforce hard rules with hooks or CI, not with capital letters in a prompt.",
    ],
    pitfalls: [
      "Installing every popular pack at once: context fills with instructions before any work starts.",
      "Letting the agent mark its own work as done without a check it cannot fake.",
      "Unattended runs without a stop condition or a budget.",
    ],
    projects: [
      { project: "portfolio", status: "In use", text: "CLAUDE.md defines the orient → branch → lint → build → PR loop, a freeze list and architecture rules the agent must not break." },
      { project: "agent-os", status: "In use", text: "An entry file defines the protocol every agent follows before it touches a project." },
      { project: "magic-kick", status: "In use", text: "An issue-to-PR workflow: every change starts as a GitHub issue and lands as a pull request." },
      { project: "rolevoice", status: "In use", text: "Sessions start from docs/STATE.md and decisions.md; work ships as small, bounded issues." },
    ],
    tools: [
      { name: "Claude Code", href: "https://docs.claude.com/en/docs/claude-code/overview", verdict: "Use", note: "Primary harness." },
      { name: "learn-claude-code", href: "https://github.com/shareAI-lab/learn-claude-code", verdict: "Try", note: "Read it to understand how an agent loop is built." },
      { name: "andrej-karpathy-skills", href: "https://github.com/forrestchang/andrej-karpathy-skills", verdict: "Try", note: "Borrow principles into your own CLAUDE.md." },
    ],
  },
  {
    id: "skills",
    principle: "Turn a workflow into a skill after doing it by hand three times.",
    number: "02",
    title: "Skills",
    definition:
      "A skill is a packaged procedure: a folder with a SKILL.md (instructions) plus optional scripts, templates and references. Only its name and description sit in context until a task matches. Then the full instructions load. Skills turn a workflow you explained once into one the agent runs the same way every time.",
    parts: [
      { term: "SKILL.md", text: "Frontmatter (name, description) and step-by-step instructions." },
      { term: "Description", text: "The trigger. It decides when the skill fires, so it must name the situations, not just the topic." },
      { term: "Progressive disclosure", text: "Metadata first, full body on demand, bundled files only when needed. Cheap to keep many installed." },
      { term: "Plugin", text: "A bundle of skills, subagents, hooks and MCP servers installed together from a marketplace." },
    ],
    practices: [
      "Turn a workflow into a skill after you have done it by hand three times, not before.",
      "Write the description as trigger phrases: when to use it, and when not to.",
      "Keep one job per skill. Put long reference material in separate files the skill reads on demand.",
      "Put deterministic steps in scripts; keep judgement in the instructions.",
      "Test a skill against real inputs before trusting it.",
    ],
    pitfalls: [
      "Vague descriptions: the skill never fires, or fires on everything.",
      "Installing skill packs you have not read. Skills can run code on your machine.",
      "Two skills that cover the same job with different rules.",
    ],
    projects: [
      { project: "rolevoice", status: "In use", text: "A sync skill orients each strategy session from the repo's STATE and decision log, and flags what needs a ruling." },
      { project: "alpharhythm", status: "Pre-beta", text: "A sync skill reads NEXT_SESSION_START and the decisions log before any work begins." },
      { project: "agent-os", status: "In use", text: "Custom skills, packaged once and reused: recruiter research, VC-style pitch review, a German tutor." },
    ],
    tools: [
      { name: "anthropics/skills", href: "https://github.com/anthropics/skills", verdict: "Use", note: "Reference for structure; skill-creator for building and testing." },
      { name: "claude-plugins-official", href: "https://github.com/anthropics/claude-plugins-official", verdict: "Use", note: "Official plugin directory. Browse before building." },
      { name: "awesome-claude-skills", href: "https://github.com/ComposioHQ/awesome-claude-skills", verdict: "Skip", note: "Bookmark as a directory; do not bulk-install." },
    ],
  },
  {
    id: "memory",
    principle: "One source of truth per fact.",
    number: "03",
    title: "Memory",
    definition:
      "A model forgets everything when a session ends. Memory is how context carries over: what is loaded every time (project instructions), what is written down as state (plans, decisions), what is retrieved on demand (search, code indexes), and what the context window holds right now.",
    parts: [
      { term: "Context window", text: "Working memory for one session. Everything the model sees competes for it: prompt, files, tool output." },
      { term: "Instruction memory", text: "CLAUDE.md and similar files, loaded automatically at session start." },
      { term: "State files", text: "STATE.md, decision logs, next-session notes: the handover between sessions, written for the next agent." },
      { term: "Retrieval", text: "Search, embeddings (RAG) or code graphs that fetch only the relevant slice when needed." },
      { term: "Compaction", text: "Summarising a long session to free the window. Lossy: important decisions belong in files, not in chat." },
    ],
    practices: [
      "One source of truth per fact. Two memory systems for the same thing will drift.",
      "Write decisions and the reasons behind them, not transcripts.",
      "End every session with a parking note: exactly where the next one starts.",
      "Keep files in Git so memory has history and review, like code.",
      "Start a fresh session for a new task instead of dragging old context along.",
    ],
    pitfalls: [
      "Trusting a long chat as memory: it gets compacted, or it ends.",
      "Adding a memory plugin on top of an existing state-file system.",
      "Storing personal or regulated data in memory tools that leave your control.",
    ],
    projects: [
      { project: "agent-os", status: "In use", text: "The strategic memory layer: goals, current focus, decision rules and a decision log in Markdown + Git." },
      { project: "rolevoice", status: "In use", text: "docs/STATE.md and decisions.md are the handover between strategy and build sessions." },
      { project: "alpharhythm", status: "Pre-beta", text: "NEXT_SESSION_START.md and DECISIONS_LOG.md make every session resumable in one read." },
      { project: "proof-engine", status: "In build", text: "The 90-day plan lives as Markdown in my personal agent operating system; the app generates its data from it, so there is one source and two views." },
    ],
    tools: [
      { name: "CLAUDE.md", href: "https://docs.claude.com/en/docs/claude-code/memory", verdict: "Use", note: "Built in. Keep it lean." },
      { name: "repomix", href: "https://github.com/yamadashy/repomix", verdict: "Try", note: "Pack a repo into one file for a chat-based strategy session." },
      { name: "claude-mem", href: "https://github.com/thedotmack/claude-mem", verdict: "Skip", note: "Would compete with existing state files as a second source of truth." },
    ],
  },
  {
    id: "tools",
    principle: "Least privilege. A human at the boundary for anything irreversible.",
    number: "04",
    title: "Tools",
    definition:
      "Tools are the actions an agent can take beyond writing text: read files, run commands, search the web, call an API, drive a browser. MCP (Model Context Protocol) is the open standard for plugging external systems in as tools, so one integration works across agents.",
    parts: [
      { term: "Tool call", text: "The model asks to run a named action with arguments; the harness executes it and returns the result." },
      { term: "MCP server", text: "A small service that exposes tools (and data) from a system, such as GitHub, a browser or a database, to any MCP client." },
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
      "Sending personal data through third-party hosted tools.",
      "Scraping sites whose terms forbid it.",
    ],
    projects: [
      { project: "rolevoice", status: "In build", text: "Claude via the Vercel AI SDK returns structured assessments checked against a schema." },
    ],
    tools: [
      { name: "playwright-mcp", href: "https://github.com/microsoft/playwright-mcp", verdict: "Use", note: "Lets the agent test in a real browser." },
      { name: "gh CLI / github-mcp", href: "https://github.com/github/github-mcp-server", verdict: "Use", note: "Issue-driven work. The CLI is often enough." },
      { name: "awesome-mcp-servers", href: "https://github.com/punkpeye/awesome-mcp-servers", verdict: "Skip", note: "Directory to search, not to install." },
    ],
  },
  {
    id: "cost",
    principle: "A budget and a stop condition for every unattended run.",
    number: "05",
    title: "Cost",
    definition:
      "Every agent action is paid in tokens: input (everything in context) and output (what the model writes). Cost is driven less by the question than by what the harness loads: instructions, tool definitions, file reads and long histories. On a subscription the same drivers show up as usage limits.",
    parts: [
      { term: "Tokens", text: "The unit of text the model reads and writes. Context is re-read on every turn." },
      { term: "Model choice", text: "Smaller models for routine or high-volume steps; the strongest model for planning and hard reasoning." },
      { term: "Prompt caching", text: "Reusing an unchanged prompt prefix so repeated context is cheaper and faster." },
      { term: "Context hygiene", text: "Clearing or compacting between tasks; delegating noisy searches to subagents." },
    ],
    practices: [
      "Measure before optimising: watch context usage live, then fix the biggest consumer.",
      "One task per session. Clear context between unrelated tasks.",
      "Route by difficulty: do not pay top-model prices for formatting or extraction.",
      "Keep stable content (instructions, schemas) at the front so caching works.",
      "Cap unattended runs with a budget and a stop condition.",
    ],
    pitfalls: [
      "Dozens of MCP tools loaded in every session whether used or not.",
      "Re-pasting whole repos when a targeted read would do.",
      "Cutting tokens by making output unreadable: cheaper, but slower to review.",
    ],
    projects: [
      { project: "agent-os", status: "In use", text: "A written usage discipline: one task per session, lean instruction files, periodic usage audits." },
    ],
    tools: [
      { name: "claude-hud", href: "https://github.com/jarrodwatts/claude-hud", verdict: "Use", note: "Shows context, tools and agents live in the status line." },
      { name: "claude-code-best-practice", href: "https://github.com/shanraisshan/claude-code-best-practice", verdict: "Try", note: "Reading material, not an install." },
      { name: "system-prompts-and-models-of-ai-tools", href: "https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools", verdict: "Try", note: "Study how production agents are prompted." },
    ],
  },
];

export const kbGlossary = [
  { term: "Agent", pillar: "harness", def: "A model running in a loop with tools, deciding its own next step until a goal is met." },
  { term: "Agent loop", pillar: "harness", def: "The cycle of think → act (tool call) → observe result → repeat." },
  { term: "Harness", pillar: "harness", def: "The software around a model that makes it an agent: loop, prompt, tools, permissions, rules." },
  { term: "System prompt", pillar: "harness", def: "Standing instructions the harness gives the model before any user input." },
  { term: "CLAUDE.md", pillar: "memory", def: "A project instruction file an agent loads at session start." },
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
  { term: "Token", pillar: "cost", def: "A chunk of text, roughly ¾ of a word in English. The unit of model input, output and billing." },
  { term: "Prompt caching", pillar: "cost", def: "Reusing a processed prompt prefix to cut cost and latency on repeat calls." },
  { term: "Model routing", pillar: "cost", def: "Sending each task to the cheapest model that does it well enough." },
  { term: "Eval", pillar: "cost", def: "A repeatable test set that scores model or agent output, used to compare prompts, models and cost." },
];
