// Consistency guard, run as `prebuild`. Fails the build when retired identity labels,
// wrong numbers, the old email address or em dashes creep back into the site.
//
// Why these are banned:
// - Identity is "Technical Project Manager, system implementation in regulated environments" (CV headline).
//   Older role labels contradict the CV that recruiters download.
// - Years are 12+ (implementation) and 20+ (industry), as in the CV. "10+" and "13+" were earlier drafts.
// - Contact email is romazuryk@gmail.com, as in the CV. The proton.me address is retired.
// - No em dashes in site copy (src/content/site.js).
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";

const BANNED_PHRASES = [
  "AI Workflow Systems Consultant",
  "AI Implementation Specialist",
  "AI Systems Consultant",
  "Applied AI Builder",
  "Technical Product Manager",
  "10+ years",
  "13+ years",
  "proton.me",
];

const EM_DASH_FILES = ["src/content/site.js"];
const EM_DASH = "—";

const SCAN_FILES = ["index.html", "services/index.html", "kb/index.html"];
const SCAN_DIRS = ["src"];
const EXTENSIONS = /\.(js|jsx|mjs|css|html|json)$/;

// Retired pages and their data, no longer imported by the app (two-page site, Oct 2026).
// They are deleted in PR 2 (chore/remove-retired-pages); empty this list when they are gone.
const PENDING_DELETION = new Set([
  "src/components/AIAugmentedSDLC.jsx",
  "src/components/AIWorkflowDetailPage.jsx",
  "src/components/AIWorkflowLibrary.jsx",
  "src/components/AIWorkflowPreview.jsx",
  "src/components/About.jsx",
  "src/components/AboutPage.jsx",
  "src/components/CaseStudyLinks.jsx",
  "src/components/CaseStudyModal.jsx",
  "src/components/Certifications.jsx",
  "src/components/ClinicalEvidenceWorkflowPage.jsx",
  "src/components/Contact.jsx",
  "src/components/ContactPage.jsx",
  "src/components/Hero.jsx",
  "src/components/HiringTeams.jsx",
  "src/components/HomeServices.jsx",
  "src/components/JourneyFull.jsx",
  "src/components/LanguageSwitcher.jsx",
  "src/components/MarketPages.jsx",
  "src/components/Milestones.jsx",
  "src/components/OperatorAdvantage.jsx",
  "src/components/Projects.jsx",
  "src/components/ProofOfWorkPage.jsx",
  "src/components/Results.jsx",
  "src/components/ServicesPage.jsx",
  "src/components/Skills.jsx",
  "src/components/Timeline.jsx",
  "src/components/TimelineSwitch.jsx",
  "src/components/case-studies/AlphorythmCaseStudy.jsx",
  "src/components/case-studies/ClinicalEvidenceCaseStudy.jsx",
  "src/components/case-studies/FlowLogixCaseStudy.jsx",
  "src/components/case-studies/JobSprintCaseStudy.jsx",
  "src/components/case-studies/LivesurgeryCaseStudy.jsx",
  "src/components/case-studies/MedintegroCaseStudy.jsx",
  "src/components/case-studies/PortfolioCaseStudy.jsx",
  "src/components/case-studies/SmartShooterCaseStudy.jsx",
  "src/components/case-studies/VendorFreeSupplyCaseStudy.jsx",
  "src/components/common/HeroVisual.jsx",
  "src/context/LangContext.jsx",
  "src/data/aiWorkflows.js",
  "src/data/journey.js",
  "src/data/milestones.js",
  "src/data/projects.js",
  "src/data/skillsCards.js",
  "src/data/timeline.js",
  "src/locales/de.js",
  "src/locales/germanCopy.js",
]);

const root = process.cwd();
const toPosix = (p) => p.split(sep).join("/");

function walk(dir, out) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTENSIONS.test(name)) out.push(toPosix(relative(root, full)));
  }
  return out;
}

const files = [
  ...SCAN_FILES.filter((f) => existsSync(join(root, f))),
  ...SCAN_DIRS.flatMap((d) => walk(join(root, d), [])),
].filter((f) => !PENDING_DELETION.has(f));

const problems = [];
const lowerPhrases = BANNED_PHRASES.map((p) => p.toLowerCase());

for (const file of files) {
  const lines = readFileSync(join(root, file), "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    const lower = line.toLowerCase();
    lowerPhrases.forEach((phrase, j) => {
      if (lower.includes(phrase)) problems.push(`${file}:${i + 1}  banned "${BANNED_PHRASES[j]}"`);
    });
    if (EM_DASH_FILES.includes(file) && line.includes(EM_DASH)) {
      problems.push(`${file}:${i + 1}  em dash`);
    }
  });
}

if (problems.length) {
  console.error(`check-consistency: ${problems.length} problem(s)\n` + problems.map((p) => `  ${p}`).join("\n"));
  process.exit(1);
}
console.log(`check-consistency: ${files.length} files clean`);
