"use client";

import Link from "next/link";
import React from "react";
import WaterCurrentsCanvas from "../components/WaterCurrentsCanvas";




// Wrapper to bypass TypeScript JSX IntrinsicElements checks for custom web components
const Icon = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { icon: string, class?: string }) => {
  return React.createElement('iconify-icon', props);
};

const inspectionSlides = [
  {
    title: "Microfouling Slime Layer",
    category: "Log #AX-0891 — Slime",
    description: "Initial bacterial and diatom biofilm colonizing the hull coating. Microscopic thickness but increases frictional drag by 15% to 20% even at low speeds.",
    severity: "Light / Frictional Drag Spike",
    impact: "+18% Drag Coefficient",
    visualStyle: "from-blue-950/70 to-ink-950/90"
  },
  {
    title: "Tubular & Barnacle Growth",
    category: "Log #AX-0914 — Macrofouling",
    description: "Macrofouling colonies (calcareous organisms and barnacles) adhering to hull plates. Introduces severe turbulence and increases drag by up to 40%.",
    severity: "Critical / High Fuel Penalty",
    impact: "+40% Drag Penalty",
    visualStyle: "from-red-950/70 to-ink-950/90"
  },
  {
    title: "Calcareous Tubeworms",
    category: "Log #AX-0742 — Calcareous",
    description: "Hard calcium carbonate tubes built by serpulid worms. Extremely rigid growth that damages protective paints and requires immediate non-abrasive ROV pass.",
    severity: "Severe / Paint Risk",
    impact: "+35% Hydrodynamic Loss",
    visualStyle: "from-amber-950/70 to-ink-950/90"
  },
  {
    title: "Invasive Algae Blooms",
    category: "Log #AX-0628 — Bio-Invasion",
    description: "Translocation of local algal species across marine ecosystems. Creates ecological hazards at ports of call. Controlled ROV cleaning captures and contains clippings.",
    severity: "Biosecurity Risk / Compliance Alert",
    impact: "High Invasive Potential",
    visualStyle: "from-emerald-950/70 to-ink-950/90"
  },
  {
    title: "Propeller Bio-corrosion",
    category: "Log #AX-0511 — Propulsion",
    description: "Macrofouling buildup on propeller blades, causing blade roughness and leading to 10% loss in propulsion efficiency and severe engine stress.",
    severity: "Propulsion Stress / Thrust Loss",
    impact: "-10% Propeller Efficiency",
    visualStyle: "from-cyan-950/70 to-ink-950/90"
  },
  {
    title: "Traditional Drydock Scraping",
    category: "Log #AX-0402 — Historical",
    description: "Abrasive manual scraping during drydocking. Causes micro-scratches in hull coating, creating anchoring points for faster biofouling recurrence.",
    severity: "Sub-optimal / Structural Wear",
    impact: "Shortens Coating Lifespan",
    visualStyle: "from-slate-900/70 to-ink-950/90"
  }
];

