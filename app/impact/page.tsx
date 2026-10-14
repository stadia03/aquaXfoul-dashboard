import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-surface text-on-surface">
      
{/* TopNavBar */}
<nav className="bg-[#101416] dark:bg-[#101416] font-['Space_Grotesk'] tracking-tight rounded-none w-full top-0 sticky z-50">
<div className="flex justify-between items-center px-12 py-6 w-full max-w-[1920px] mx-auto">
<Link href="/"><div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-8 h-8 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-2xl font-bold tracking-tighter text-[#A7C8FF] font-headline">AquaXFoul</div>
</div></Link>
<div className="hidden md:flex items-center gap-8">
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] transition-colors duration-300" href="/technology">Technology</Link>
<Link className="text-[#A7C8FF] border-b-2 border-[#A7C8FF] pb-1" href="/impact">Impact</Link>
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] transition-colors duration-300" href="/impact#business-model">Business Model</Link>
</div>
<Link href="/investors"><button className="bg-primary text-on-primary px-6 py-2 font-bold hover:bg-surface-tint transition-colors duration-200">
                Book Consultation
            </button></Link>
</div>
</nav>
<main className="w-full">
{/* Hero Section */}
<section className="reveal relative h-[614px] flex items-center px-12 overflow-hidden bg-surface-container-low">
<div className="absolute inset-0 z-0">
<img alt="Maritime infrastructure" className="reveal w-full h-full object-cover opacity-30 grayscale" data-alt="Deep sea environment with dark blue lighting, submerged industrial structures, and high contrast metallic surfaces in a cinematic moody atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz19GiErpPSwylXWfXN8abJdWicK6veBN_DqxfS1sBXshcJdy6WZudKjVovWGboBexB6Ak2GJa0xR8wXpbFz1q-Jgvi1HV8DGXba6WOc7cMPK5sKlwEZbUGhhoIe5O1dVa1sdUxHM6fgglNTMfbVRPLF9B-IxO0tGYBUGcB2rhChyjvaCd9EHEjlc5-ksCHyDipvtNdnan0tgecuRvHZqjVB9_bEXcArHIMFdA0FhQ4E7R0gku52eUaA7rWehXaT1wTG6WmTI47m2r"/>
<div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl">
<div className="flex items-center gap-3 mb-6">
<span className="w-12 h-[1px] bg-tertiary"></span>
<span className="text-tertiary font-label tracking-[0.2em] uppercase text-xs">Sustainability &amp; Performance</span>
</div>
<h1 className="reveal text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                    Measurable <br/><span className="text-primary">Operational Gains</span>
</h1>
<p className="reveal text-xl text-on-surface-variant max-w-2xl font-light leading-relaxed">
                    Transitioning maritime operations from reactive maintenance to autonomous optimization. Precise robotics, substantial fuel reduction, and total compliance with international emission standards.
                </p>
</div>
{/* Status HUD Overlay */}
<div className="absolute bottom-12 right-12 bg-secondary-container/30 backdrop-blur-md p-4 border-l border-tertiary/30 hidden lg:block">
<div className="flex flex-col gap-1 font-mono text-[10px] text-on-secondary-container">
<div className="flex justify-between gap-8"><span>LATITUDE</span> <span>51.5074° N</span></div>
<div className="flex justify-between gap-8"><span>LONGITUDE</span> <span>0.1278° W</span></div>
<div className="flex justify-between gap-8"><span>DEP_UNIT_ID</span> <span>AXF-992-B</span></div>
<div className="flex justify-between gap-8"><span>STATUS</span> <span className="text-tertiary">OPTIMAL</span></div>
</div>
</div>
</section>
{/* Impact Metrics: Fuel & CO2 */}
<section className="reveal py-24 px-12 bg-surface">
<div className="max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="space-y-12">
<h2 className="reveal text-4xl font-bold tracking-tight">Environmental Compliance <br/>&amp; Efficiency</h2>
<div className="space-y-8">
<div className="p-8 bg-surface-container-high relative overflow-hidden group">
<div className="scanline absolute inset-0 pointer-events-none"></div>
<div className="relative z-10">
<span className="text-tertiary text-sm font-label mb-2 block tracking-widest uppercase">Fuel Savings Range</span>
<div className="text-7xl font-bold tracking-tighter font-headline flex items-baseline gap-2">
                                        12-18<span className="text-3xl text-on-surface-variant">%</span>
