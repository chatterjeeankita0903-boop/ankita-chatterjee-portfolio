import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink,
  Briefcase, GraduationCap, Sparkles, Bot, BarChart3, Brain, Lightbulb,
  ArrowUpRight, Menu, X, ChevronRight, ArrowUp,
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
import thumbYoutubeRagFlow from "@/assets/projects/youtube-rag-flow.png.asset.json";
import thumbMultiAgentRagFlow from "@/assets/projects/multi-agent-rag-flow.png.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects", isProjects: true },
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
          { label: "Deck", href: "https://drive.google.com/file/d/1MOelakAXoaAyprcYse_NVnU24KxHrAuX/view?usp=sharing" },
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
          { label: "Deck", href: "https://drive.google.com/file/d/1A2BvSAulfDldnYI9oVh-gUNdW4aBROwM/view?usp=sharing" },
        ],
      },
      {
        title: "Uber Safe — Ride Safety App",
        description: "Prototype giving Uber a safety-first ride experience that integrates preventive, real-time, and post-ride safety mechanisms.",
        tech: "Claude (Anthropic) · React · HTML/CSS",
        thumbnail: thumbUberSafe,
        links: [
          { label: "Live App", href: "https://claude.ai/public/artifacts/fce67220-e0b9-4143-b4dd-765cb43f267b" },
          { label: "PRD", href: "https://drive.google.com/file/d/1au9E6sqVkgCA9PI323vk11vfRsMt7agQ/view?usp=sharing" },
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
          { label: "Deck", href: "https://drive.google.com/file/d/1mTd-ey6BdtbvOyo55jz1Fl9OpCd8gEuk/view?usp=sharing" },
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
          { label: "Documentation", href: "https://drive.google.com/file/d/10T8CDSrdfSeYBWXke4pCYC3jS1V4UaPc/view?usp=sharing" },
        ],
      },
      {
        title: "SSS Assistant Agent — Axis Bank Bharat Banking",
        description: "RAG-based Copilot Studio agent helping BCBO/FIG field agents instantly access Social Security Scheme details (PMSBY, PMJJBY, PMJDY, APY), SOPs, and branch SPOC mapping — reducing knowledge gaps at grassroots banking.",
        tech: "Microsoft Copilot Studio · RAG · Power Automate",
        thumbnail: thumbSssAgent,
        links: [
          { label: "Documentation", href: "https://drive.google.com/file/d/141f5OrIoy8GV9_PEHKZ3vrKEia5bfELf/view?usp=sharing" },
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
          { label: "Dashboard Glimpses", href: "https://drive.google.com/file/d/1cQ4Qo0ab3Sx_uOfPHvo8vM-thxNzKB9u/view?usp=sharing" },
        ],
      },
      {
        title: "CarInfo Insurance Analytics",
        description: "Executive dashboard covering sales, premiums, claims risk, renewals, partner performance, and marketing funnel across major Indian insurers including Bajaj Allianz and New India Assurance.",
        thumbnail: thumbPbiCarInfo,
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/Business-Intelligence-and-Strategy-Projects/blob/main/CarInfo%20Dashboard%20Final.pbix" },
          { label: "Dashboard Glimpses", href: "https://drive.google.com/file/d/14NjefDUjtaUcDMV_SNNfcL6utYxr8rCf/view?usp=sharing" },
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
        thumbnail: thumbYoutubeRagFlow.url,
        links: [
          { label: "Live App", href: "https://youtube-chatbot.up.railway.app/" },
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/AI-agents-using-LangChain" },
        ],
      },
      {
        title: "Multi-Agent RAG Chatbot Collection (LangGraph)",
        description: "Two conversational AI systems — a general-purpose LLM chatbot and a document-grounded RAG assistant — built with LangGraph to demonstrate stateful agent orchestration and private knowledge retrieval.",
        tech: "LangGraph · GPT-4o · FAISS · Python · Jupyter",
        thumbnail: thumbMultiAgentRagFlow.url,
        links: [
          { label: "GitHub", href: "https://github.com/chatterjeeankita0903-boop/AI-agents-Using-LangGraph" },
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
    "SAP", "Java", "Python", "SQL", "C++", "Apache Superset",
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
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <QuickJump />
      <ScrollHint />
    </div>
  );
}

