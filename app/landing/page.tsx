import Link from "next/link";
export default function LandingPage() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* Original Landing Page Variant */}
      
{/* TopNavBar */}
<nav className="bg-[#101416] dark:bg-[#101416] rounded-none w-full top-0 sticky z-50 flex justify-between items-center px-12 py-6 w-full max-w-[1920px] mx-auto transition-colors duration-300">
<Link href="/"><div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-8 h-8 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-2xl font-bold tracking-tighter text-[#A7C8FF] font-headline">AquaXFoul</div>
</div></Link>
<div className="hidden md:flex items-center space-x-10 font-headline tracking-tight text-sm uppercase">
<Link className="text-[#A7C8FF] border-b-2 border-[#A7C8FF] pb-1 transition-colors duration-300" href="/technology">Technology</Link>
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] transition-colors duration-300" href="/impact">Impact</Link>
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] transition-colors duration-300" href="/impact#business-model">Business Model</Link>
</div>
<Link href="/investors"><button className="bg-primary text-on-primary px-6 py-2.5 font-headline font-bold text-sm tracking-tight hover:brightness-110 transition-all active:scale-[0.98]">
            Book Consultation
        </button></Link>
</nav>
{/* Hero Section */}
<section className="reveal relative h-[921px] flex items-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img className="reveal w-full h-full object-cover opacity-60 grayscale-[40%]" data-alt="industrial underwater drone robot cleaning a massive steel ship hull" src="/hero-bg.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
<div className="scanline-overlay absolute inset-0"></div>
</div>
<div className="relative z-10 px-12 max-w-5xl">
<div className="mb-6 flex items-center gap-4">
<span className="w-12 h-[1px] bg-tertiary"></span>
<span className="font-label text-tertiary tracking-[0.2em] text-xs uppercase font-bold">Maritime Autonomy v2.4</span>
</div>
<h1 className="reveal font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface mb-8 leading-[0.95]">
                Cut Fuel Costs.<br/>
<span className="text-primary">Control Biofouling.</span><br/>
                Reduce Emissions.
            </h1>
<p className="reveal font-body text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
                Autonomous AI-powered hull-cleaning ROVs operating directly at ports and anchorages — no drydock required.
            </p>
<div className="flex flex-wrap gap-6">
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 font-headline font-bold tracking-tight hover:brightness-110 transition-all flex items-center gap-3">
                    Book Technical Consultation
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="border border-outline-variant/30 text-on-surface px-8 py-4 font-headline font-bold tracking-tight hover:bg-surface-container-high transition-all flex items-center gap-3">
                    Download Technical Overview
                    <span className="material-symbols-outlined" data-icon="download">download</span>
</button>
</div>
</div>
{/* Telemetry HUD */}
<div className="absolute bottom-12 right-12 hidden lg:block">
<div className="bg-surface-container-low/60 backdrop-blur-xl p-6 border-l-2 border-tertiary font-label tabular-nums">
<div className="flex justify-between gap-12 mb-4">
<span className="text-outline-variant text-[10px] uppercase tracking-widest font-bold">ROV Status</span>
<span className="text-tertiary text-[10px] uppercase font-bold flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
                        Operational
                    </span>
</div>
<div className="space-y-2 text-sm">
<div className="flex justify-between gap-12">
<span className="text-on-surface-variant">Depth</span>
<span className="text-primary">12.44m</span>
</div>
<div className="flex justify-between gap-12">
<span className="text-on-surface-variant">Torque</span>
<span className="text-primary">420 Nm</span>
</div>
<div className="flex justify-between gap-12">
<span className="text-on-surface-variant">Coords</span>
<span className="text-primary">51.5074° N, 0.1278° W</span>
</div>
</div>
</div>
</div>
</section>
{/* Problem Section */}
<section className="reveal py-32 bg-surface-container-low relative">
<div className="px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
<div>
<h2 className="reveal font-headline text-5xl font-bold tracking-tighter mb-8 leading-tight">
                        Biofouling Is a<br/>Direct Operational Cost.
                    </h2>
<p className="reveal text-on-surface-variant text-lg max-w-lg mb-12">
                        Inefficient hull maintenance results in significant hydro-dynamic drag, leading to massive financial and environmental penalties.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-surface-container-high p-8 border-t-4 border-error">
