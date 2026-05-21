import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink,
  Briefcase, GraduationCap, Sparkles, Bot, BarChart3, Brain, Lightbulb,
  ArrowUpRight, Menu, X, ChevronLeft, ChevronRight, ArrowUp,
} from "lucide-react";
import profilePhoto from "@/assets/ankita-profile.jpg";
import thumbEbt from "@/assets/projects/ebt.jpg";
import thumbFinclarity from "@/assets/projects/finclarity.jpg";
import thumbOnset from "@/assets/projects/onset.jpg";
import thumbBlinkit from "@/assets/projects/blinkit.jpg";
import thumbUberSafe from "@/assets/projects/ubersafe.jpg";
import thumbLighting from "@/assets/projects/lighting.jpg";
import thumbWander from "@/assets/projects/wander.jpg";
import thumbFiScorecard from "@/assets/projects/fi-scorecard.jpg";
import thumbLumiere from "@/assets/projects/lumiere.jpg";
import thumbTravelAgent from "@/assets/projects/travel-agent.jpg";
import thumbSssAgent from "@/assets/projects/sss-agent.jpg";
import thumbPbiFi from "@/assets/projects/pbi-fi-scorecard.png";
import thumbPbiCarInfo from "@/assets/projects/pbi-carinfo.png";
import thumbPbiBankMarketing from "@/assets/projects/pbi-bank-marketing.png";
import thumbPbiBankChurn from "@/assets/projects/pbi-bank-churn.png";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

type Project = {
  title: string;
  description: string;
  tech?: string;
  thumbnail?: string;
  links: { label: string; href: string }[];
};