function ScrollHint() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("scrollHintSeen")) return;
    const onScroll = () => {
      if (window.scrollY > 280) {
        setShow(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setClosed(true);
    sessionStorage.setItem("scrollHintSeen", "1");
  };

  useEffect(() => {
    if (!show || closed) return;
    const t = setTimeout(dismiss, 9000);
    return () => clearTimeout(t);
  }, [show, closed]);

  // Toggle a global flag so the Projects buttons can pulse while the tip is visible
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (show && !closed) document.body.setAttribute("data-hint-projects", "1");
    else document.body.removeAttribute("data-hint-projects");
    return () => document.body.removeAttribute("data-hint-projects");
  }, [show, closed]);

  if (!show || closed) return null;

  return (
    <>
      {/* Desktop tip — anchored under the top bar */}
      <div className="fixed left-1/2 top-20 z-[60] hidden w-[min(92vw,420px)] -translate-x-1/2 animate-in fade-in slide-in-from-top-4 duration-500 md:block">
        <HintCard dismiss={dismiss} placement="top" />
      </div>
      {/* Mobile tip — anchored above the bottom tab bar */}
      <div className="fixed bottom-[76px] left-1/2 z-[60] w-[min(92vw,420px)] -translate-x-1/2 animate-in fade-in slide-in-from-bottom-4 duration-500 md:hidden">
        <HintCard dismiss={dismiss} placement="bottom" />
      </div>
    </>
  );
}