<div className="text-error font-headline text-4xl font-bold mb-2">30%</div>
<div className="text-on-surface font-headline font-bold text-xs tracking-widest uppercase mb-4">Fuel Penalty</div>
<p className="reveal text-on-surface-variant text-sm">Increased fuel consumption due to slime and barnacle buildup.</p>
</div>
<div className="bg-surface-container-high p-8 border-t-4 border-error">
<div className="text-error font-headline text-4xl font-bold mb-2">12k</div>
<div className="text-on-surface font-headline font-bold text-xs tracking-widest uppercase mb-4">CO2 (Tons/Yr)</div>
<p className="reveal text-on-surface-variant text-sm">Excess emissions per container ship from inefficient drag.</p>
</div>
<div className="bg-surface-container-high p-8 border-t-4 border-error">
<div className="text-error font-headline text-4xl font-bold mb-2">36m</div>
<div className="text-on-surface font-headline font-bold text-xs tracking-widest uppercase mb-4">Drydock Delay</div>
<p className="reveal text-on-surface-variant text-sm">Months between traditional haul-outs for manual cleaning.</p>
</div>
</div>
</div>
</div>
</section>
{/* Solution Section (Asymmetric Grid) */}
<section className="reveal py-32 bg-surface">
<div className="px-12 max-w-[1920px] mx-auto">
<div className="mb-24">
<span className="font-label text-tertiary tracking-[0.2em] text-xs uppercase font-bold block mb-4">The Solution</span>
<h2 className="reveal font-headline text-6xl font-bold tracking-tighter">Autonomous Hull Cleaning System</h2>
</div>
<div className="grid grid-cols-12 gap-12 items-stretch">
{/* AI Detection Feature */}
<div className="col-span-12 lg:col-span-7 bg-surface-container-low overflow-hidden flex flex-col md:flex-row">
<div className="p-12 flex-1">
<div className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="visibility">visibility</div>
<h3 className="reveal font-headline text-3xl font-bold mb-6">Real-Time AI Detection</h3>
<p className="reveal text-on-surface-variant leading-relaxed mb-8">
                            High-fidelity sonar and optical sensors mapped to neural networks detect bio-colonies with sub-millimeter precision.
                        </p>
<ul className="space-y-4 font-label text-sm uppercase tracking-wider text-primary">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-primary"></span>
                                Multi-Spectral Analysis
                            </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-primary"></span>
                                Edge Compute Processing
                            </li>
</ul>
</div>
<div className="w-full md:w-1/2 min-h-[300px] relative">
<img className="reveal w-full h-full object-cover" data-alt="digital blueprint of a high-tech robotic device with data overlays and green scanning lines on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEyIPd4_72qNqtBfvX1k3Eg_-ziDptQK7Q3kvGzDk-kTgKbSxtD0lxsmJY6TNKbJi66LiFefp48QgM7MloHiXVSxE9AecsjuxYNY-dwQMI00fyy7gNr2fCbYz25IZiA8OaLmG5pmP17v0Zo_2KQ_Ckhm_ENE9GSpJhh3dIby6YPzked9YdzQfNMZuYr0_kcI_qgie50ujzTVHqHNzXtxTY5v3lBylxl_fGROx58zJ8t91MygW7xnoeBkPa1Md4I1BknE_0Tkt_enYP"/>
<div className="scanline-overlay absolute inset-0"></div>
</div>
</div>
{/* Dual-Module Structure */}
<div className="col-span-12 lg:col-span-5 bg-surface-container-high relative overflow-hidden group">
<img className="reveal absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 group-hover:scale-110" data-alt="macro close-up of high-performance robotic joints and carbon fiber mechanical parts with blue atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCel01fSRmUJLa6kdMgREXtfjIU1uSWcp0bstFKPIbsEJR5AikbUwCgevMqpqIrLl5ghAQgF0F4qgW5gSHvIz1bm3qedEQNwbgvIUYRST3SBEgcnlZ1OnBz7FTZX3kSJeRqE8oq8-bZdoXNkbtYeNTg54t9c4NC7rPz4WbTN6FSU8IVSyaYDG1RjqAFsTDyWJ-nIj5wexcIudB0fSQyaz8mlxFLEMw0arCMtfFNA6UTkME5aTItfP1u_IlhRgfbeTueHd7cQtogwrcz"/>
<div className="relative z-10 p-12 h-full flex flex-col justify-end">
<h3 className="reveal font-headline text-3xl font-bold mb-4">Dual-Module Integrity</h3>
<p className="reveal text-on-surface-variant leading-relaxed">
                            Interdependent module architecture ensures constant contact with curved hull surfaces even in strong currents.
                        </p>
