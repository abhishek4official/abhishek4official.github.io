import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const rootDir = path.resolve('..');

// ── Read built index.html to extract versioned asset tags ──────────────────
const builtHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

// Extract fingerprinted CSS <link> and JS <script> tags
const cssTag   = (builtHtml.match(/<link rel="stylesheet"[^>]*\/assets\/[^>]*>/) || [''])[0];
const jsTag    = (builtHtml.match(/<script type="module"[^>]*\/assets\/[^>]*><\/script>/) || [''])[0];
const preloads = [...builtHtml.matchAll(/<link rel="modulepreload"[^>]*>/g)].map(m => '  ' + m[0]).join('\n');

const today = new Date().toISOString().split('T')[0];

// Helper to write static HTML page
function generateStaticPage(subDir, title, description, canonicalUrl, ogImage, jsonLd, semanticBody) {
  const targetDir = path.join(distDir, subDir);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="Abhishek Kumar" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${canonicalUrl}" />

  <meta property="og:type" content="article" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:site_name" content="Abhishek Kumar — AI Systems &amp; Autonomous Agents" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="800" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${ogImage}" />

  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
${preloads}
  ${cssTag}
</head>
<body style="background:#0a0b0e;color:#cbd5e1;margin:0;font-family:Inter,sans-serif;">
  <div id="root">
    ${semanticBody}
  </div>
  ${jsTag}
</body>
</html>`;

  fs.writeFileSync(path.join(targetDir, 'index.html'), html);
  console.log(`Generated ${subDir}/index.html with pre-rendered SEO content`);
}

// ── 1. VajraStocks Page ───────────────────────────────────────────────────
const vajraJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "VajraStocks",
  "alternateName": "VajraStocks NSE Screener",
  "applicationCategory": "FinanceApplication",
  "applicationSubCategory": "Stock Screener",
  "operatingSystem": "Windows 10, Windows 11, macOS 12+, Linux",
  "description": "Free, open-source quantitative stock research platform for Indian equity markets. Screens 2,365+ NSE stocks in under 5ms with EOD data, 4 chart types, AI-powered multi-agent analysis, 6 quant strategies, portfolio risk management, and ML-based ranking — all local, no subscriptions.",
  "url": "https://abhishek4official.github.io/vajrastocks/",
  "downloadUrl": "https://github.com/abhishek4official/VajraStocks/releases",
  "softwareVersion": "1.3.0",
  "dateModified": today,
  "author": {
    "@type": "Person",
    "name": "Abhishek Kumar",
    "url": "https://abhishek4official.github.io/"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  },
  "featureList": [
    "Screen 2,365+ NSE stocks in under 5ms",
    "4 chart types: Candlestick, Heikin-Ashi, Renko (ATR-brick), Three Line Break",
    "7 autonomous AI agents powered by local Ollama LLMs",
    "6 quantitative strategies: RS MA Cross, Minervini, 52-Week, Weinstein, Cross-Sectional, Dual Momentum",
    "Portfolio risk management with Zerodha Holdings CSV import",
    "ML model training: LightGBM 6-fold walk-forward validation on 489,296 rows",
    "End-of-Day data via yFinance — updated post 3:30 PM IST",
    "Local-first — no cloud dependency, no subscriptions"
  ],
  "screenshot": "https://abhishek4official.github.io/vajrastocks_explorer.png",
  "isAccessibleForFree": true,
  "license": "https://opensource.org/licenses/MIT",
  "codeRepository": "https://github.com/abhishek4official/VajraStocks"
};

const vajraBody = `
<main style="max-width:1000px;margin:0 auto;padding:40px 20px;">
  <h1>VajraStocks — NSE Quantitative Stock Research &amp; Screening Platform</h1>
  <p>Free, local-first quantitative research and screening platform tracking 2,365+ Indian equities on the National Stock Exchange (NSE). Features sub-5ms screener queries, 4 advanced chart types, LightGBM ML models, and a 7-agent DAG running entirely on local Ollama LLMs.</p>
  <h2>Core Subsystems</h2>
  <ul>
    <li><strong>Explorer Dashboard:</strong> Candlestick, Heikin-Ashi, Renko ATR, and Three Line Break charts with automated Trade Plan calculations.</li>
    <li><strong>Sub-5ms Screener:</strong> Denormalized EOD snapshot cache scanning 2,365+ stocks across 12 preset quant scans.</li>
    <li><strong>7-Agent AI DAG:</strong> Orchestrator, SQL Specialist, Market Regime, Trade Planner, Backtester, Quant Researcher, and Report Writer running locally via Ollama.</li>
    <li><strong>Machine Learning:</strong> LightGBM walk-forward validation across 489,296 rows of NSE market history.</li>
  </ul>
</main>`;

generateStaticPage(
  'vajrastocks',
  'VajraStocks — NSE Quantitative Analysis & Screening Platform',
  'Free, open-source quantitative stock research platform for Indian equity markets. Screens 2,365+ NSE stocks in under 5ms with EOD data, 4 chart types, AI-powered multi-agent analysis, 6 quant strategies, portfolio risk management, and ML-based ranking — all local, no subscriptions.',
  'https://abhishek4official.github.io/vajrastocks/',
  'https://abhishek4official.github.io/vajrastocks_hero.png',
  vajraJsonLd,
  vajraBody
);

// ── 2. AI Agents Page ─────────────────────────────────────────────────────
const aiAgentsJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Autonomous AI Agents & Strict Multi-Agent Coding Pipeline",
  "description": "Architectural guide to designing deterministic autonomous AI agent systems governed by human-in-the-loop safety gates, automated test circuit breakers, and cross-session memory.",
  "author": {
    "@type": "Person",
    "name": "Abhishek Kumar",
    "url": "https://abhishek4official.github.io/"
  },
  "url": "https://abhishek4official.github.io/ai-agents/",
  "datePublished": "2026-11-22",
  "dateModified": today,
  "mainEntityOfPage": "https://abhishek4official.github.io/ai-agents/"
};

const aiAgentsBody = `
<main style="max-width:1000px;margin:0 auto;padding:40px 20px;">
  <h1>Deterministic AI Agents &amp; Multi-Agent Systems</h1>
  <p>An Autonomous AI Agent is a computational system powered by large language models that perceives task objectives, decomposes goals into sequential execution sub-tasks, calls external tools and APIs, observes environment feedback, and iterates towards completion without requiring step-by-step human prompts.</p>
  <h2>The 5-Phase Strict Gated Coding Pipeline</h2>
  <ol>
    <li><strong>Phase 1: Requirement Alignment &amp; Scope (GATE 1):</strong> Read-only exploration and strict technical specification. Execution stops until human approves.</li>
    <li><strong>Phase 2: Implementation Plan &amp; Documentation Strategy (GATE 2):</strong> Atomic step-by-step file plan and SemVer update target. Execution stops until human approves.</li>
    <li><strong>Phase 3: Implementation, Documentation &amp; Circuit Breaker:</strong> Implementation on a feature branch. Test circuit breaker halts automatically after 3 failures.</li>
    <li><strong>Phase 4: Diff Review &amp; Pre-Commit Approval (GATE 3):</strong> Summary of diffs and verification outputs. Execution stops until human approves.</li>
    <li><strong>Phase 5: Memory Retention &amp; Safe Git Commit:</strong> Update MEMORY.md and commit with Conventional Commits. Pushing is strictly manual.</li>
  </ol>
  <h2>Cross-Harness Parity</h2>
  <p>Native configuration parity across Google Antigravity, Claude Code, GitHub Copilot, Cursor, and Windsurf.</p>
</main>`;

generateStaticPage(
  'ai-agents',
  'Autonomous AI Agents & Multi-Agent Architecture — Abhishek Kumar',
  'Architectural guide to designing deterministic autonomous AI agent systems governed by human-in-the-loop safety gates, automated test circuit breakers, and cross-session memory.',
  'https://abhishek4official.github.io/ai-agents/',
  'https://abhishek4official.github.io/vajrastocks_explorer.png',
  aiAgentsJsonLd,
  aiAgentsBody
);

// ── 3. MCP Page ───────────────────────────────────────────────────────────
const mcpJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Model Context Protocol (MCP) Developer Guide: Architecture & Python Servers",
  "description": "Comprehensive developer guide to Anthropic Model Context Protocol (MCP), covering client-server mechanics, Python SDK implementations, and MCP vs Function Calling.",
  "author": {
    "@type": "Person",
    "name": "Abhishek Kumar",
    "url": "https://abhishek4official.github.io/"
  },
  "url": "https://abhishek4official.github.io/mcp/",
  "datePublished": "2026-11-22",
  "dateModified": today,
  "mainEntityOfPage": "https://abhishek4official.github.io/mcp/"
};

const mcpBody = `
<main style="max-width:1000px;margin:0 auto;padding:40px 20px;">
  <h1>Model Context Protocol (MCP) Developer Guide</h1>
  <p>The Model Context Protocol (MCP) is an open standard created by Anthropic that standardizes how artificial intelligence applications (clients) discover, authenticate, and interact with external data sources, prompts, and executable tools (servers).</p>
  <h2>Core Primitives</h2>
  <ul>
    <li><strong>Tools:</strong> Executable functions with JSON-Schema parameter definitions.</li>
    <li><strong>Resources:</strong> Read-only data payloads similar to files or database rows for LLM context ingestion.</li>
    <li><strong>Prompts:</strong> Pre-packaged prompt workflows and instructions.</li>
  </ul>
  <h2>MCP vs Traditional Function Calling</h2>
  <p>Unlike proprietary function calling schemas tied to a single model provider, MCP provides a decoupled client-server architecture: build an MCP server once and consume it across Claude Desktop, Cursor, Antigravity, and custom agent runtimes.</p>
</main>`;

generateStaticPage(
  'mcp',
  'Model Context Protocol (MCP) Developer Guide — Abhishek Kumar',
  'Comprehensive developer guide to Anthropic Model Context Protocol (MCP), covering client-server mechanics, Python SDK implementations, and MCP vs Function Calling.',
  'https://abhishek4official.github.io/mcp/',
  'https://abhishek4official.github.io/vajrastocks_explorer.png',
  mcpJsonLd,
  mcpBody
);

// ── 4. Agent Frameworks Page ──────────────────────────────────────────────
const frameworksJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Microsoft Agent Framework vs LangGraph: Production Architecture Evaluation",
  "description": "An architectural evaluation of enterprise multi-agent frameworks comparing Microsoft Agent Framework (Semantic Kernel + AutoGen) against LangGraph and native DAG orchestrators.",
  "author": {
    "@type": "Person",
    "name": "Abhishek Kumar",
    "url": "https://abhishek4official.github.io/"
  },
  "url": "https://abhishek4official.github.io/agent-frameworks/",
  "datePublished": "2026-11-22",
  "dateModified": today,
  "mainEntityOfPage": "https://abhishek4official.github.io/agent-frameworks/"
};

const frameworksBody = `
<main style="max-width:1000px;margin:0 auto;padding:40px 20px;">
  <h1>Microsoft Agent Framework vs LangGraph Architecture Comparison</h1>
  <p>The Microsoft Agent Framework unifies Semantic Kernel enterprise controls and telemetry with AutoGen multi-agent conversational patterns. LangGraph provides cyclic graph state machines, while native Directed Acyclic Graphs (DAGs) deliver ultra-low latency local execution.</p>
  <h2>Evaluation Matrix</h2>
  <ul>
    <li><strong>Microsoft Agent Framework:</strong> First-class C# and Python, native Azure AI Foundry integration, thread-based session management, and built-in MCP support.</li>
    <li><strong>LangGraph:</strong> Cyclic state graphs, time-travel debugging, and flexible human-in-the-loop checkpoints.</li>
    <li><strong>Native DAG:</strong> Deterministic execution times without framework overhead, ideal for local-first quant and data tools.</li>
  </ul>
</main>`;

generateStaticPage(
  'agent-frameworks',
  'Microsoft Agent Framework vs LangGraph — Architecture Comparison — Abhishek Kumar',
  'An architectural evaluation of enterprise multi-agent frameworks comparing Microsoft Agent Framework (Semantic Kernel + AutoGen) against LangGraph and native DAG orchestrators.',
  'https://abhishek4official.github.io/agent-frameworks/',
  'https://abhishek4official.github.io/vajrastocks_explorer.png',
  frameworksJsonLd,
  frameworksBody
);

// ── 5. Local AI Page ──────────────────────────────────────────────────────
const localAiJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Local AI & Private Multi-Agent Architectures with Ollama",
  "description": "Guide to running high-performance multi-agent systems entirely on consumer hardware using Ollama, SQLite, and local LLMs without cloud subscriptions or data leakage.",
  "author": {
    "@type": "Person",
    "name": "Abhishek Kumar",
    "url": "https://abhishek4official.github.io/"
  },
  "url": "https://abhishek4official.github.io/local-ai/",
  "datePublished": "2026-11-22",
  "dateModified": today,
  "mainEntityOfPage": "https://abhishek4official.github.io/local-ai/"
};

const localAiBody = `
<main style="max-width:1000px;margin:0 auto;padding:40px 20px;">
  <h1>Local AI &amp; Private Multi-Agent Architectures</h1>
  <p>Running high-performance multi-agent systems entirely on consumer hardware using Ollama, SQLite, and local LLMs — eliminating cloud subscriptions, external API latency, and data leakage.</p>
  <h2>Case Study: VajraStocks 7-Agent DAG</h2>
  <p>VajraStocks executes a 7-agent DAG across 2,365+ NSE stocks using local Ollama models for SQL ingestion, market regime classification, trade planning, backtesting, quant research, and report generation.</p>
</main>`;

generateStaticPage(
  'local-ai',
  'Local AI & Offline Multi-Agent Systems — Abhishek Kumar',
  'Guide to running high-performance multi-agent systems entirely on consumer hardware using Ollama, SQLite, and local LLMs without cloud subscriptions or data leakage.',
  'https://abhishek4official.github.io/local-ai/',
  'https://abhishek4official.github.io/vajrastocks_hero.png',
  localAiJsonLd,
  localAiBody
);

// ── 6. Generate robots.txt ────────────────────────────────────────────────
const robotsTxt = `User-agent: *
Allow: /

# AI Search Discovery & Retrieval Crawlers (Allowed)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

Sitemap: https://abhishek4official.github.io/sitemap.xml
`;

fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt);
console.log('Generated robots.txt with AI search crawler directives');

// ── 7. Generate sitemap.xml ───────────────────────────────────────────────
const routes = [
  { url: 'https://abhishek4official.github.io/', priority: '1.0', changefreq: 'weekly' },
  { url: 'https://abhishek4official.github.io/ai-agents/', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://abhishek4official.github.io/mcp/', priority: '0.9', changefreq: 'weekly' },
  { url: 'https://abhishek4official.github.io/agent-frameworks/', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://abhishek4official.github.io/local-ai/', priority: '0.8', changefreq: 'monthly' },
  { url: 'https://abhishek4official.github.io/vajrastocks/', priority: '0.9', changefreq: 'monthly' }
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${r.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
console.log('Generated sitemap.xml with 6 routes and dynamic lastmod');

// ── Helper: recursive copy ─────────────────────────────────────────────────
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    entry.isDirectory() ? copyDirSync(s, d) : fs.copyFileSync(s, d);
  }
}

function deleteDirSync(dirPath) {
  if (fs.existsSync(dirPath)) fs.rmSync(dirPath, { recursive: true, force: true });
}

// ── 8. Clean old directories and copy dist to root ─────────────────────────
console.log('Cleaning old root directories...');
deleteDirSync(path.join(rootDir, 'assets'));
deleteDirSync(path.join(rootDir, 'vajrastocks'));
deleteDirSync(path.join(rootDir, 'ai-agents'));
deleteDirSync(path.join(rootDir, 'mcp'));
deleteDirSync(path.join(rootDir, 'agent-frameworks'));
deleteDirSync(path.join(rootDir, 'local-ai'));

console.log('Copying build files from dist to root directory...');
for (const entry of fs.readdirSync(distDir, { withFileTypes: true })) {
  if (entry.name === 'src') continue;
  const s = path.join(distDir, entry.name);
  const d = path.join(rootDir, entry.name);
  entry.isDirectory() ? copyDirSync(s, d) : fs.copyFileSync(s, d);
}

console.log('Deployment build successfully mirrored to repository root!');
