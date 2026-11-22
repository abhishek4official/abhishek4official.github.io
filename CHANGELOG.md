# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1] - 2026-11-22

### Changed
- Core Web Vitals Optimization:
  - Replaced 460 KB uncompressed `favicon.png` with an optimized 48x48 px PNG (4.4 KB), vector `favicon.svg` (< 2 KB), and `apple-touch-icon.png` (180x180 px).
  - Resampled and compressed platform screenshots, achieving > 70% total weight reduction.
  - Eliminated Cumulative Layout Shift (CLS = 0.00) by assigning explicit `width="1280"`, `height="800"`, and `aspect-[16/10]` CSS ratios to all mockup containers.
  - Added `fetchPriority="high"` and `decoding="async"` to hero LCP image, and `loading="lazy"` to all below-the-fold capability images.

## [1.2.0] - 2026-11-22

### Added
- Implemented comprehensive SEO, AEO, and GEO strategy transforming the site into an authoritative multi-hub technical publication.
- Added dedicated topical knowledge hubs:
  - `/ai-agents/`: Autonomous AI Agents, multi-agent architectures, and the deterministic 5-Phase Strict Gated Coding Pipeline (`CodingAgent`).
  - `/mcp/`: Model Context Protocol (MCP) developer guide, client-server mechanics, Python SDK implementations, and MCP vs Function Calling.
  - `/agent-frameworks/`: Production comparison of Microsoft Agent Framework (Semantic Kernel + AutoGen unification) vs LangGraph and DAGs.
  - `/local-ai/`: Local AI systems, Ollama integration, zero-cloud architectures, and the VajraStocks 7-agent DAG case study.
- Machine-readable AI Discovery: Deployed `/llms.txt` and `/llms-full.txt` per the [llmstxt.org](https://llmstxt.org) standard.
- AI Search Crawler direct policies in `robots.txt` supporting `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, and `Claude-SearchBot`.
- Dynamic, multi-route static pre-rendering in `postbuild.js` producing crawlable static HTML files for all routes on GitHub Pages.
- Universal Schema.org JSON-LD Knowledge Graph across all hubs (`Person`, `WebSite`, `TechArticle`, `SoftwareApplication`, `BreadcrumbList`).

## [1.1.0] - 2026-11-22

### Added
- Featured **Strict Agentic Coding Pipeline & Autonomous Multi-Agent Framework** ([abhishek4official/CodingAgent](https://github.com/abhishek4official/CodingAgent)) in Portfolio and Case Studies.
- Added specialized badge styling (`Autonomous Agent Platform & Flagship`) and interactive stack filters for agentic technologies (`Antigravity`, `Claude Code`, `Cursor`, `Windsurf`, `Prompt Engineering`).
- Added Autonomous Coding Agents and Multi-Agent Workflows to AI & LLM Systems expertise and Schema.org metadata.

## [1.0.0] - 2026-06-14

### Added
- Initial release of the portfolio and resume profile website.
- Featured VajraStocks NSE Quantitative Analysis Platform.
- Interactive tech stack filter and responsive portfolio sections.