</div>
</div>
{/* Torque Controlled Joints */}
<div className="col-span-12 lg:col-span-4 bg-[#191C1E] p-12 border-l border-outline-variant/20">
<div className="material-symbols-outlined text-tertiary text-4xl mb-6" data-icon="settings_input_component">settings_input_component</div>
<h3 className="reveal font-headline text-2xl font-bold mb-4">Torque-Controlled Joints</h3>
<p className="reveal text-on-surface-variant text-sm leading-relaxed mb-8">
                        Hydraulic actuators provide precise pressure application, removing heavy growth without damaging expensive anti-fouling coatings.
                    </p>
<div className="h-1 bg-surface-container-highest w-full relative">
<div className="absolute inset-y-0 left-0 bg-tertiary w-3/4"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] font-label uppercase text-outline">
<span>Min Force</span>
<span>Max Output</span>
</div>
</div>
{/* Operational Ease */}
<div className="col-span-12 lg:col-span-8 bg-primary-container p-12 flex flex-col justify-between">
<div>
<h3 className="reveal font-headline text-4xl font-bold text-primary mb-6">Zero Operation Downtime</h3>
<p className="reveal text-on-primary-container text-lg max-w-xl">
                            Our ROVs are deployed while you load or unload cargo. We operate at any commercial port globally, transforming maintenance from a major event into a seamless background task.
                        </p>
</div>
<div className="flex items-center gap-12 mt-12 overflow-x-auto pb-4">
<div className="flex flex-col gap-2 shrink-0">
<span className="text-xs uppercase tracking-widest text-on-primary-container/60 font-bold">Port Coverage</span>
<span className="font-headline text-2xl font-bold">Global / 24-7</span>
</div>
<div className="flex flex-col gap-2 shrink-0">
<span className="text-xs uppercase tracking-widest text-on-primary-container/60 font-bold">Deployment Time</span>
<span className="font-headline text-2xl font-bold">&lt; 45 Minutes</span>
</div>
<div className="flex flex-col gap-2 shrink-0">
<span className="text-xs uppercase tracking-widest text-on-primary-container/60 font-bold">Coating Integrity</span>
<span className="font-headline text-2xl font-bold">Non-Abrasive</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-[#101416] border-t border-[#44474E]/20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-[1920px] mx-auto font-body text-sm">
<div className="col-span-1 md:col-span-1">
<Link href="/"><div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-6 h-6 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-lg font-bold text-[#A7C8FF] font-headline mb-6">AquaXFoul</div>
</div></Link>
<p className="reveal text-[#8E918F] leading-relaxed max-w-xs">
                    Pioneering robotic hull maintenance for the next era of sustainable maritime shipping.
                </p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#A7C8FF] font-bold uppercase tracking-widest text-xs mb-2">Technical</span>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Technical Specs</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">ROV Fleet</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Deployment Logic</Link>
</div>
<div className="flex flex-col gap-4">
<span className="text-[#A7C8FF] font-bold uppercase tracking-widest text-xs mb-2">Company</span>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/investors">Contact</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Privacy Policy</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Newsletter</Link>
</div>
<div className="flex flex-col gap-6">
<span className="text-[#A7C8FF] font-bold uppercase tracking-widest text-xs mb-2">Subscribe to Specs</span>
<div className="flex">
<input className="bg-surface-container-low border-none focus:ring-1 focus:ring-primary text-sm w-full py-3 px-4 outline-none placeholder:text-outline-variant" placeholder="Email Address" type="email"/>
<button className="bg-primary text-on-primary px-4 hover:brightness-110 transition-all">
<span className="material-symbols-outlined" data-icon="send">send</span>
</button>
</div>
</div>
</div>
<div className="px-12 py-8 border-t border-outline-variant/10 text-center text-[#8E918F] text-xs tracking-tight tabular-nums">
            © 2024 AquaXFoul. Technical Maritime Excellence. All Rights Reserved.
        </div>
</footer>

    </main>
  );
}
