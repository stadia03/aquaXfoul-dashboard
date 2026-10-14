import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary/30">
      
{/* Top Navigation Bar */}
<nav className="bg-[#101416] text-[#A7C8FF] font-['Space_Grotesk'] tracking-tight rounded-none w-full top-0 sticky z-50 transition-colors duration-300">
<div className="flex justify-between items-center px-12 py-6 w-full max-w-[1920px] mx-auto">
<Link href="/"><div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-8 h-8 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-2xl font-bold tracking-tighter text-[#A7C8FF] font-headline">AquaXFoul</div>
</div></Link>
<div className="hidden md:flex items-center space-x-12">
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] transition-colors duration-200" href="/technology">Technology</Link>
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] transition-colors duration-200" href="/impact">Impact</Link>
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] transition-colors duration-200" href="/impact#business-model">Business Model</Link>
<Link className="text-[#A7C8FF] border-b-2 border-[#A7C8FF] pb-1" href="/investors">Investors</Link>
</div>
<Link href="/investors"><button className="bg-primary text-on-primary px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-surface-tint transition-all duration-300 shadow-lg">
                Book Consultation
            </button></Link>
</div>
</nav>
<main className="relative">
{/* Hero Section */}
<section className="reveal relative min-h-[900px] flex items-center px-12 overflow-hidden bg-surface py-20">
<div className="absolute inset-0 z-0 opacity-20">
<div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface z-10"></div>
<div className="grid grid-cols-3 gap-4 p-4 h-full">
<img className="reveal w-full h-full object-cover grayscale opacity-30" src="https://lh3.googleusercontent.com/aida/ADBb0ujoREsz6Von5Zahxy0KnclHe1pYvK4-Zwd_wIXXL1br3fl8_Kk6hoaUCZsz086pxvo9Na2aazwGnFLt6unAznmcpF5C3TM6VW0XfdbKc6p2c2_bZ114LwWJxYz2-bFPlzVzwEr7DNf1UO0ph8CI88zgni68wfUTwDIbHaEgj2cX3PkcRaGg7GOzkxqxRaEnkZQZF4w7WTDkFx0mZ06wC0IWOFLcxfEP9MpCYfV-5_2Ypm2QGUfNEWFH1wpaXjG0_KWhWijrf6TSlw"/>
<img className="reveal w-full h-full object-cover grayscale opacity-30" src="https://lh3.googleusercontent.com/aida/ADBb0uj8QnNEdgUlP-sDnUTyZXCm7o_cal8qTOPpFvRKZMdpZle3jJPZM5wJ4qJektagrDsNYy0eUClUIkRZGXzcx2YoKGiCFbqEUixzBXZjwwAXHVikeC68f5cg_V36vkY7bzuJUquyfGY_625HiN9DMAleZpx3MoyQUc-XB9oDae1UHejw4JoSbyrUApRUiSSzanbeoHKFHNeo3ScoCqfZ5sdmu51P8lJlqhmThei_rc2pMJzNUiJriHjq_lJhjeMshcHF2RoPW-wJIbs"/>
<img className="reveal w-full h-full object-cover grayscale opacity-30" src="https://lh3.googleusercontent.com/aida/ADBb0uhyw5eUseC3E56SdaSThmhEMCfhA0jW-6vCnEBQe6e29ie0_2Rd64Nj6tsqpaYxDuJzHjpbGPiLTmh9LV-wIWF-9eS-sPVmJz5QqV-GVOLoPpbpN8woRM_oNUdMeLGcB9Ios1ILh4OHH3yWJt6dXhiS5yq15oVBCHqe1uQlOqhnVny5-fmBxvEP0GXg04sOSmWzg_gN0mpZyCQj4J4NGMehJIKKblnpIF9v_g7skhACgVbVg_4vlglPtkQsEH3nnKVJ1dhd7A64cbQ"/>
</div>
</div>
<div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-[2px] bg-tertiary"></span>
<span className="font-label uppercase tracking-[0.3em] text-tertiary text-xs font-semibold">Series A Opportunity</span>
</div>
<h1 className="reveal font-headline text-7xl md:text-8xl font-bold tracking-tighter text-on-surface mb-8 leading-[0.9]">
                    Built for Scalable Global Deployment
                </h1>
<p className="reveal text-on-surface-variant text-xl max-w-xl font-light leading-relaxed mb-12">
                    Unlocking the next generation of maritime efficiency through robotic maintenance and data-driven biofouling management. Grounded in physical technical progress.
                </p>
