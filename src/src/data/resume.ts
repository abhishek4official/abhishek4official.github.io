export const resumeData = {
    name: "Abhishek Kumar",
    title: "Senior Full Stack & AI Solutions Architect",
    location: "Greater Noida, UP, India",
    email: "abhishek4official@gmail.com",
    phone: "+91 8860817128",
    linkedin: "https://www.linkedin.com/in/abhishek4official/",
    summary: "Senior Full Stack & AI Solutions Architect with over 11 years of experience designing scalable cloud-native systems. Specialized in Azure Microservices, Python/FastAPI, and Enterprise AI — with deep expertise in multi-agent LLM orchestration using GPT-4, LangChain, and Microsoft Agent Framework. Built production-grade quantitative stock analysis platforms powered by autonomous AI pipelines, real-time data streaming, and advanced charting engines for Indian equity markets.",

    expertise: [
        {
            category: "Cloud & Architecture",
            skills: ["Azure Cloud", "Microservices", "Kubernetes", "Docker", "Serverless (Azure Functions)", "Service Bus", "Event-Driven Architecture"]
        },
        {
            category: "AI & LLM Systems",
            skills: ["OpenAI (GPT-4)", "Google Gemini", "LangChain", "LangGraph", "Azure AI Foundry", "Microsoft Agent Framework", "Ollama (Local LLMs)", "RAG Systems", "Multi-Agent DAG Orchestration"]
        },
        {
            category: "Quantitative & Data",
            skills: ["pandas-ta", "TradingView Lightweight Charts", "yFinance", "Technical Indicators (RSI, MACD, Bollinger Bands)", "SQL Server", "Alembic Migrations", "SSE Streaming"]
        },
        {
            category: "Backend Engineering",
            skills: [".NET Core", "C#", "Python", "FastAPI", "Kafka", "SignalR", "SQL & NoSQL"]
        },
        {
            category: "Frontend & Web",
            skills: ["React", "TypeScript", "Tailwind CSS", "Angular", "Modern UI/UX"]
        },
        {
            category: "DevOps & Leadership",
            skills: ["CI/CD (Azure DevOps)", "GitHub Actions", "Terraform", "Agile Leadership", "System Design", "Mentoring"]
        }
    ],

    experience: [
        {
            company: "Ciena",
            role: "Senior Full Stack Developer",
            period: "Feb 2022 - Present",
            type: "Remote",
            highlights: [
                "Architected cloud-native microservices on Azure using SignalR and Service Bus, enabling real-time communication.",
                "Developed LLM-powered applications using GPT-4 and LangChain, improving report generation efficiency by 40%.",
                "Led architecture reviews acting as technical lead, resulting in a 35% reduction in technical debt.",
                "Mentored a cross-functional team to deliver AI-driven systems, reducing new feature development time by 22%.",
                "Automated CI/CD pipelines using Azure DevOps for reliable releases."
            ]
        },
        {
            company: "HCL Global (Client: Ciena)",
            role: "Sr. Software Developer",
            period: "Apr 2020 - Jan 2022",
            type: "Remote",
            highlights: [
                "Embedded as a full-stack developer within Ciena's network management platform team, building and maintaining production .NET Core and React modules.",
                "Profiled and resolved performance bottlenecks across backend services and frontend rendering paths, contributing to measurable latency reductions.",
                "Collaborated directly with Ciena's in-house engineers across time zones on the network visualization and notification systems.",
                "Performance led to a direct hire offer from Ciena in February 2022."
            ]
        },
        {
            company: "Knowcross",
            role: "Senior Software Developer",
            period: "Jun 2017 - Jun 2019",
            type: "India",
            highlights: [
                "Optimized software performance and enhanced user experience through interface design.",
                "Guided junior developers on best practices and coding techniques."
            ]
        },
        {
            company: "MetaOption LLC",
            role: ".Net Developer",
            period: "Oct 2015 - Jun 2017",
            type: "Noida",
            highlights: [
                "Contributed to the development and maintenance of .NET web applications.",
                "Collaborated with the team to implement scalable software solutions."
            ]
        },
        {
            company: "Ebsavvy Infotech (Droisys Inc.)",
            role: "Software Engineer",
            period: "Nov 2014 - Oct 2015",
            type: "Noida",
            highlights: [
                "Started career in software engineering focusing on .NET technologies.",
                "Assisted in development and testing of enterprise web applications."
            ]
        }
    ],

    projects: [
        {
            title: "VajraStocks — NSE Quantitative Analysis Platform",
            description: "A local-first, open-source stock research platform for Indian equity markets. Tracks 2,365+ NSE stocks with 4 chart types, 12 built-in screener presets that respond in under 5ms, 6 quant strategy models, and a 7-agent AI pipeline that generates institutional-grade investment reports entirely on your machine — no subscriptions, no cloud dependency.",
            techStack: ["React 19", "TypeScript", "FastAPI", "Python", "SQLite", "Ollama", "TradingView Charts", "pandas-ta", "PyInstaller", "GitHub Actions", "Tailwind CSS", "Zustand"],
            outcome: "A self-hosted alternative to TradingView and Screener.in — ships as a one-click installer for Windows, Linux, and macOS. The AI analysis pipeline runs fully offline using local LLMs.",
            github: "https://github.com/abhishek4official/VajraStocks",
            releases: "https://github.com/abhishek4official/VajraStocks/releases/tag/v1.3.0",
            features: [
                "4 chart types: Candlestick, Heikin-Ashi, Renko (ATR-calibrated), Three Line Break",
                "11-parameter screener with sub-5ms response via denormalized snapshot cache",
                "7-agent AI DAG: orchestrator, SQL specialist, market regime, trade planner, backtester, quant researcher, report writer",
                "Machine Learning training (VajraML) utilizing LightGBM with 6-fold walk-forward validation",
                "Portfolio rotation engine with weakness detection, RS bottom-quartile checks, and volatility-scaled risk multiplier",
                "Real-time SSE streaming of agent execution and investment reports",
                "Incremental yFinance sync with per-ticker fallback loops and full audit trail",
                "One-click installers: Windows .exe, Linux .deb/.rpm/.AppImage, macOS .dmg"
            ]
        },
        {
            title: "LLM-Powered Dynamic Reporting System",
            description: "Replaced a static, manually-curated reporting workflow at Ciena with an LLM-powered system that generates adaptive reports from natural language queries. GPT-4 and LangChain translate business questions into structured data queries, with Azure SignalR streaming live report updates to the React frontend as they generate.",
            techStack: ["Python", "LangChain", "React", "GPT-4", "Azure SignalR"],
            outcome: "Reduced manual reporting effort by 40% and enabled non-technical stakeholders to query complex operational datasets directly in plain English — eliminating the backlog of ad-hoc data requests to the engineering team."
        },
        {
            title: "Admin Panel Modernisation — Ciena",
            description: "Migrated a legacy .NET Framework monolithic admin panel to a microservices architecture for Ciena's internal operations platform. Introduced Kafka for async event processing between services and Kubernetes on Azure for independent, zero-downtime deployments. The React frontend replaced a server-rendered MVC UI with a responsive SPA.",
            techStack: [".NET Core", "React", "Kafka", "Kubernetes", "Azure"],
            outcome: "Eliminated the monolithic deployment bottleneck — teams could release individual services independently, cutting deployment risk and reducing time-to-production for new features by 35%."
        },
        {
            title: "Fast Fiber Integration Platform — Ciena",
            description: "Built a real-time monitoring application for Ciena's network engineers to visualise live telemetry from fiber optic devices in the field. A .NET Core + SignalR backend streams device state changes as they occur to a React dashboard, with a companion WPF desktop client for field technicians who require an offline-capable native interface.",
            techStack: [".NET Core", "SignalR", "React", "WPF", "Kubernetes"],
            outcome: "Shifted network teams from polling log files to live device health monitoring — deployed on Kubernetes for continuous availability with automatic failover during high-traffic network events."
        },
        {
            title: "Notification Management Service — Ciena",
            description: "Designed and built a scalable notification service to handle asynchronous message routing across Ciena's distributed platform. Apache Kafka topics fan out events to downstream consumers with guaranteed delivery, configurable retry policies, and full replay capability for downstream service recovery scenarios.",
            techStack: ["Spring Boot", "Apache Kafka"],
            outcome: "Decoupled notification delivery from core application logic, making the platform resilient to downstream failures and enabling the notification layer to scale horizontally without impacting transactional services."
        }
    ],

    certifications: [
        "Microsoft Certified: Azure AI Fundamentals",
        "B.Tech in Information Technology (2013)"
    ]
};