</div>
<p className="reveal text-on-surface-variant mt-4 leading-relaxed">Average annual reduction in fuel consumption across hull-fouling prone routes.</p>
</div>
</div>
<div className="p-8 bg-surface-container-low border-l-4 border-primary">
<span className="text-primary text-sm font-label mb-2 block tracking-widest uppercase">CO2 Reduction Targets</span>
<div className="flex items-center gap-6 mt-4">
<div className="flex-1 h-2 bg-surface-container-highest">
<div className="h-full bg-primary" style={{}}></div>
</div>
<span className="text-2xl font-bold font-headline">IMO 2030</span>
</div>
<div className="flex items-center gap-6 mt-6">
<div className="flex-1 h-2 bg-surface-container-highest">
<div className="h-full bg-tertiary" style={{}}></div>
</div>
<span className="text-2xl font-bold font-headline">IMO 2050</span>
</div>
<p className="reveal text-on-surface-variant text-sm mt-6">Aligned with International Maritime Organization (IMO) decarbonization trajectories.</p>
</div>
</div>
</div>
{/* ROI Estimation Visualization */}
<div className="bg-surface-container-low p-12 flex flex-col justify-between">
<div>
<h3 className="reveal text-2xl font-bold mb-6">ROI Estimation Visualization</h3>
<div className="aspect-square w-full relative border border-outline-variant/20 flex items-center justify-center">
{/* Mock Telemetry Visualization */}
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<div className="w-[80%] h-[80%] rounded-full border border-primary animate-pulse"></div>
<div className="w-[60%] h-[60%] rounded-full border border-tertiary/50"></div>
</div>
<div className="relative w-full h-full p-8 flex flex-col justify-end">
<div className="grid grid-cols-4 items-end gap-4 h-64">
<div className="bg-surface-container-highest h-[20%] relative group">
<div className="absolute -top-8 left-0 text-[10px] text-outline">Q1</div>
</div>
<div className="bg-surface-container-highest h-[45%] relative">
<div className="absolute -top-8 left-0 text-[10px] text-outline">Q2</div>
</div>
<div className="bg-primary h-[70%] relative">
<div className="absolute -top-8 left-0 text-[10px] text-primary">ROI BREAKEVEN</div>
</div>
<div className="bg-tertiary h-[95%] relative">
<div className="absolute -top-8 left-0 text-[10px] text-tertiary">PROFIT PEAK</div>
</div>
</div>
<div className="mt-12 space-y-4">
<div className="flex justify-between items-center text-sm border-b border-outline-variant/10 pb-2">
<span className="text-on-surface-variant">Estimated Payback Period</span>
<span className="font-bold">6.2 Months</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-outline-variant/10 pb-2">
<span className="text-on-surface-variant">Net Annual Gain per Vessel</span>
<span className="font-bold text-tertiary">$420,000+</span>
</div>
</div>
</div>
</div>
</div>
<p className="reveal text-xs text-outline italic mt-8">*Calculated based on standard VLCC fuel consumption rates at $600/MT.</p>
</div>
</div>
</div>
</section>
{/* Business Model: Robotics-as-a-Service */}
<section id="business-model" className="reveal py-24 px-12 bg-surface-container-low">
<div className="max-w-[1920px] mx-auto">
<div className="mb-16">
<h2 className="reveal text-4xl font-bold tracking-tight mb-4">Robotics-as-a-Service for Maritime Fleets</h2>
<p className="reveal text-on-surface-variant max-w-2xl">Eliminate capital expenditure with our subscription-based cleaning and monitoring model. Pay for performance, not equipment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
{/* Bulk Carriers */}
<div className="bg-surface p-10 flex flex-col justify-between min-h-[500px] hover:bg-surface-container-high transition-colors duration-300">
<div>
<div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary" data-icon="anchor">anchor</span>
</div>
<h3 className="reveal text-2xl font-bold mb-4">Bulk Carriers</h3>
<p className="reveal text-on-surface-variant text-sm mb-8">Optimized for tramp shipping routes where fouling intensity varies significantly by region.</p>
<ul className="space-y-4 text-sm font-light">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Per-Clean Pricing Available
                                </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Quarterly Hull Inspections
                                </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Port-agnostic Deployment
                                </li>
</ul>
</div>
<div className="mt-12">
<div className="text-xs text-outline mb-1 uppercase tracking-tighter">Starting at</div>
<div className="text-3xl font-bold font-headline mb-6">$8,500 <span className="text-sm font-normal text-on-surface-variant">/ cycle</span></div>
<Link href="/investors"><button className="w-full border border-outline-variant py-3 text-sm font-bold hover:bg-primary hover:text-on-primary transition-all">Select Plan</button></Link>
</div>
</div>
{/* Tankers */}
<div className="bg-surface-container-highest p-10 flex flex-col justify-between min-h-[500px] relative">
<div className="absolute top-0 right-0 bg-tertiary text-on-tertiary text-[10px] font-bold px-4 py-1 tracking-widest">MOST POPULAR</div>
<div>
<div className="w-12 h-12 bg-tertiary/10 flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-tertiary" data-icon="water_drop">water_drop</span>
</div>
<h3 className="reveal text-2xl font-bold mb-4">Tankers (VLCC/Suez)</h3>
<p className="reveal text-on-surface-variant text-sm mb-8">High-frequency maintenance for long-haul energy transport where drag reduction is critical.</p>
<ul className="space-y-4 text-sm font-light">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Full Subscription Model
                                </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    24/7 Telemetry Stream
                                </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Priority Response Fleet
                                </li>