<div className="flex items-center gap-8 tabular-data">
<div className="border-l-2 border-primary pl-4">
<div className="text-3xl font-bold text-on-surface">14+</div>
<div className="text-[10px] uppercase tracking-widest text-outline">Patents Granted</div>
</div>
<div className="border-l-2 border-tertiary pl-4">
<div className="text-3xl font-bold text-on-surface">R-4</div>
<div className="text-[10px] uppercase tracking-widest text-outline">Current Fleet Gen</div>
</div>
</div>
</div>
<div className="relative perspective-1000 hidden lg:block">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant/30 group">
<img className="reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0uhK1888fn_QE4gk00VYHBJ8o10_1VNy5z2HLbRgZyTRytzTacGaU5kN4YO8XnIyVgTBPoG0pZ4g8HHVVIEci22wzBaxgv3cJ5pgIDQVuXQXiWkWdd7yKkqKJQIRT-hZ1gTeB9MRPmLhtpCH2eywHnZ3jp-IEGuU0AXDMS9Oy3PvQ5AK8t53hZ5nlv7R7TYL_grCQNtqmO13-pNn5-UyNzKIbi072e9GTBHZAdCib4uIfCh_upJgdpmYJ5bsK90iZPiwttK3h26CQVA"/>
</div>
<div className="aspect-[4/3] bg-surface-container overflow-hidden border border-outline-variant/30 group">
<img className="reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0uj8QnNEdgUlP-sDnUTyZXCm7o_cal8qTOPpFvRKZMdpZle3jJPZM5wJ4qJektagrDsNYy0eUClUIkRZGXzcx2YoKGiCFbqEUixzBXZjwwAXHVikeC68f5cg_V36vkY7bzuJUquyfGY_625HiN9DMAleZpx3MoyQUc-XB9oDae1UHejw4JoSbyrUApRUiSSzanbeoHKFHNeo3ScoCqfZ5sdmu51P8lJlqhmThei_rc2pMJzNUiJriHjq_lJhjeMshcHF2RoPW-wJIbs"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[3/4] bg-surface-container overflow-hidden border border-outline-variant/30 group">
<img className="reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0uga8VOC8CCFF-85RRJ9U27tTjqMeoYtNfUUzz0PJWYl_keIz6Ex06kAYpTKvVP-M38DvuY75V7irk_htn8Swuro-p4PS8kMHvmr8v_RXq0U_BHjgRT5K7MnCXQwN6GGaXJCM6IlUzHhIZ0Sob0QYmi_toJ3LsShnsSQqB3pfpR0whi-UtLfCnnzX2tQihDq5iJ5-AcTzqBcjbl27zKUCXMqkS_Ar0U-D9vD-doxN9qw8Ulm_hm8QIPcK7bJg6x8SzwWERm1sNp4hiU"/>
</div>
<div className="aspect-square bg-surface-container overflow-hidden border border-outline-variant/30 group">
<img className="reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0uhyw5eUseC3E56SdaSThmhEMCfhA0jW-6vCnEBQe6e29ie0_2Rd64Nj6tsqpaYxDuJzHjpbGPiLTmh9LV-wIWF-9eS-sPVmJz5QqV-GVOLoPpbpN8woRM_oNUdMeLGcB9Ios1ILh4OHH3yWJt6dXhiS5yq15oVBCHqe1uQlOqhnVny5-fmBxvEP0GXg04sOSmWzg_gN0mpZyCQj4J4NGMehJIKKblnpIF9v_g7skhACgVbVg_4vlglPtkQsEH3nnKVJ1dhd7A64cbQ"/>
</div>
</div>
</div>
{/* Status HUD Overlay */}
<div className="absolute -bottom-6 -left-12 z-30 bg-secondary-container/40 backdrop-blur-xl p-6 border-l-4 border-tertiary tabular-data border border-outline-variant/20 shadow-2xl">
<div className="text-[10px] uppercase tracking-widest text-on-secondary-container mb-2 font-bold">Prototype Telemetry</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-1">
<span className="text-on-surface/50">MODEL:</span> <span className="text-tertiary">X-FOUL_SERIES_4</span>
<span className="text-on-surface/50">THRUST:</span> <span className="text-tertiary">420.00N</span>
<span className="text-on-surface/50">UPTIME:</span> <span className="text-tertiary">99.8%</span>
<span className="text-on-surface/50">ROI_EST:</span> <span className="text-primary">24.8%</span>
</div>
</div>
</div>
</div>
</section>
{/* Investor Thesis (Bento Grid) */}
<section className="reveal bg-surface-container-low py-32 px-12 relative overflow-hidden">
<div className="scanline absolute inset-0 pointer-events-none opacity-20"></div>
<div className="max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-outline-variant/20">
{/* Market Size */}
<div className="md:col-span-8 bg-surface p-12 hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-16">
<h3 className="reveal font-headline text-4xl font-bold tracking-tight">Market Size &amp; TAM</h3>
<span className="material-symbols-outlined text-tertiary text-4xl">trending_up</span>
</div>
<div className="flex flex-col md:flex-row items-end gap-12">
<div className="flex-1">
<div className="text-8xl font-bold font-headline tabular-data text-primary">$32.4B</div>
<div className="text-xs uppercase tracking-widest text-on-surface-variant mt-4">Addressable Global Fleet Market by 2028</div>
</div>
<p className="reveal flex-1 text-on-surface-variant leading-relaxed">
                                As fuel costs rise and emission regulations tighten, the demand for hydrodynamic efficiency is reaching an inflection point. AquaXFoul is positioned to capture 12% of the biofouling remediation market within 36 months.
                            </p>