export default function LandingPage() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % inspectionSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + inspectionSlides.length) % inspectionSlides.length);
  };
  return (
    <div className="min-h-screen bg-ink-900 text-slate-100" style={{ fontFamily: "Satoshi, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, 'Noto Sans', 'Liberation Sans', sans-serif" }}>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_15%_0%,rgba(0,212,255,.14),transparent_55%),radial-gradient(900px_520px_at_85%_15%,rgba(24,255,209,.10),transparent_60%),radial-gradient(900px_520px_at_70%_90%,rgba(0,136,255,.10),transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22 viewBox=%220 0 160 160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')"}}></div>
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[78rem] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,.22),transparent_65%)] blur-3xl animate-[pulseGlow_5.5s_ease-in-out_infinite]"></div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/95">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link id="nav-home-link" href="#top" className="group inline-flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-white/5 ring-1 ring-white/12 overflow-hidden">
                <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,.30),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <img id="nav-logo-img" src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/15924618-fc57-4928-8cb4-8d0f5cc0415a/1777029332701-56ba9440/Frame_2.png" alt="AquaXFoul logo" className="relative h-11 w-11 object-contain" />
              </span>
              <div className="leading-tight">
                <div className="text-sm tracking-tight" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>AquaXFoul</div>
                <div className="text-[11px] text-slate-400">Maritime robotics</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <Link id="nav-problem-link" href="#problem" className="text-sm text-slate-300 hover:text-white transition-colors">Problem</Link>
              <Link id="nav-solution-link" href="#solution" className="text-sm text-slate-300 hover:text-white transition-colors">Solution</Link>
              <Link id="nav-how-link" href="#how" className="text-sm text-slate-300 hover:text-white transition-colors">How it works</Link>
              <Link id="nav-technology-link" href="#technology" className="text-sm text-slate-300 hover:text-white transition-colors">Technology</Link>
              <Link id="nav-impact-link" href="#impact" className="text-sm text-slate-300 hover:text-white transition-colors">Impact</Link>
              <Link id="nav-usecases-link" href="#usecases" className="text-sm text-slate-300 hover:text-white transition-colors">Use cases</Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link id="nav-see-technology-link" href="#technology" className="hidden sm:inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm text-slate-200 ring-1 ring-white/10 hover:ring-white/18 hover:bg-white/5 transition">
                <Icon icon="lucide:cpu" className="text-base text-aqua-500"></Icon>
                See technology
              </Link>
              <Link id="nav-request-demo-link" href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-aqua-500 px-3.5 py-2 text-sm font-medium text-ink-950 shadow-glow hover:bg-[#2be2ff] transition">
                <Icon icon="lucide:calendar" className="text-base"></Icon>
                Request demo
              </Link>
              <Link id="nav-mobile-menu-link" href="#contact" className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" aria-label="Contact">
                <Icon icon="lucide:arrow-right" className="text-lg text-slate-200"></Icon>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10" style={{viewTransitionName: "main-content"} as React.CSSProperties}>
        <a id="top" href="#top" className="sr-only">Top</a>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img alt="Underwater ROV cleaning ship hull" src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/15924618-fc57-4928-8cb4-8d0f5cc0415a/1777020282042-11bba45f/Gemini_Generated_Image_64f5gj64f5gj64f5.png" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-950/40 via-ink-900/70 to-ink-900"></div>
            <div className="absolute inset-0 bg-[radial-gradient(900px_520px_at_65%_35%,rgba(0,212,255,.18),transparent_55%)]"></div>
            <WaterCurrentsCanvas />

            <div className="absolute inset-0 opacity-80">
              <span className="particle h-1.5 w-1.5 bg-white/70" style={{left:"12%", top:"22%", "--d":"18s"} as React.CSSProperties}></span>
              <span className="particle h-1 w-1 bg-white/60" style={{left:"18%", top:"58%", "--d":"15s"} as React.CSSProperties}></span>
              <span className="particle h-2 w-2 bg-aqua-500/70" style={{left:"28%", top:"40%", "--d":"22s"} as React.CSSProperties}></span>
              <span className="particle h-1 w-1 bg-white/60" style={{left:"42%", top:"26%", "--d":"19s"} as React.CSSProperties}></span>
              <span className="particle h-1.5 w-1.5 bg-aqua-400/60" style={{left:"56%", top:"18%", "--d":"17s"} as React.CSSProperties}></span>
              <span className="particle h-1 w-1 bg-white/60" style={{left:"63%", top:"44%", "--d":"14s"} as React.CSSProperties}></span>
              <span className="particle h-2 w-2 bg-white/55" style={{left:"72%", top:"32%", "--d":"21s"} as React.CSSProperties}></span>
              <span className="particle h-1 w-1 bg-aqua-500/70" style={{left:"80%", top:"55%", "--d":"16s"} as React.CSSProperties}></span>
              <span className="particle h-1.5 w-1.5 bg-white/60" style={{left:"88%", top:"30%", "--d":"20s"} as React.CSSProperties}></span>
              <span className="particle h-1 w-1 bg-aqua-400/60" style={{left:"90%", top:"68%", "--d":"23s"} as React.CSSProperties}></span>
              <span className="particle h-1.5 w-1.5 bg-white/60" style={{left:"35%", top:"72%", "--d":"18s"} as React.CSSProperties}></span>
              <span className="particle h-1 w-1 bg-white/60" style={{left:"52%", top:"66%", "--d":"16s"} as React.CSSProperties}></span>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="relative grid min-h-[740px] grid-cols-1 items-end gap-10 pb-14 pt-16 lg:min-h-[820px] lg:grid-cols-12 lg:items-center lg:pb-20">

              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-aqua-500"></span>
                  <span className="text-xs text-slate-300">ROV-based biofouling mitigation • Inspection-grade data capture</span>
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>
                  CLEAN HULLS.<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 to-aqua-500">RESTORING PLANET'S LIFELINES</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200/90 sm:text-lg">
                  Pioneering AI-driven robotic maintenance to mitigate hydrodynamic drag, optimize vessel efficiency, and restore marine balance.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link id="hero-request-demo-link" href="#contact" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-aqua-500 px-5 py-3 text-sm font-medium text-ink-950 shadow-glow hover:bg-[#2be2ff] transition sm:w-auto">
                    <Icon icon="lucide:calendar" className="text-lg"></Icon>
                    Request Demo
                  </Link>
                  <Link id="hero-see-technology-link" href="#technology" className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/12 hover:bg-white/8 hover:ring-white/18 transition sm:w-auto">
                    <Icon icon="lucide:arrow-right" className="text-lg text-aqua-500"></Icon>
                    See Technology
                  </Link>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-3">
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:gauge" className="text-xl text-aqua-500"></Icon>
                      <div className="text-xs text-slate-300">Efficiency</div>
                    </div>
                    <div className="mt-2 text-sm text-white">Designed to reduce drag-inducing growth quickly.</div>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:shield-check" className="text-xl text-aqua-400"></Icon>
                      <div className="text-xs text-slate-300">Trust</div>
                    </div>
                    <div className="mt-2 text-sm text-white">Operator-safe workflows and audit-ready reporting.</div>
                  </div>
                  <div className="glass rounded-2xl p-4 col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-2">
                      <Icon icon="lucide:leaf" className="text-xl text-emerald-300"></Icon>
                      <div className="text-xs text-slate-300">Environmental</div>
                    </div>
                    <div className="mt-2 text-sm text-white">Fewer emissions from cleaner hulls and optimized schedules.</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-12">
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
                  <div className="text-xs text-slate-400">Trusted by operators who demand measurable outcomes:</div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                      <Icon icon="lucide:ship" className="text-base text-slate-200"></Icon>
                      Fleet operations
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                      <Icon icon="lucide:container" className="text-base text-slate-200"></Icon>
                      Port authorities
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                      <Icon icon="lucide:hard-hat" className="text-base text-slate-200"></Icon>
                      Drydock teams
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                      <Icon icon="lucide:badge-check" className="text-base text-aqua-500"></Icon>
                      Audit-ready reporting
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Maritime Biofouling & Emissions Staggering Statistics */}
        <section className="reveal py-16 sm:py-20 relative bg-ink-950/40 border-y border-white/5">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_50%_50%,rgba(0,212,255,0.06),transparent_50%)]"></div>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Environmental & Financial Impact</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>
                Maritime Biofouling Staggering Statistics
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                Unmitigated organic growth on ship hulls imposes a severe ecological toll and immense financial waste on the global shipping industry.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Stat 1 */}
              <div className="glass rounded-[1.5rem] p-6 hover-rise">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-aqua-400 font-headline">40%</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon icon="lucide:gauge-circle" className="text-lg text-aqua-500"></Icon>
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-white">Drag Penalty</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Increase in hydrodynamic drag caused by moderate barnacle and macro-growth on a vessel's hull.
                </p>
                <div className="mt-4 border-t border-white/5 pt-3">
                  <a href="https://www.imo.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition">
                    Source: IMO GlobFouling Project
                    <Icon icon="lucide:external-link" className="text-[10px]"></Icon>
                  </a>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="glass rounded-[1.5rem] p-6 hover-rise">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-aqua-400 font-headline">110M t</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon icon="lucide:cloud-lightning" className="text-lg text-aqua-500"></Icon>
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-white">Excess Carbon Emissions</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Tons of excess CO₂ generated annually by global vessels running with biofouled hull drag.
                </p>
                <div className="mt-4 border-t border-white/5 pt-3">
                  <a href="https://www.green4sea.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition">
                    Source: Marine Environmental Studies
                    <Icon icon="lucide:external-link" className="text-[10px]"></Icon>
                  </a>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="glass rounded-[1.5rem] p-6 hover-rise">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-aqua-400 font-headline">79%</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon icon="lucide:droplet" className="text-lg text-aqua-500"></Icon>
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-white">Invasive Bio-invasions</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Percentage of non-native aquatic invasive species introductions occurring via ship hull biofouling.
                </p>
                <div className="mt-4 border-t border-white/5 pt-3">
                  <a href="https://www.imo.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-white transition">
                    Source: International Maritime Org
                    <Icon icon="lucide:external-link" className="text-[10px]"></Icon>
                  </a>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="glass rounded-[1.5rem] p-6 hover-rise">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-aqua-400 font-headline">$30B</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon icon="lucide:banknote" className="text-lg text-aqua-500"></Icon>
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-white">Industry Fuel Waste</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Estimated annual financial waste incurred by shipping companies due to extra fuel burnt to combat drag.
                </p>
                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="text-[10px] text-slate-400">Source: Maritime Economics Association</span>
                </div>
              </div>

              {/* Stat 5 */}
              <div className="glass rounded-[1.5rem] p-6 hover-rise">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-aqua-400 font-headline">2.5%</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon icon="lucide:globe" className="text-lg text-aqua-500"></Icon>
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-white">Global GHG Contribution</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  The maritime industry's share of global greenhouse gas emissions, placing pressure on green shipping protocols.
                </p>
                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="text-[10px] text-slate-400">Source: Third IMO GHG Study</span>
                </div>
              </div>

              {/* Stat 6 */}
              <div className="glass rounded-[1.5rem] p-6 hover-rise">
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-aqua-400 font-headline">$150K</span>
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                    <Icon icon="lucide:shield-check" className="text-lg text-emerald-300"></Icon>
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-medium text-white">Vessel Annual Savings</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Average yearly fuel cost savings per container vessel through proactive, automated biofouling cleaning cycles.
                </p>
                <div className="mt-4 border-t border-white/5 pt-3">
                  <span className="text-[10px] text-slate-300 font-medium text-emerald-400 font-mono">Outcome: High-performance ROI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Problem</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Biofouling turns speed into spend.</h2>
                <p className="mt-4 text-slate-200/90 leading-relaxed">
                  Growth on the hull increases drag. Drag increases fuel. Fuel increases emissions and operating cost. Operators need a repeatable, reportable way to keep performance stable between dockings.
                </p>

                <div className="mt-7 space-y-3">
                  <div className="glass hover-rise rounded-2xl p-4 shadow-glow">
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:flame" className="text-lg text-aqua-500"></Icon>
                      </span>
                      <div>
                        <div className="text-sm font-medium text-white">Fuel loss</div>
                        <div className="mt-1 text-sm text-slate-300">Higher consumption to maintain schedule and speed profiles.</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass hover-rise rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:cloud" className="text-lg text-emerald-200"></Icon>
                      </span>
                      <div>
                        <div className="text-sm font-medium text-white">Emissions increase</div>
                        <div className="mt-1 text-sm text-slate-300">More CO₂ per nautical mile with the same operational demand.</div>
                      </div>
                    </div>
                  </div>
                  <div className="glass hover-rise rounded-2xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:clock" className="text-lg text-slate-200"></Icon>
                      </span>
                      <div>
                        <div className="text-sm font-medium text-white">Maintenance delays</div>
                        <div className="mt-1 text-sm text-slate-300">Reactive cleaning disrupts schedules and complicates compliance.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="grad-border rounded-[1.25rem]">
                    <div className="glass-strong rounded-[1.25rem] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-400">Before</div>
                          <div className="mt-1 text-sm font-medium text-white">Biofouled hull</div>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 text-[11px] text-slate-300 ring-1 ring-white/10">
                          <Icon icon="lucide:alert-triangle" className="text-sm text-amber-200"></Icon>
                          Drag ↑
                        </span>
                      </div>
                      <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-white/10">
                        <img alt="ROV cleaning hull close-up" className="h-44 w-full object-cover" src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/15924618-fc57-4928-8cb4-8d0f5cc0415a/1777020282042-11bba45f/Gemini_Generated_Image_64f5gj64f5gj64f5.png" />
                      </div>
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                          <div className="text-[11px] text-slate-400">Fuel</div>
                          <div className="mt-1 text-sm text-white">↑</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                          <div className="text-[11px] text-slate-400">CO₂</div>
                          <div className="mt-1 text-sm text-white">↑</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                          <div className="text-[11px] text-slate-400">Speed</div>
                          <div className="mt-1 text-sm text-white">↓</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[1.25rem] bg-gradient-to-br from-aqua-500/14 via-white/6 to-emerald-300/10 p-[1px]">
                    <div className="glass-strong rounded-[1.25rem] p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-slate-400">After</div>
                          <div className="mt-1 text-sm font-medium text-white">Clean, efficient surface</div>
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] text-emerald-200 ring-1 ring-emerald-300/15">
                          <Icon icon="lucide:check" className="text-sm"></Icon>
                          Performance stable
                        </span>
                      </div>

                      <div className="mt-4 rounded-2xl bg-[radial-gradient(600px_260px_at_40%_20%,rgba(0,212,255,.22),transparent_60%),linear-gradient(to_bottom,rgba(255,255,255,.06),rgba(255,255,255,.03))] p-4 ring-1 ring-white/10">
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-slate-300">Drag profile</div>
                          <div className="text-xs text-slate-300">Normalized</div>
                        </div>
                        <div className="mt-3 h-24 w-full rounded-xl bg-white/5 ring-1 ring-white/10 relative overflow-hidden">
                          <div className="absolute inset-0" style={{background: "linear-gradient(90deg, rgba(0,212,255,.0), rgba(0,212,255,.22), rgba(0,212,255,.0))", animation: "shimmer 2.8s ease-in-out infinite"}}></div>
                          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-ink-950/30 to-transparent"></div>
                          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 82 C 40 70, 70 55, 110 54 C 150 53, 190 58, 230 52 C 270 46, 290 38, 320 36" stroke="rgba(0,212,255,.85)" strokeWidth="3" />
                            <path d="M0 90 C 40 86, 70 80, 110 78 C 150 76, 190 80, 230 76 C 270 72, 290 68, 320 66" stroke="rgba(24,255,209,.35)" strokeWidth="2" />
                          </svg>
                        </div>
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                          <div className="text-[11px] text-slate-400">Fuel</div>
                          <div className="mt-1 text-sm text-white">↓</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                          <div className="text-[11px] text-slate-400">CO₂</div>
                          <div className="mt-1 text-sm text-white">↓</div>
                        </div>
                        <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
                          <div className="text-[11px] text-slate-400">Uptime</div>
                          <div className="mt-1 text-sm text-white">↑</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="glass rounded-2xl p-4 ring-1 ring-white/10">
                    <div className="text-xs text-slate-400">Operator priority</div>
                    <div className="mt-1 text-sm text-white">Measurable ROI</div>
                  </div>
                  <div className="glass rounded-2xl p-4 ring-1 ring-white/10">
                    <div className="text-xs text-slate-400">Compliance-ready</div>
                    <div className="mt-1 text-sm text-white">Reportable outcomes</div>
                  </div>
                  <div className="glass rounded-2xl p-4 ring-1 ring-white/10">
                    <div className="text-xs text-slate-400">Operational fit</div>
                    <div className="mt-1 text-sm text-white">Minimal downtime</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Vessel Biofouling & Inspection Log (Slider) */}
        <section className="reveal py-16 sm:py-20 relative bg-ink-900 border-b border-white/5">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_10%_80%,rgba(0,136,255,0.04),transparent_60%)]"></div>
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Tactical Inspection Archive</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>
                Vessel Biofouling & Species Translocation Log
              </h2>
              <p className="mt-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                Real-time camera and sensor telemetry captures organic colonization profiles. Examine the log database for typical fouling impacts.
              </p>
            </div>

            {/* Slider Container */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-white/6 via-white/4 to-white/2 p-[1px]">
              <div className="relative rounded-[2rem] bg-ink-950/80 ring-1 ring-white/10 overflow-hidden min-h-[440px] flex flex-col justify-between">
                
                {/* Active Slide Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
                  
                  {/* Left Column: Text Specs */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                        <Icon icon="lucide:folder-git-2" className="text-sm text-aqua-500"></Icon>
                        {inspectionSlides[currentSlide].category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-400/10 px-3 py-1 text-xs text-red-200 ring-1 ring-red-400/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
                        {inspectionSlides[currentSlide].severity}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold text-white font-headline" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>
                      {inspectionSlides[currentSlide].title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {inspectionSlides[currentSlide].description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
                      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Estimated Penalty</div>
                        <div className="mt-1 text-base font-semibold text-aqua-400 font-headline">{inspectionSlides[currentSlide].impact}</div>
                      </div>
                      <div className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider">Action Interval</div>
                        <div className="mt-1 text-base font-semibold text-white">Immediate ROV Pass</div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Visualization Card */}
                  <div className="lg:col-span-5">
                    <div className={`relative aspect-video rounded-2xl bg-gradient-to-br ${inspectionSlides[currentSlide].visualStyle} p-[1px] ring-1 ring-white/10 overflow-hidden flex flex-col justify-between p-6 shadow-glow`}>
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,212,255,0.15),transparent_60%)]"></div>
                      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:16px_16px]"></div>
                      
                      {/* Telemetry readouts */}
                      <div className="flex justify-between items-start z-10">
                        <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                          [ Telemetry HUD ]
                        </div>
                        <div className="font-mono text-[10px] text-aqua-400 uppercase tracking-widest animate-pulse">
                          SYS_NOMINAL // STABLE
                        </div>
                      </div>

                      {/* Illustrative SVG inside card representing bio-growth / sensor reading */}
                      <div className="my-4 flex items-center justify-center z-10">
                        <svg className="w-24 h-24 text-aqua-500/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="50" cy="50" r="35" strokeDasharray="4 6" className="animate-[spin_40s_linear_infinite]" />
                          <circle cx="50" cy="50" r="25" className="text-emerald-500/20" />
                          <path d="M50 15 L50 85 M15 50 L85 50" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
                          <path d="M30 30 C 40 45, 60 55, 70 70" stroke="rgba(24, 255, 209, 0.75)" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="70" cy="70" r="4" fill="rgba(24, 255, 209, 1)" />
                          <circle cx="30" cy="30" r="3" fill="rgba(255, 255, 255, 0.8)" />
                        </svg>
                      </div>

                      <div className="flex justify-between items-end z-10 border-t border-white/5 pt-3">
                        <div className="text-[10px] font-mono text-slate-400">DEPTH: 14.8M // SENSOR_4</div>
                        <div className="text-[10px] font-mono text-slate-400">LATENCY: 4.2ms</div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Slider Controls */}
                <div className="border-t border-white/10 px-6 py-5 bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button onClick={prevSlide} className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition text-slate-300 hover:text-white" aria-label="Previous Slide">
                      <Icon icon="lucide:chevron-left" className="text-xl"></Icon>
                    </button>
                    <button onClick={nextSlide} className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition text-slate-300 hover:text-white" aria-label="Next Slide">
                      <Icon icon="lucide:chevron-right" className="text-xl"></Icon>
                    </button>
                  </div>

                  {/* Page Counter */}
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, "0")}</span>
                    <span>/</span>
                    <span>{String(inspectionSlides.length).padStart(2, "0")}</span>
                  </div>

                  {/* Technical brief link */}
                  <a href="#contact" className="inline-flex items-center gap-1 text-xs text-aqua-400 hover:text-white transition">
                    OPEN TECHNICAL ARCHIVE
                    <Icon icon="lucide:arrow-right" className="text-xs"></Icon>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Solution</div>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>AquaXFoul ROV — clean and inspect in one mission.</h2>
                <p className="mt-4 max-w-2xl text-slate-200/90 leading-relaxed">Three capabilities, engineered to work together: reliable autonomy, inspection-grade perception, and environmentally disciplined operations.</p>
              </div>
              <Link id="solution-cta-link" href="#contact" className="inline-flex items-center gap-2 self-start rounded-2xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/12 hover:bg-white/8 hover:ring-white/18 transition lg:self-auto">
                <Icon icon="lucide:message-square" className="text-lg text-aqua-500"></Icon>
                Talk to an engineer
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="group grad-border rounded-[1.25rem] hover-rise">
                <div className="glass-strong rounded-[1.25rem] p-6 shadow-glow">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon icon="lucide:bot" className="text-2xl text-aqua-500"></Icon>
                    </span>
                    <span className="text-[11px] text-slate-400">Pillar 01</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Autonomous Cleaning</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">Stable contact and controlled passes for consistent coverage across complex hull geometry.</p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 relative overflow-hidden">
                    <div className="absolute -left-24 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-aqua-500/25 blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-400">Control</div>
                      <div className="text-xs text-slate-200">Adaptive</div>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-[74%] rounded-full bg-gradient-to-r from-aqua-400 to-aqua-600"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group rounded-[1.25rem] bg-gradient-to-br from-aqua-500/14 via-white/6 to-white/4 p-[1px] hover-rise">
                <div className="glass-strong rounded-[1.25rem] p-6 shadow-glow2">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon icon="lucide:scan-eye" className="text-2xl text-emerald-200"></Icon>
                    </span>
                    <span className="text-[11px] text-slate-400">Pillar 02</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>AI-Based Inspection</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">Computer vision that flags anomalies and documents condition—built for technical review.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-xs text-slate-400">Findings</div>
                      <div className="mt-1 text-sm text-white">Structured</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-xs text-slate-400">Evidence</div>
                      <div className="mt-1 text-sm text-white">Traceable</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group grad-border rounded-[1.25rem] hover-rise">
                <div className="glass-strong rounded-[1.25rem] p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon icon="lucide:leaf" className="text-2xl text-aqua-400"></Icon>
                    </span>
                    <span className="text-[11px] text-slate-400">Pillar 03</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Eco-Friendly Operation</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">Designed to reduce emissions through cleaner hulls and minimize operational disruption.</p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-400">Outcome</div>
                      <div className="text-xs text-emerald-200">Lower footprint</div>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-300">
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-1 ring-1 ring-emerald-300/15">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300"></span>
                        Emissions ↓
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-1 ring-1 ring-white/10">
                        <Icon icon="lucide:timer" className="text-sm"></Icon>
                        Downtime minimized
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="how" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">How it works</div>
            <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>A technical flow that stays operationally simple.</h2>
              <p className="max-w-2xl text-slate-200/90 leading-relaxed">AquaXFoul fits existing maritime workflows—deploy, execute, document, and deliver a report built for decisions.</p>
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-gradient-to-br from-white/6 via-white/4 to-white/2 p-[1px]">
              <div className="rounded-[1.5rem] bg-ink-850/70 ring-1 ring-white/10">
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">

                  <div className="relative p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:box" className="text-xl text-aqua-500"></Icon>
                      </span>
                      <div>
                        <div className="text-xs text-slate-400">Step 01</div>
                        <div className="text-sm font-medium text-white">Deployment</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Rapid setup from quay, service vessel, or drydock environment.</p>
                    <div className="hidden lg:block absolute right-0 top-1/2 h-px w-10 bg-gradient-to-r from-white/0 via-white/20 to-white/0"></div>
                  </div>

                  <div className="relative p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:route" className="text-xl text-emerald-200"></Icon>
                      </span>
                      <div>
                        <div className="text-xs text-slate-400">Step 02</div>
                        <div className="text-sm font-medium text-white">Navigation</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Guidance + stabilization for predictable motion near the hull.</p>
                    <div className="hidden lg:block absolute right-0 top-1/2 h-px w-10 bg-gradient-to-r from-white/0 via-white/20 to-white/0"></div>
                  </div>

                  <div className="relative p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:sparkles" className="text-xl text-aqua-500"></Icon>
                      </span>
                      <div>
                        <div className="text-xs text-slate-400">Step 03</div>
                        <div className="text-sm font-medium text-white">Cleaning</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Controlled passes to remove growth and restore surface performance.</p>
                    <div className="hidden lg:block absolute right-0 top-1/2 h-px w-10 bg-gradient-to-r from-white/0 via-white/20 to-white/0"></div>
                  </div>

                  <div className="relative p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:camera" className="text-xl text-slate-200"></Icon>
                      </span>
                      <div>
                        <div className="text-xs text-slate-400">Step 04</div>
                        <div className="text-sm font-medium text-white">Data Capture</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Inspection-grade imagery and mission telemetry, synchronized.</p>
                    <div className="hidden lg:block absolute right-0 top-1/2 h-px w-10 bg-gradient-to-r from-white/0 via-white/20 to-white/0"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                        <Icon icon="lucide:file-bar-chart" className="text-xl text-aqua-400"></Icon>
                      </span>
                      <div>
                        <div className="text-xs text-slate-400">Step 05</div>
                        <div className="text-sm font-medium text-white">Reporting</div>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">Clear outputs for shipowners, ports, and maintenance teams.</p>
                  </div>

                </div>

                <div className="border-t border-white/10 px-6 py-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                        <Icon icon="lucide:lock" className="text-sm text-slate-200"></Icon>
                        Secure data handling
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                        <Icon icon="lucide:clipboard-check" className="text-sm text-slate-200"></Icon>
                        Evidence trail
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                        <Icon icon="lucide:settings" className="text-sm text-slate-200"></Icon>
                        Operator-friendly controls
                      </span>
                    </div>
                    <Link id="how-cta-link" href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3.5 py-2 text-sm font-medium text-white ring-1 ring-white/12 hover:bg-white/8 hover:ring-white/18 transition">
                      <Icon icon="lucide:arrow-right" className="text-lg text-aqua-500"></Icon>
                      Get deployment details
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        <section id="technology" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Technology</div>
            <div className="mt-3 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Built like an instrument, operated like a tool.</h2>
                <p className="mt-4 text-slate-200/90 leading-relaxed">A modular ROV platform with perception, navigation, and cleaning subsystems engineered for repeatable performance in real maritime conditions.</p>

                <div className="mt-8 space-y-3">
                  <div className="glass hover-rise rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                          <Icon icon="lucide:eye" className="text-lg text-aqua-500"></Icon>
                        </span>
                        <div>
                          <div className="text-sm font-medium text-white">Computer Vision</div>
                          <div className="text-[11px] text-slate-400">Condition mapping and anomaly capture</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-300">Sensor fusion</span>
                    </div>
                  </div>
                  <div className="glass hover-rise rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                          <Icon icon="lucide:compass" className="text-lg text-emerald-200"></Icon>
                        </span>
                        <div>
                          <div className="text-sm font-medium text-white">Navigation System</div>
                          <div className="text-[11px] text-slate-400">Stable tracking near the hull</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-300">Control</span>
                    </div>
                  </div>
                  <div className="glass hover-rise rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                          <Icon icon="lucide:fan" className="text-lg text-aqua-400"></Icon>
                        </span>
                        <div>
                          <div className="text-sm font-medium text-white">Cleaning Mechanism</div>
                          <div className="text-[11px] text-slate-400">Consistent passes and coverage</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-300">Repeatable</span>
                    </div>
                  </div>
                  <div className="glass hover-rise rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                          <Icon icon="lucide:bar-chart-3" className="text-lg text-slate-200"></Icon>
                        </span>
                        <div>
                          <div className="text-sm font-medium text-white">Data Analytics</div>
                          <div className="text-[11px] text-slate-400">Actionable reporting for ROI decisions</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-300">Audit-ready</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-aqua-500/18 via-white/6 to-emerald-300/10 p-[1px]">
                  <div className="relative rounded-[1.5rem] bg-ink-850/70 ring-1 ring-white/10 p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs text-slate-400">Exploded overview</div>
                        <div className="mt-1 text-sm font-medium text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>AquaXFoul ROV assembly</div>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                        <Icon icon="lucide:layers" className="text-base text-aqua-500"></Icon>
                        Modular subsystems
                      </span>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
                      <div className="lg:col-span-7">
                        <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                          <img alt="ROV render" src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/15924618-fc57-4928-8cb4-8d0f5cc0415a/1777020286619-96d70117/8.png" className="h-[310px] w-full object-contain bg-gradient-to-b from-white/6 to-white/2" />
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-aqua-500/18 blur-2xl animate-[pulseGlow_6.5s_ease-in-out_infinite]"></div>
                            <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full bg-emerald-300/10 blur-2xl animate-[pulseGlow_8s_ease-in-out_infinite]"></div>
                          </div>

                          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1000 480" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.9">
                            <path d="M120 150 L360 140" stroke="rgba(0,212,255,.35)" strokeWidth="2" strokeDasharray="6 8" />
                            <path d="M655 220 L860 240" stroke="rgba(24,255,209,.22)" strokeWidth="2" strokeDasharray="6 8" />
                            <path d="M420 320 L210 360" stroke="rgba(255,255,255,.18)" strokeWidth="2" strokeDasharray="6 8" />
                          </svg>
                        </div>
                      </div>

                      <div className="lg:col-span-5 space-y-3">
                        <div className="glass-strong hover-rise rounded-2xl p-4 shadow-glow" style={{animation: "floaty 5.5s ease-in-out infinite"}}>
                          <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                              <Icon icon="lucide:eye" className="text-lg text-aqua-500"></Icon>
                            </span>
                            <div>
                              <div className="text-sm font-medium text-white">Computer Vision</div>
                              <div className="mt-1 text-sm text-slate-300">Underwater imagery optimized for inspection and traceability.</div>
                            </div>
                          </div>
                        </div>
                        <div className="glass-strong hover-rise rounded-2xl p-4" style={{animation: "floaty 6.2s ease-in-out infinite", animationDelay: ".25s"} as React.CSSProperties}>
                          <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                              <Icon icon="lucide:compass" className="text-lg text-emerald-200"></Icon>
                            </span>
                            <div>
                              <div className="text-sm font-medium text-white">Navigation</div>
                              <div className="mt-1 text-sm text-slate-300">Stable positioning and controlled trajectories near the hull.</div>
                            </div>
                          </div>
                        </div>
                        <div className="glass-strong hover-rise rounded-2xl p-4" style={{animation: "floaty 6.8s ease-in-out infinite", animationDelay: ".5s"} as React.CSSProperties}>
                          <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                              <Icon icon="lucide:fan" className="text-lg text-aqua-400"></Icon>
                            </span>
                            <div>
                              <div className="text-sm font-medium text-white">Cleaning Mechanism</div>
                              <div className="mt-1 text-sm text-slate-300">Engineered contact + repeatable passes for predictable coverage.</div>
                            </div>
                          </div>
                        </div>
                        <div className="glass-strong hover-rise rounded-2xl p-4" style={{animation: "floaty 7.4s ease-in-out infinite", animationDelay: ".75s"} as React.CSSProperties}>
                          <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                              <Icon icon="lucide:bar-chart-3" className="text-lg text-slate-200"></Icon>
                            </span>
                            <div>
                              <div className="text-sm font-medium text-white">Analytics</div>
                              <div className="mt-1 text-sm text-slate-300">Reports built for ROI decisions, stakeholders, and compliance.</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-7 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                            <Icon icon="lucide:badge-check" className="text-lg text-aqua-500"></Icon>
                          </span>
                          <div>
                            <div className="text-sm font-medium text-white">Trust indicators</div>
                            <div className="text-[11px] text-slate-400">Clear chain-of-custody and review-ready deliverables.</div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Secure exports</span>
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Mission logs</span>
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">Operator notes</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="glass rounded-2xl p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:wrench" className="text-xl text-slate-200"></Icon>
                  <div className="text-sm font-medium text-white">Maintainable</div>
                </div>
                <p className="mt-2 text-sm text-slate-300">Modular components support serviceability and iterative upgrades.</p>
              </div>
              <div className="glass rounded-2xl p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:shield" className="text-xl text-aqua-500"></Icon>
                  <div className="text-sm font-medium text-white">Operational safety</div>
                </div>
                <p className="mt-2 text-sm text-slate-300">Designed for predictable behavior and controlled contact near assets.</p>
              </div>
              <div className="glass rounded-2xl p-5 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <Icon icon="lucide:target" className="text-xl text-emerald-200"></Icon>
                  <div className="text-sm font-medium text-white">Outcome-focused</div>
                </div>
                <p className="mt-2 text-sm text-slate-300">Cleaning plus data outputs aligned to decisions and schedules.</p>
              </div>
            </div>

          </div>
        </section>

        <section id="impact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Impact</div>
            <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Performance improvements you can report.</h2>
              <p className="max-w-2xl text-slate-200/90 leading-relaxed">Fuel, emissions, and operational efficiency are measurable. AquaXFoul turns hull condition into a routine, auditable maintenance signal.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-[1.25rem] bg-gradient-to-br from-aqua-500/18 via-white/6 to-white/4 p-[1px]">
                <div className="glass-strong rounded-[1.25rem] p-6 shadow-glow">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-300">Fuel savings</div>
                    <Icon icon="lucide:gauge" className="text-xl text-aqua-500"></Icon>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <div className="text-5xl font-semibold tracking-tight text-white num" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>6–12</div>
                    <div className="pb-2 text-sm text-slate-300">%</div>
                  </div>
                  <div className="mt-3 text-sm text-slate-300">Typical range when drag-inducing growth is removed proactively.</div>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-aqua-400 to-aqua-600"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.25rem] bg-gradient-to-br from-emerald-300/14 via-white/6 to-aqua-500/10 p-[1px]">
                <div className="glass-strong rounded-[1.25rem] p-6 shadow-glow2">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-300">Emissions reduction</div>
                    <Icon icon="lucide:leaf" className="text-xl text-emerald-200"></Icon>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <div className="text-5xl font-semibold tracking-tight text-white num" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>5–10</div>
                    <div className="pb-2 text-sm text-slate-300">%</div>
                  </div>
                  <div className="mt-3 text-sm text-slate-300">Lower fuel burn translates directly to lower CO₂ per voyage.</div>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[60%] rounded-full bg-gradient-to-r from-emerald-200 to-aqua-500"></div>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.25rem] bg-gradient-to-br from-white/6 via-white/5 to-aqua-500/10 p-[1px]">
                <div className="glass-strong rounded-[1.25rem] p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-300">Operational efficiency</div>
                    <Icon icon="lucide:clock" className="text-xl text-aqua-400"></Icon>
                  </div>
                  <div className="mt-4 flex items-end gap-2">
                    <div className="text-5xl font-semibold tracking-tight text-white num" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>+1–3</div>
                    <div className="pb-2 text-sm text-slate-300">days</div>
                  </div>
                  <div className="mt-3 text-sm text-slate-300">Recovered schedule flexibility through predictable hull condition cycles.</div>
                  <div className="mt-5 h-2 rounded-full bg-white/10">
                    <div className="h-2 w-[52%] rounded-full bg-gradient-to-r from-aqua-400 to-white/40"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-white/5 p-6 ring-1 ring-white/10">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon icon="lucide:calculator" className="text-xl text-aqua-500"></Icon>
                    </span>
                    <div>
                      <div className="text-sm font-medium text-white">ROI-first evaluation</div>
                      <div className="text-[11px] text-slate-400">Outputs designed for fleet and port decision-makers.</div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-[11px] text-slate-400">Baseline</div>
                      <div className="mt-1 text-sm text-white">Hull condition</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-[11px] text-slate-400">Intervention</div>
                      <div className="mt-1 text-sm text-white">Mission logs</div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-[11px] text-slate-400">Outcome</div>
                      <div className="mt-1 text-sm text-white">Cost signal</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                  <Link id="impact-request-demo-link" href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-aqua-500 px-5 py-3 text-sm font-medium text-ink-950 shadow-glow hover:bg-[#2be2ff] transition">
                    <Icon icon="lucide:calendar" className="text-lg"></Icon>
                    Book a demo
                  </Link>
                  <Link id="impact-download-brief-link" href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/12 hover:bg-white/8 hover:ring-white/18 transition">
                    <Icon icon="lucide:file-down" className="text-lg text-aqua-500"></Icon>
                    Request technical brief
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="usecases" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Use cases</div>
            <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Designed for fleets, ports, and drydocks.</h2>
              <p className="max-w-2xl text-slate-200/90 leading-relaxed">AquaXFoul fits high-throughput operations and technical maintenance environments—without adding process friction.</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="group rounded-[1.25rem] bg-gradient-to-br from-white/6 via-white/5 to-aqua-500/10 p-[1px] hover-rise">
                <div className="glass-strong rounded-[1.25rem] p-6">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon icon="lucide:ship" className="text-2xl text-aqua-500"></Icon>
                    </span>
                    <span className="text-[11px] text-slate-400">01</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Commercial Shipping</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">Maintain efficiency between dockings and document condition across the fleet.</p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Outcome</span>
                      <span className="text-white">Fuel stability</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group grad-border rounded-[1.25rem] hover-rise">
                <div className="glass-strong rounded-[1.25rem] p-6 shadow-glow2">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon icon="lucide:container" className="text-2xl text-emerald-200"></Icon>
                    </span>
                    <span className="text-[11px] text-slate-400">02</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Ports</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">Offer hull maintenance as a service layer with clear reporting for stakeholders.</p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Outcome</span>
                      <span className="text-white">Higher throughput</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group rounded-[1.25rem] bg-gradient-to-br from-aqua-500/14 via-white/6 to-white/4 p-[1px] hover-rise">
                <div className="glass-strong rounded-[1.25rem] p-6 shadow-glow">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon icon="lucide:hard-hat" className="text-2xl text-aqua-400"></Icon>
                    </span>
                    <span className="text-[11px] text-slate-400">03</span>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Drydocks</h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">Validate hull condition pre/post work and capture evidence for handover.</p>
                  <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Outcome</span>
                      <span className="text-white">Audit-ready deliverables</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Accreditation & Synergy Grids */}
        <section className="reveal py-16 sm:py-20 relative bg-ink-950/20 border-t border-white/5">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 relative z-10 space-y-16">
            
            {/* Accreditation Grid */}
            <div>
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Governance & Standards</span>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-white font-headline" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>
                  Accredited by Global Leaders
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:award" className="text-3xl text-aqua-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">IMO Compliance</span>
                  <span className="text-[10px] text-slate-500 mt-1">GlobFouling Standards</span>
                </div>
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:anchor" className="text-3xl text-aqua-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Lloyd's Register</span>
                  <span className="text-[10px] text-slate-500 mt-1">Class Approval Ready</span>
                </div>
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:shield-alert" className="text-3xl text-aqua-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Green Marine</span>
                  <span className="text-[10px] text-slate-500 mt-1">Bio-Security Certified</span>
                </div>
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:verified" className="text-3xl text-aqua-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Vessel Safety Council</span>
                  <span className="text-[10px] text-slate-500 mt-1">Operational Audit</span>
                </div>
              </div>
            </div>

            {/* Synergy Grid */}
            <div>
              <div className="text-center mb-8">
                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Collaboration Network</span>
                <h3 className="mt-2 text-xl font-medium tracking-tight text-white font-headline" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>
                  AquaXFoul Synergies
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:cpu" className="text-2xl text-emerald-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Robotics Lab</span>
                  <span className="text-[9px] text-slate-500 mt-0.5">Guidance Systems</span>
                </div>
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:waves" className="text-2xl text-emerald-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Clean Oceans Co.</span>
                  <span className="text-[9px] text-slate-500 mt-0.5">Marine Debris Recov</span>
                </div>
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:recycle" className="text-2xl text-emerald-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Bhoomi Recyclers</span>
                  <span className="text-[9px] text-slate-500 mt-0.5">Circular Upcycling</span>
                </div>
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:leaf" className="text-2xl text-emerald-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Beyond Waste</span>
                  <span className="text-[9px] text-slate-500 mt-0.5">Zero Plastic Source</span>
                </div>
                <div className="glass rounded-2xl p-5 flex flex-col items-center justify-center text-center group hover:bg-white/5 hover:border-white/20 transition-all duration-300">
                  <Icon icon="lucide:microscope" className="text-2xl text-emerald-400 mb-2 group-hover:scale-110 transition-transform"></Icon>
                  <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Oceanic Science</span>
                  <span className="text-[9px] text-slate-500 mt-0.5">Eco Impact Audits</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-aqua-500/18 via-white/6 to-emerald-300/10 p-[1px]">
              <div className="relative rounded-[1.75rem] bg-ink-850/75 ring-1 ring-white/10 px-6 py-10 sm:px-10">
                <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-aqua-500/16 blur-3xl" style={{animation: "pulseGlow 7s ease-in-out infinite"}}></div>
                <div className="absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" style={{animation: "pulseGlow 8.5s ease-in-out infinite"}}></div>

                <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-6">
                    <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Contact</div>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Book a demo. Validate ROI. Deploy with confidence.</h2>
                    <p className="mt-4 text-slate-200/90 leading-relaxed">Talk to the team about deployment workflows, reporting outputs, and integration with fleet or port operations.</p>

                    <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="glass rounded-2xl p-4 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                          <Icon icon="lucide:shield-check" className="text-xl text-aqua-500"></Icon>
                          <div className="text-sm font-medium text-white">No clutter, no noise</div>
                        </div>
                        <div className="mt-2 text-sm text-slate-300">A single form. Fast response. Technical answers.</div>
                      </div>
                      <div className="glass rounded-2xl p-4 ring-1 ring-white/10">
                        <div className="flex items-center gap-3">
                          <Icon icon="lucide:badge-check" className="text-xl text-emerald-200"></Icon>
                          <div className="text-sm font-medium text-white">Trust-first</div>
                        </div>
                        <div className="mt-2 text-sm text-slate-300">Clear deliverables and evidence-ready reporting.</div>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Link id="contact-book-demo-link" href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-aqua-500 px-5 py-3 text-sm font-medium text-ink-950 shadow-glow hover:bg-[#2be2ff] transition">
                        <Icon icon="lucide:calendar" className="text-lg"></Icon>
                        Book a Demo
                      </Link>
                      <Link id="contact-partner-link" href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/12 hover:bg-white/8 hover:ring-white/18 transition">
                        <Icon icon="lucide:handshake" className="text-lg text-aqua-500"></Icon>
                        Partner With Us
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-6">
                    <form action="https://formsubmit.co/aquaxfoul@gmail.com" method="POST" className="relative rounded-[1.25rem] bg-white/5 p-6 ring-1 ring-white/12">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-white" style={{fontFamily: "Clash Grotesk, Satoshi, ui-sans-serif"}}>Request a demo</div>
                          <div className="mt-1 text-xs text-slate-400">We reply within 1–2 business days.</div>
                        </div>
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                          <Icon icon="lucide:lock" className="text-base text-slate-200"></Icon>
                          Secure
                        </span>
                      </div>

                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="text-xs text-slate-300">Name</span>
                          <input type="text" name="name" required placeholder="Alex Morgan" className="mt-2 w-full rounded-xl bg-ink-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-aqua-500/70" />
                        </label>
                        <label className="block">
                          <span className="text-xs text-slate-300">Work email</span>
                          <input type="email" name="email" required placeholder="alex@operator.com" className="mt-2 w-full rounded-xl bg-ink-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-aqua-500/70" />
                        </label>
                        <label className="block sm:col-span-2">
                          <span className="text-xs text-slate-300">Organization</span>
                          <input type="text" name="organization" placeholder="Fleet / Port / Drydock" className="mt-2 w-full rounded-xl bg-ink-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-aqua-500/70" />
                        </label>
                        <label className="block sm:col-span-2">
                          <span className="text-xs text-slate-300">What do you need?</span>
                          <textarea name="message" required rows={4} placeholder="Hull cleaning cadence, inspection outputs, pilot scope, vessel type..." className="mt-2 w-full rounded-xl bg-ink-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-aqua-500/70"></textarea>
                        </label>
                      </div>

                      {/* Hidden configurations for FormSubmit */}
                      <input type="hidden" name="_subject" value="New Demo Request from AquaXFoul Landing Page!" />
                      <input type="hidden" name="_captcha" value="false" />

                      <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-aqua-500 px-5 py-3 text-sm font-medium text-ink-950 shadow-glow hover:bg-[#2be2ff] transition">
                        <Icon icon="lucide:send" className="text-lg"></Icon>
                        Send request
                      </button>

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                        <div className="inline-flex items-center gap-2">
                          <Icon icon="lucide:check" className="text-base text-emerald-200"></Icon>
                          No spam. Technical follow-up only.
                        </div>
                        <a id="contact-email-link" href="mailto:aquaxfoul@gmail.com" className="text-slate-300 hover:text-white transition">Prefer email? aquaxfoul@gmail.com</a>
                      </div>
                    </form>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="glass rounded-2xl p-4 ring-1 ring-white/10">
                        <div className="text-xs text-slate-400">Primary outcomes</div>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-slate-200">Fuel stability</span>
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-slate-200">Condition evidence</span>
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-slate-200">Operational uptime</span>
                        </div>
                      </div>
                      <div className="glass rounded-2xl p-4 ring-1 ring-white/10">
                        <div className="text-xs text-slate-400">Typical stakeholders</div>
                        <div className="mt-2 flex flex-wrap gap-2 text-xs">
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-slate-200">Technical superintendent</span>
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-slate-200">Port ops</span>
                          <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10 text-slate-200">Drydock manager</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <footer className="relative mt-10 border-t border-white/10 pt-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-slate-400">© AquaXFoul. Autonomous maritime robotics for cleaner oceans and efficient shipping.</div>
                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <Link id="footer-technology-link" href="#technology" className="text-slate-300 hover:text-white transition">Technology</Link>
                      <Link id="footer-impact-link" href="#impact" className="text-slate-300 hover:text-white transition">Impact</Link>
                      <Link id="footer-contact-link" href="#contact" className="text-slate-300 hover:text-white transition">Contact</Link>
                    </div>
                  </div>
                </footer>

              </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