const PROJECT_GROUPS: { id: string; title: string; icon: React.ComponentType<{ className?: string }>; items: Project[] }[] = [
  {
    id: "ai-apps",
    title: "Apps Created Through AI",
    icon: Sparkles,
    items: [
      {
        title: "Digital PL External Balance Transfer Journey",
        description: "A working prototype D2C Digital journey of Personal Loan External Balance Transfer. External balance transfer is a process of transferring existing Financier's loan to other Financier to get lower interest rate, extra funds, varying tenure etc. This prototype was created to conduct usability testing of the front end look and feel of the App before finalizing the journey in the Axis Bank platform.",
        tech: "Lovable · Figma",
        thumbnail: thumbEbt,
        links: [
          { label: "Live App", href: "https://ebt-aa.lovable.app" },
        ],
      },
      {
        title: "FinClarity — Smart Finance Tracker",
        description: "AI-powered personal finance app offering expense tracking, budgeting, and actionable financial insights in one clean dashboard.",
        tech: "Lovable · React · Supabase",
        thumbnail: thumbFinclarity,
        links: [
          { label: "Live App", href: "https://fin-clarity-smart.lovable.app" },
          { label: "Deck", href: "https://1drv.ms/p/c/66052eb9d4e727fc/IQBdevdy_oTKRJW1UdV75Ad8AdZQ-_iQa7LJCukgMlqW9ik?e=7efetJ" },
        ],
      },
      {
        title: "Investment Fund Selector for Beginners",
        description: "Interactive platform helping first-time investors through smart personalization and curated portfolio guidance.",
        tech: "Claude (Anthropic) · React · HTML/CSS",
        thumbnail: thumbOnset,
        links: [
          { label: "Live App", href: "https://claude.ai/public/artifacts/1597c430-efb5-4ea5-90b7-6342d89c0f94" },
          { label: "Deck", href: "https://drive.google.com/file/d/1ynLe1lZyyFlmFxi1pz6xZxsRBI6Y7WV5/view?usp=sharing" },
        ],
      },
      {
        title: "Improvised Blinkit UX Prototype",
        description: "Mobile prototype redesigning Blinkit to increase AOV and customer base through better discovery and UX.",
        tech: "Claude (Anthropic) · React · HTML/CSS",
        thumbnail: thumbBlinkit,
        links: [
          { label: "Live App", href: "https://claude.ai/public/artifacts/234d15b7-74fe-4d30-9d6c-3ba85d9b80d1" },
          { label: "Deck", href: "https://1drv.ms/p/c/66052eb9d4e727fc/IQBigz7UYO_ySaT4TYjpZ6BBAR-ONSxxger7UG0Nrmfj6g0?e=XnQOm5" },
        ],
      },
      {
        title: "Uber Safe — Ride Safety App",
        description: "Prototype giving Uber a safety-first ride experience that integrates preventive, real-time, and post-ride safety mechanisms.",
        tech: "Claude (Anthropic) · React · HTML/CSS",
        thumbnail: thumbUberSafe,
        links: [
          { label: "Live App", href: "https://claude.ai/public/artifacts/fce67220-e0b9-4143-b4dd-765cb43f267b" },
          { label: "PRD", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQBE-sGUTqmKSY34fUnQTg_VAR6wPcQ7-CRvgj_Cg4qCEOw?e=b2Qo1E" },
        ],
      },
      {
        title: "Lighting Defect Register",
        description: "Field-ready app for logging, tracking, and managing lighting defects across locations — streamlining on-site quality reporting.",
        tech: "Lovable · React · Supabase",
        thumbnail: thumbLighting,
        links: [{ label: "Live App", href: "https://lightingdefectregister.lovable.app/" }],
      },
      {
        title: "Wander — AI Travel Discovery",
        description: "AI travel app surfacing personalized destination recommendations and trip ideas through an elegant, conversational interface.",
        tech: "Antigravity · HTML/CSS/JS",
        thumbnail: thumbWander,
        links: [
          { label: "Live App", href: "/wander/index.html" },
          { label: "Deck", href: "https://1drv.ms/p/c/66052eb9d4e727fc/IQDR_SEBCg52TrmLmBvGX4fhAQEg8syiwuHXnMuV1E3BWPk?e=ncUlU4" },
        ],
      },
      {
        title: "FI Scorecard App",
        description: "Interactive web app visualizing financial inclusion scheme performance and FI Index metrics in a clean, browser-based interface.",
        tech: "Lovable · React · MS Excel",
        thumbnail: thumbFiScorecard,
        links: [{ label: "Dashboard", href: "https://fiscorecard.lovable.app" }],
      },
      {
        title: "Lumière Beauty — E-commerce with n8n",
        description: "Luxury D2C beauty storefront for product reviews and customer query resolution — integrated with a live n8n automation workflow.",
        tech: "Lovable · React · n8n · Telegram · Google Sheets · OpenAI GPT-4",
        thumbnail: thumbLumiere,
        links: [
          { label: "Live App", href: "https://lumiere-ankita.lovable.app" },
          { label: "Walkthrough", href: "https://drive.google.com/file/d/1TeaItOd8ICoHOH1zZ-StoEeJrtQ2-hVx/view?usp=sharing" },
        ],
      },
    ],
  },
  {
    id: "copilot-agents",
    title: "Co-pilot Studio Agents",
    icon: Bot,
    items: [
      {
        title: "Travel Itinerary Planning Agent",
        description: "Copilot Studio agent generating personalized, budget-aware, hour-by-hour travel itineraries covering each day from morning to night with no time gaps.",
        tech: "Microsoft Copilot Studio · Generative AI · Prompt Engineering",
        thumbnail: thumbTravelAgent,
        links: [
          { label: "Documentation", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQBs_v0afU-IQ7nYIdGmzJ3sAaN7neB2-WombhYfZUIZo44?e=vaZpxU" },
        ],
      },
      {
        title: "SSS Assistant Agent — Axis Bank Bharat Banking",
        description: "RAG-based Copilot Studio agent helping BCBO/FIG field agents instantly access Social Security Scheme details (PMSBY, PMJJBY, PMJDY, APY), SOPs, and branch SPOC mapping — reducing knowledge gaps at grassroots banking.",
        tech: "Microsoft Copilot Studio · RAG · Power Automate",
        thumbnail: thumbSssAgent,
        links: [
          { label: "Documentation", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQA2LHmrPIwoTp7OCuf1GpRBAQwHjLYT-xstCR-O_ZDmFpo?e=hdfKb2" },
        ],
      },
    ],
  },
  {
    id: "powerbi",
    title: "Power BI Analytics Projects",
    icon: BarChart3,
    items: [
      {
        title: "FI Index Scorecard — Social Security Schemes",
        description: "Power BI dashboard tracking target vs. achievement across India's key social security schemes (APY, PMJJBY, PMSBY, PMJDY) with a consolidated Financial Inclusion Index Score.",
        thumbnail: thumbPbiFi,
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/Business-Intelligence-and-Strategy-Projects/blob/main/FI%20Index%20Scorecard%20Review.pbix" },
          { label: "Dashboard Glimpses", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQBOBaltx_VoT41JZS0b8dCxAa-WQ4WFY6FbZuAIRdKJEos?e=dKd4UD" },
        ],
      },
      {
        title: "CarInfo Insurance Analytics",
        description: "Executive dashboard covering sales, premiums, claims risk, renewals, partner performance, and marketing funnel across major Indian insurers including Bajaj Allianz and New India Assurance.",
        thumbnail: thumbPbiCarInfo,
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/Business-Intelligence-and-Strategy-Projects/blob/main/CarInfo%20Dashboard%20Final.pbix" },
          { label: "Dashboard Glimpses", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQDl99cV37P3SZV8CjU74Mr-AV8ku5VFLMFWhZQZDZbd4sE?e=95kWH1" },
        ],
      },
      {
        title: "Bank Marketing Analytics Dashboard",
        description: "Analyzes customer demographics — marital status, education, occupation — against average account balances to identify high-value segments for targeted marketing.",
        thumbnail: thumbPbiBankMarketing,
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/Business-Intelligence-and-Strategy-Projects/blob/main/Bank%20Marketing.pbix" },
          { label: "Dashboard Glimpses", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQCEU3EfSzxNT73l6qbvGFHEASz0x7o3Zx5URoAO5VgUMKQ?e=1IOk1t" },
        ],
      },
      {
        title: "Bank Customer Churn & Behavioral Analytics",
        description: "Churn analytics examining demographics, product holdings, and engagement patterns to identify at-risk customers and drive retention strategies.",
        thumbnail: thumbPbiBankChurn,
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/Business-Intelligence-and-Strategy-Projects/blob/main/Bank%20Customer%20Churn.pbix" },
          { label: "Dashboard Glimpses", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQAmjusxZwKUTJ6E9lhMcFMDAf3KZfDAKojUIcnHfDud_2w?e=yh1jnz" },
        ],
      },
    ],
  },
  {
    id: "langchain-agents",
    title: "AI Agents using LangChain & LangGraph",
    icon: Brain,
    items: [
      {
        title: "YouTube Video Summary Creator (LangChain RAG Agent)",
        description: "RAG-based agent extracting YouTube transcripts, storing them in a vector database, and answering questions strictly grounded in the video content — engineered to eliminate hallucinations.",
        tech: "LangChain · OpenAI GPT-4 · YouTube Transcript API · Vector DB · Python",
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/AI-agents-using-LangChain" },
          { label: "Agent Flowchart", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQAk3Vhy11RUQooN5wAE7QslAcPaNTOBKlQEtly9l6Gf8Mk?e=J1O8Ic" },
        ],
      },
      {
        title: "Multi-Agent RAG Chatbot Collection (LangGraph)",
        description: "Two conversational AI systems — a general-purpose LLM chatbot and a document-grounded RAG assistant — built with LangGraph to demonstrate stateful agent orchestration and private knowledge retrieval.",
        tech: "LangGraph · GPT-4o · FAISS · Python · Jupyter",
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/AI-agents-Using-LangGraph" },
          { label: "Agent Flowchart", href: "https://1drv.ms/w/c/66052eb9d4e727fc/IQBYnSstw6WfSayG4Di0fv1cAVVir5no5SRvuMiYBVV0zfw?e=mBibjI" },
        ],
      },
    ],
  },
  {
    id: "product-improvements",
    title: "Product Improvements",
    icon: Lightbulb,
    items: [
      {
        title: "CRED — Product Improvement Case Study",
        description: "Teardown of CRED proposing Spend Analyzer, AI Financial Coach, Financial Stability Score, and predictable gamified rewards to deepen CRED's role as a daily finance companion beyond bill payments.",
        tech: "Product thinking · User segmentation · Prioritization frameworks",
        links: [{ label: "Deck", href: "https://drive.google.com/file/d/1-uuUZwRhHd0YtLPgWBFh0fLGrDFOtWjP/view?usp=sharing" }],
      },
      {
        title: "YouTube — Product Improvement Case Study",
        description: "Product analysis of YouTube focused on the student learner segment, proposing AI Learning Guide, Focus Learning Mode, and end-of-video Q&A to transform YouTube into a structured, habit-forming learning platform.",
        tech: "Product thinking · User segmentation · Prioritization frameworks",
        links: [{ label: "Deck", href: "https://drive.google.com/file/d/16HtddErYW3npb8_NAgNoJ1z_BFFwsS0v/view?usp=sharing" }],
      },
    ],
  },
];

const SKILLS = {
  Technical: [
    "SAP", "Java", "Python", "SQL", "C++", "MongoDB", "Apache Superset",
    "Jira", "Postman", "n8n", "Power Automate", "LangGraph", "LangChain",
    "Power BI", "Power Apps", "Copilot Studio", "Figma", "Draw.io", "Whimsical",
  ],
  "Product Management": [
    "Product Lifecycle Management", "User Empathy & Customer-Centric Thinking",
    "BRD Creation", "UAT", "Usability Testing", "Competitive Analysis",
    "Roadmap Planning", "Prioritization", "Stakeholder Management", "Root Cause Analysis",
  ],
};

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <QuickJump />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 md:px-6 md:py-4">
        <a href="#top" className="font-display text-base font-bold tracking-tight text-primary md:text-lg">
          Ankita Chatterjee
        </a>
        <nav className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 text-xs md:order-none md:w-auto md:gap-7 md:text-sm">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href="/Ankita_Chatterjee_CV.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          <Download className="h-3.5 w-3.5" />
          Resume
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr] md:py-28">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Technical Product Manager · Tech & AI
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-primary md:text-6xl">
            Ankita Chatterjee
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Technical Product Manager focused on building scalable Tech &amp; AI products,
            UX optimization, and data-driven growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              View Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Jump to projects
            </p>
            <div className="flex flex-wrap gap-2">
              {PROJECT_GROUPS.map((g) => {
                const Icon = g.icon;
                return (
                  <a
                    key={g.id}
                    href={`#${g.id}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/10 hover:text-primary"
                  >
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    {g.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Mumbai, India</span>
            <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> Axis Bank — Digital Business &amp; Transformations</span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-accent/30 blur-2xl" aria-hidden />
            <img
              src={profilePhoto}
              alt="Ankita Chatterjee"
              className="relative h-64 w-64 rounded-full border-4 border-background object-cover shadow-xl md:h-72 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold text-primary md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="About" title="Building Tech & AI products with impact." />
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed text-muted-foreground">
              I'm a Technical Product Manager at Axis Bank's Digital Business &amp; Transformations division,
              leading cross-functional teams across technical product management, product building,
              GTM strategy, and AI-driven innovation. I've built agentic AI solutions, rapid prototypes,
              executive dashboards, and applied Six Sigma frameworks to drive product performance,
              customer experience, and data-driven decisions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              My work sits at the intersection of product strategy, emerging AI technologies, and
              measurable business outcomes — from grassroots banking enablement to consumer-facing
              digital experiences.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span><span className="text-foreground">Mumbai</span><span className="text-muted-foreground"> · Hometown: Jamshedpur</span></span></li>
              <li className="flex items-start gap-2"><Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span className="text-muted-foreground">Technical Product Manager, Axis Bank</span></li>
              <li className="flex items-start gap-2"><GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span className="text-muted-foreground">MBA — NMIMS Mumbai</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="Experience & Education" title="Background" />
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Briefcase className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary">Technical Product Manager</h3>
            <p className="mt-1 text-sm font-medium text-foreground">Axis Bank · Digital Business &amp; Transformations</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Leading cross-functional teams across technical product management, product building,
              GTM strategy, and AI-driven innovation. Built agentic AI solutions, prototypes, and
              dashboards; applied Six Sigma to enhance product performance, CX, and data-driven decisions.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-7">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-xl font-semibold text-primary">Education</h3>
            <div className="mt-3 space-y-4">
              <div>
                <p className="text-sm font-semibold text-foreground">MBA — General Management</p>
                <p className="text-sm text-muted-foreground">NMIMS Mumbai</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">B.Tech — Electrical Engineering</p>
                <p className="text-sm text-muted-foreground">BIT Sindri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader eyebrow="Skills" title="Tools and frameworks I work with" />
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-border bg-card p-7">
              <h3 className="mb-5 font-display text-lg font-semibold text-primary">{group}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeId, setActiveId] = useState(PROJECT_GROUPS[0].id);

  // Sync to URL hash on mount + when hash changes (so Hero chips & QuickJump still work)
  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash.replace("#", "");
      const match = PROJECT_GROUPS.find((g) => g.id === h);
      if (match) setActiveId(match.id);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const activeIndex = PROJECT_GROUPS.findIndex((g) => g.id === activeId);
  const activeGroup = PROJECT_GROUPS[activeIndex];
  const ActiveIcon = activeGroup.icon;

  const goTo = (id: string) => {
    setActiveId(id);
    if (typeof window !== "undefined") {
      history.replaceState(null, "", `#${id}`);
    }
  };

  const prev = () => goTo(PROJECT_GROUPS[(activeIndex - 1 + PROJECT_GROUPS.length) % PROJECT_GROUPS.length].id);
  const next = () => goTo(PROJECT_GROUPS[(activeIndex + 1) % PROJECT_GROUPS.length].id);

  return (
    <section id="projects" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A collection of AI-powered apps, agents, analytics dashboards, and product case studies. Switch categories below."
        />

        {/* Sticky category tabs */}
        <div className="-mx-6 mb-8 border-y border-border bg-surface px-6 py-3">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {PROJECT_GROUPS.map((g) => {
              const Icon = g.icon;
              const active = g.id === activeId;
              return (
                <button
                  key={g.id}
                  onClick={() => goTo(g.id)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                    active
                      ? "border-primary bg-primary text-primary-foreground shadow"
                      : "border-border bg-card text-foreground hover:border-accent hover:bg-accent/10 hover:text-primary"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="whitespace-nowrap">{g.title}</span>
                  <span className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] ${active ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"}`}>
                    {g.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div id={activeGroup.id}>
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <ActiveIcon className="h-4 w-4" />
              </span>
              <h3 className="font-display text-2xl font-semibold text-primary">{activeGroup.title}</h3>
            </div>
            <div className="hidden items-center gap-2 sm:flex">
              <button onClick={prev} aria-label="Previous category" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-primary">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={next} aria-label="Next category" className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground transition-colors hover:border-accent hover:text-primary">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {activeGroup.items.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {p.thumbnail && (
                  <a
                    href={p.links[0]?.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-center border-b border-border bg-gradient-to-br from-muted to-background p-6"
                  >
                    {activeGroup.id === "copilot-agents" || activeGroup.id === "powerbi" ? (
                      <div className="w-full overflow-hidden rounded-lg border border-border bg-background shadow-md">
                        <div className="aspect-[16/10] flex items-center justify-center">
                          <img
                            src={p.thumbnail}
                            alt={`${p.title} preview`}
                            loading="lazy"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-[55%] max-w-[220px] overflow-hidden rounded-[1.75rem] border-[6px] border-foreground/90 bg-background shadow-xl">
                        <div className="aspect-[9/19] flex items-center justify-center">
                          <img
                            src={p.thumbnail}
                            alt={`${p.title} preview`}
                            loading="lazy"
                            className={`h-full w-full transition-transform duration-500 group-hover:scale-105 ${p.title === "FinClarity — Smart Finance Tracker" ? "object-contain" : "object-cover object-top"}`}
                          />
                        </div>
                      </div>
                    )}
                  </a>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h4 className="font-display text-lg font-semibold leading-snug text-primary">
                    {p.title}
                  </h4>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  {p.tech && (
                    <p className="mt-4 text-xs font-medium text-foreground/70">{p.tech}</p>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {l.label} <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom pager — easy switching after scrolling through cards */}
          <div className="mt-10 flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4">
            <button
              onClick={prev}
              className="inline-flex flex-1 items-center gap-2 rounded-md px-3 py-2 text-left text-xs font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-4 w-4 text-accent" />
              <span className="flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Previous</span>
                <span className="truncate">{PROJECT_GROUPS[(activeIndex - 1 + PROJECT_GROUPS.length) % PROJECT_GROUPS.length].title}</span>
              </span>
            </button>
            <button
              onClick={() => window.scrollTo({ top: document.getElementById("projects")?.offsetTop ?? 0, behavior: "smooth" })}
              className="hidden shrink-0 rounded-md border border-border px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary sm:inline-flex"
            >
              Back to top
            </button>
            <button
              onClick={next}
              className="inline-flex flex-1 items-center justify-end gap-2 rounded-md px-3 py-2 text-right text-xs font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <span className="flex flex-col items-end">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Next</span>
                <span className="truncate">{PROJECT_GROUPS[(activeIndex + 1) % PROJECT_GROUPS.length].title}</span>
              </span>
              <ChevronRight className="h-4 w-4 text-accent" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickJump() {
  const [open, setOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (hash: string) => {
    setOpen(false);
    if (hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.replaceState(null, "", " ");
      return;
    }
    window.location.hash = hash;
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {showTop && !open && (
        <button
          onClick={() => go("#top")}
          aria-label="Back to top"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      {open && (
        <div className="w-72 max-w-[85vw] overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
          <div className="border-b border-border px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Sections</p>
          </div>
          <div className="flex flex-col py-1">
            {NAV.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary"
              >
                {n.label}
              </button>
            ))}
          </div>
          <div className="border-t border-border px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Project Categories</p>
          </div>
          <div className="flex flex-col py-1 pb-2">
            {PROJECT_GROUPS.map((g) => {
              const Icon = g.icon;
              return (
                <button
                  key={g.id}
                  onClick={() => go(`#${g.id}`)}
                  className="flex items-center gap-2 px-4 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <Icon className="h-3.5 w-3.5 text-accent" />
                  <span className="truncate">{g.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close quick menu" : "Open quick menu"}
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-1 ring-primary/30 transition-transform hover:scale-105"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </div>
  );
}

function Contact() {
  const items = [
    { Icon: Mail, label: "chatterjeeankita0903@gmail.com", href: "mailto:chatterjeeankita0903@gmail.com" },
    { Icon: Phone, label: "+91 7759932042", href: "tel:+917759932042" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ankita-chatterjee-81811a147" },
    { Icon: Github, label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop" },
  ];
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Let's connect — I'm open to new opportunities.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-primary-foreground/75">
              Open to product roles, collaborations, and conversations on AI-driven product innovation.
            </p>
          </div>
          <ul className="space-y-3">
            {items.map(({ Icon, label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="flex items-center justify-between rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-5 py-4 text-sm transition-colors hover:bg-primary-foreground/10"
                >
                  <span className="inline-flex items-center gap-3">
                    <Icon className="h-4 w-4 text-accent" />
                    {label}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-primary-foreground/60" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ankita Chatterjee · Technical Product Manager
      </div>
    </footer>
  );
}