</div>
</div>
{/* Regulatory */}
<div className="md:col-span-4 bg-surface p-12 hover:bg-surface-container-high transition-colors">
<h3 className="reveal font-headline text-2xl font-bold tracking-tight mb-8">Regulatory Tailwinds</h3>
<div className="space-y-6">
<div className="p-4 bg-surface-container-lowest border-l-2 border-primary">
<div className="text-xs font-bold text-primary mb-1">IMO 2024</div>
<p className="reveal text-sm text-on-surface-variant">New carbon intensity indicators (CII) mandate immediate friction reduction.</p>
</div>
<div className="p-4 bg-surface-container-lowest border-l-2 border-tertiary">
<div className="text-xs font-bold text-tertiary mb-1">EU ETS</div>
<p className="reveal text-sm text-on-surface-variant">Shipping integrated into carbon trading schemes; efficiency is now a direct fiscal asset.</p>
</div>
</div>
</div>
{/* IP Development */}
<div className="md:col-span-6 bg-surface p-12 hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-primary" data-weight="fill">verified_user</span>
<h3 className="reveal font-headline text-2xl font-bold tracking-tight">IP Development</h3>
</div>
<p className="reveal text-on-surface-variant leading-relaxed mb-8">
                            14 Patents granted, 22 pending. Proprietary non-contact acoustic cavitation technology and autonomous underwater navigation stacks (AUNS).
                        </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-lowest p-6">
<span className="block text-2xl font-bold font-headline tabular-data text-on-surface">98.2%</span>
<span className="text-[10px] uppercase text-outline">Accuracy Ratio</span>
</div>
<div className="bg-surface-container-lowest p-6">
<span className="block text-2xl font-bold font-headline tabular-data text-on-surface">0px</span>
<span className="text-[10px] uppercase text-outline">Surface Friction</span>
</div>
</div>
</div>
{/* Recurring Revenue */}
<div className="md:col-span-6 bg-surface p-12 hover:bg-surface-container-high transition-colors">
<div className="flex items-center gap-4 mb-8">
<span className="material-symbols-outlined text-primary" data-weight="fill">sync</span>
<h3 className="reveal font-headline text-2xl font-bold tracking-tight">Recurring Revenue (SaaS + RaaS)</h3>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center py-3 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Hull Monitoring Subscription</span>
<span className="tabular-data font-bold text-on-surface">$14k / Hull</span>
</li>
<li className="flex justify-between items-center py-3 border-b border-outline-variant/10">
<span className="text-on-surface-variant">Quarterly Robotic Remediation</span>
<span className="tabular-data font-bold text-on-surface">$45k / Event</span>
</li>
<li className="flex justify-between items-center py-3">
<span className="text-on-surface-variant">Fleet Optimization Data API</span>
<span className="tabular-data font-bold text-on-surface">Enterprise Tier</span>
</li>
</ul>
</div>
</div>
</div>
</section>
{/* Contact Section */}
<section className="reveal bg-surface py-32 px-12">
<div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
<div>
<h2 className="reveal font-headline text-6xl font-bold tracking-tighter mb-8">Schedule Port Demonstration</h2>
<p className="reveal text-on-surface-variant text-xl leading-relaxed mb-12 max-w-xl">
                        Experience the precision of the X-Foul Series 4 in person. Currently operating in Rotterdam, Singapore, and Houston.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-6">