</ul>
</div>
<div className="mt-12">
<div className="text-xs text-on-surface-variant mb-1 uppercase tracking-tighter">Annual Subscription</div>
<div className="text-3xl font-bold font-headline mb-6">$75,000 <span className="text-sm font-normal text-on-surface-variant">/ vessel</span></div>
<Link href="/investors"><button className="w-full bg-primary text-on-primary py-3 text-sm font-bold hover:brightness-110 transition-all">Request Quote</button></Link>
</div>
</div>
{/* Container Ships */}
<div className="bg-surface p-10 flex flex-col justify-between min-h-[500px] hover:bg-surface-container-high transition-colors duration-300">
<div>
<div className="w-12 h-12 bg-primary/10 flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary" data-icon="inventory_2">inventory_2</span>
</div>
<h3 className="reveal text-2xl font-bold mb-4">Container Ships</h3>
<p className="reveal text-on-surface-variant text-sm mb-8">Schedule-driven cleaning integrated into port turnarounds without operational downtime.</p>
<ul className="space-y-4 text-sm font-light">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Hybrid Usage Credits
                                </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Carbon Credit Reporting
                                </li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="check_circle">check_circle</span>
                                    Automated Log Submission
                                </li>
</ul>
</div>
<div className="mt-12">
<div className="text-xs text-outline mb-1 uppercase tracking-tighter">Starting at</div>
<div className="text-3xl font-bold font-headline mb-6">Custom <span className="text-sm font-normal text-on-surface-variant">Enterprise</span></div>
<Link href="/investors"><button className="w-full border border-outline-variant py-3 text-sm font-bold hover:bg-primary hover:text-on-primary transition-all">Select Plan</button></Link>
</div>
</div>
</div>
</div>
</section>
{/* CTA Section */}
<section className="reveal py-24 px-12 bg-surface text-center">
<div className="max-w-4xl mx-auto">
<h2 className="reveal text-5xl font-bold tracking-tighter mb-8 leading-tight">Ready to optimize your fleet's environmental footprint?</h2>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<Link href="/impact#business-model"><button className="px-12 py-5 bg-primary text-on-primary font-bold text-lg hover:bg-surface-tint transition-all">Calculate Your ROI</button></Link>
<Link href="/technology"><button className="px-12 py-5 border border-outline-variant font-bold text-lg hover:bg-surface-container-low transition-all">Download Technical Specs</button></Link>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-[#101416] font-['Inter'] tabular-nums text-sm rounded-none w-full border-t border-[#44474E]/20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-[1920px] mx-auto">
<div className="col-span-1">
<Link href="/"><div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-6 h-6 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-lg font-bold text-[#A7C8FF] font-headline mb-6">AquaXFoul</div>
</div></Link>
<p className="reveal text-[#8E918F] leading-relaxed">Pioneering sub-aquatic robotic maintenance for the modern merchant fleet. Precision-engineered in Scandinavia.</p>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-6">Explore</h4>
<ul className="space-y-4">
<li><Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/technology">Technology</Link></li>
<li><Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Sustainability</Link></li>
<li><Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Partnerships</Link></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-6">Resources</h4>
<ul className="space-y-4">
<li><Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Technical Specs</Link></li>
<li><Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Privacy Policy</Link></li>
<li><Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Newsletter</Link></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-6">Contact</h4>
<div className="text-[#8E918F] space-y-2">
<p>contact@aquaxfoul.io</p>
<p>+47 22 33 44 55</p>
<p>Oslo Innovation District, Norway</p>
</div>
</div>
</div>
<div className="px-12 py-8 border-t border-[#44474E]/10 flex justify-between items-center text-[#8E918F]">
<div>© 2024 AquaXFoul. Technical Maritime Excellence.</div>
<div className="flex gap-6">
<Link className="hover:text-[#A7C8FF]" href="/">LN</Link>
<Link className="hover:text-[#A7C8FF]" href="/">TW</Link>
<Link className="hover:text-[#A7C8FF]" href="/">YT</Link>
</div>
</div>
</footer>

    </main>
  );
}