function HintCard({ dismiss, placement }: { dismiss: () => void; placement: "top" | "bottom" }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-accent/40 bg-card p-4 pr-10 shadow-2xl ring-1 ring-accent/20">
      {/* Pointer arrow toward the Projects button */}
      <span
        aria-hidden
        className={`absolute left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border border-accent/40 bg-card ${
          placement === "top" ? "-top-1.5 border-b-0 border-r-0" : "-bottom-1.5 border-l-0 border-t-0"
        }`}
      />
      <div className="flex items-start gap-3">
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Sparkles className="h-4 w-4" />
        </span>
        <div className="text-sm leading-relaxed text-foreground">
          <p className="font-medium text-primary">Quick tip</p>
          <p className="mt-0.5 text-muted-foreground">
            Tap the highlighted <span className="font-semibold text-foreground">Projects ▾</span> menu to jump straight to any project category.
          </p>
        </div>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss tip"
        className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

function Header() {
  const [projOpen, setProjOpen] = useState(false);
  const [mProjOpen, setMProjOpen] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (!t.closest("[data-projects-dropdown]")) setProjOpen(false);
      if (!t.closest("[data-mobile-projects]")) setMProjOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const jumpTo = (hash: string) => {
    setProjOpen(false);
    setMProjOpen(false);
    window.location.hash = hash;
  };

  // Pulse highlight class applied while the ScrollHint tip is visible.
  // body[data-hint-projects="1"] is set by ScrollHint; we use the `group/hint`
  // pattern via an inline data attr selector below.
  const pulseCls =
    "[body[data-hint-projects='1']_&]:ring-2 [body[data-hint-projects='1']_&]:ring-accent [body[data-hint-projects='1']_&]:animate-pulse";

  const ProjectsDropdown = () => (
    <div className="relative" data-projects-dropdown>
      <button
        onClick={(e) => { e.stopPropagation(); setProjOpen((o) => !o); }}
        className={`inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-muted-foreground transition-colors hover:text-foreground data-[open=true]:text-foreground ${pulseCls}`}
        data-open={projOpen}
        aria-haspopup="menu"
        aria-expanded={projOpen}
      >
        Projects
        <ChevronRight className={`h-3 w-3 transition-transform ${projOpen ? "rotate-[270deg]" : "rotate-90"}`} />
      </button>
      {projOpen && (
        <div className="absolute right-0 left-auto mt-2 w-64 overflow-hidden rounded-lg border border-border bg-card shadow-xl">
          <button
            onClick={() => jumpTo("#projects")}
            className="flex w-full items-center gap-2 border-b border-border px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:bg-secondary hover:text-foreground"
          >
            All projects
          </button>
          <div className="flex flex-col py-1">
            {PROJECT_GROUPS.map((g) => {
              const Icon = g.icon;
              return (
                <button
                  key={g.id}
                  onClick={() => jumpTo(`#${g.id}`)}
                  className="flex items-center gap-2 px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-secondary"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="truncate">{g.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-3 py-2.5 sm:px-4 md:px-6 md:py-4">
          <a href="#top" className="truncate font-display text-sm font-bold tracking-tight text-primary sm:text-base md:text-lg">
            Ankita Chatterjee
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 text-sm md:flex">
            {NAV.map((n) =>
              n.isProjects ? <ProjectsDropdown key={n.href} /> : (
                <a key={n.href} href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">
                  {n.label}
                </a>
              )
            )}
          </nav>

          <a
            href="/Ankita_Chatterjee_CV.pdf"
            download
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-[11px] font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:px-3 sm:py-2 sm:text-xs md:px-4"
          >
            <Download className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            Resume
          </a>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden"
        aria-label="Primary"
      >
        <ul className="mx-auto flex max-w-6xl items-center justify-around px-1 py-1.5 text-xs">
          {NAV.map((n) =>
            n.isProjects ? (
              <li key={n.href} className="relative" data-mobile-projects>
                {mProjOpen && (
                  <div className="absolute bottom-full left-1/2 mb-2 w-64 -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
                    <button
                      onClick={() => jumpTo("#projects")}
                      className="flex w-full items-center gap-2 border-b border-border px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:bg-secondary hover:text-foreground"
                    >
                      All projects
                    </button>
                    <div className="flex max-h-[55vh] flex-col overflow-y-auto py-1">
                      {PROJECT_GROUPS.map((g) => {
                        const Icon = g.icon;
                        return (
                          <button
                            key={g.id}
                            onClick={() => jumpTo(`#${g.id}`)}
                            className="flex items-center gap-2 px-3 py-2 text-left text-sm text-foreground hover:bg-secondary"
                          >
                            <Icon className="h-3.5 w-3.5 shrink-0 text-accent" />
                            <span className="truncate">{g.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); setMProjOpen((o) => !o); }}
                  aria-haspopup="menu"
                  aria-expanded={mProjOpen}
                  className={`inline-flex items-center gap-0.5 rounded-md px-3 py-1.5 font-medium text-foreground ${pulseCls}`}
                >
                  Projects
                  <ChevronRight className={`h-3 w-3 transition-transform ${mProjOpen ? "-rotate-90" : "rotate-90"}`} />
                </button>
              </li>
            ) : (
              <li key={n.href}>
                <a
                  href={n.href}
                  className="inline-flex rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  );
}


function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.5fr_1fr] md:py-28">
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Product Owner · Tech & AI
          </p>
          <h1 className="font-display text-5xl font-bold leading-[1.05] text-primary md:text-6xl">
            Ankita Chatterjee
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Product Owner focused on building scalable Tech &amp; AI products,
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
              I'm a Product Owner at Axis Bank's Digital Business &amp; Transformations division,
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
              <li className="flex items-start gap-2"><Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span className="text-muted-foreground">Product Owner, Axis Bank</span></li>
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
            <h3 className="font-display text-xl font-semibold text-primary">Product Owner</h3>
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
  return (
    <section id="projects" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeader
          eyebrow="Projects"
          title="Selected work"
          subtitle="A collection of AI-powered apps, agents, analytics dashboards, and product case studies. Use the Projects menu in the top bar to jump to any category."
        />

        <div className="space-y-20">
          {PROJECT_GROUPS.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.id} id={group.id} className="scroll-mt-24">
                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-primary">{group.title}</h3>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {group.items.map((p) => (
                    <article
                      key={p.title}
                      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-0.5 hover:shadow-md"
                    >
                      {p.thumbnail && (
                        <button
                          type="button"
                          onClick={() => setLightbox({ src: p.thumbnail!, alt: `${p.title} preview` })}
                          className="flex items-center justify-center border-b border-border bg-gradient-to-br from-muted to-background p-6 cursor-zoom-in"
                          aria-label={`Expand ${p.title} preview`}
                        >
                          {group.id === "copilot-agents" || group.id === "powerbi" || group.id === "langchain-agents" ? (
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
                        </button>
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
              </div>
            );
          })}
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
        © {new Date().getFullYear()} Ankita Chatterjee · Product Owner
      </div>
    </footer>
  );
}