<div className="w-12 h-12 bg-primary-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<div className="font-bold text-on-surface uppercase tracking-wider text-sm mb-1">Global HQ</div>
<div className="text-on-surface-variant">Maritiem Kwartier, Rotterdam<br/>Netherlands, 3016 EA</div>
</div>
</div>
<div className="flex items-start gap-6">
<div className="w-12 h-12 bg-primary-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined">mail</span>
</div>
<div>
<div className="font-bold text-on-surface uppercase tracking-wider text-sm mb-1">Direct Inquiries</div>
<div className="text-on-surface-variant">investors@aquaxfoul.tech<br/>deployments@aquaxfoul.tech</div>
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-12">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-outline font-bold">Full Name</label>
<input className="w-full bg-surface border-0 focus:ring-1 focus:ring-primary text-on-surface p-4" placeholder="Arthur Morgan" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-outline font-bold">Company</label>
<input className="w-full bg-surface border-0 focus:ring-1 focus:ring-primary text-on-surface p-4" placeholder="Maersk International" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-outline font-bold">Role</label>
<input className="w-full bg-surface border-0 focus:ring-1 focus:ring-primary text-on-surface p-4" placeholder="Chief Technical Officer" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-outline font-bold">Fleet Size</label>
<select className="w-full bg-surface border-0 focus:ring-1 focus:ring-primary text-on-surface p-4 appearance-none">
<option>1-10 Vessels</option>
<option>11-50 Vessels</option>
<option>50+ Vessels</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-outline font-bold">Email Address</label>
<input className="w-full bg-surface border-0 focus:ring-1 focus:ring-primary text-on-surface p-4" placeholder="a.morgan@maersk.com" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-[10px] uppercase tracking-widest text-outline font-bold">Message</label>
<textarea className="w-full bg-surface border-0 focus:ring-1 focus:ring-primary text-on-surface p-4 resize-none" placeholder="Primary objective of consultation..." rows={4}></textarea>
</div>
<button className="w-full bg-primary text-on-primary py-5 font-bold uppercase tracking-[0.2em] text-xs hover:bg-surface-tint transition-all duration-300" type="submit">
                            Submit Inquiry
                        </button>
</form>
</div>
</div>
</section>
</main>
{/* Footer */}
<footer className="bg-[#101416] text-[#A7C8FF] font-['Inter'] tabular-nums text-sm rounded-none w-full border-t border-[#44474E]/20">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 py-16 w-full max-w-[1920px] mx-auto">
<div className="flex flex-col gap-4">
<Link href="/"><div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-6 h-6 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-lg font-bold text-[#A7C8FF] font-headline mb-6">AquaXFoul</div>
</div></Link>
<p className="reveal text-[#8E918F] max-w-xs">Technical maritime excellence through uncompromising engineering precision.</p>
</div>
<div className="flex flex-col gap-3">
<div className="text-[10px] uppercase tracking-widest text-on-surface mb-2 font-bold">Navigation</div>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Technical Specs</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Impact Reports</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Port Network</Link>
</div>
<div className="flex flex-col gap-3">
<div className="text-[10px] uppercase tracking-widest text-on-surface mb-2 font-bold">Legal</div>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Privacy Policy</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/investors">Contact</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Terms of Service</Link>
</div>
<div className="flex flex-col gap-4">
<div className="text-[10px] uppercase tracking-widest text-on-surface mb-2 font-bold">Newsletter</div>
<div className="flex">
<input className="bg-surface-container-low border-0 text-xs p-3 w-full focus:ring-1 focus:ring-primary" placeholder="EMAIL ADDRESS" type="email"/>
<button className="bg-primary-container p-3 text-primary material-symbols-outlined">arrow_forward</button>
</div>
</div>
</div>
<div className="px-12 py-8 border-t border-[#44474E]/10 flex justify-between items-center text-[10px] text-[#8E918F] uppercase tracking-widest">
<span>© 2024 AquaXFoul. Technical Maritime Excellence.</span>
<span>All rights reserved / Internal use only</span>
</div>
</footer>

    </main>
  );
}
