import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary">
      
{/* Top Navigation Bar */}
<nav className="bg-[#101416] dark:bg-[#101416] rounded-none w-full top-0 sticky z-50 flex justify-between items-center px-12 py-6 w-full max-w-[1920px] mx-auto font-['Space_Grotesk'] tracking-tight">
<Link href="/"><div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-8 h-8 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-2xl font-bold tracking-tighter text-[#A7C8FF] font-headline">AquaXFoul</div>
</div></Link>
<div className="hidden md:flex items-center gap-12">
<Link className="text-[#A7C8FF] border-b-2 border-[#A7C8FF] pb-1 transition-colors duration-300" href="/technology">Technology</Link>
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] hover:bg-[#191C1E] transition-colors duration-300" href="/impact">Impact</Link>
<Link className="text-[#C4C7C5] hover:text-[#A7C8FF] hover:bg-[#191C1E] transition-colors duration-300" href="/impact#business-model">Business Model</Link>
</div>
<Link href="/investors"><button className="bg-primary text-on-primary px-6 py-2 font-bold hover:bg-surface-tint transition-colors duration-200">
        Book Consultation
    </button></Link>
</nav>
<main className="relative">
<div className="scanline absolute inset-0 z-10"></div>
<div className="technical-grid absolute inset-0 z-0 opacity-40"></div>
{/* Hero Section */}
<header className="relative pt-32 pb-24 px-12 max-w-[1920px] mx-auto z-20">
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<div className="max-w-4xl">
<span className="text-tertiary font-label tracking-[0.3em] uppercase text-xs mb-4 block">System Specification v4.0</span>
<h1 className="reveal font-headline text-6xl md:text-8xl font-bold leading-none tracking-tighter text-primary">
                    Engineered for<br/>
<span className="text-on-surface">Hydrodynamic Precision</span>
</h1>
</div>
<div className="bg-surface-container-low p-6 min-w-[300px] border-l-4 border-tertiary">
<div className="flex justify-between items-start mb-4">
<span className="text-[10px] uppercase tracking-widest text-outline">Hull Status</span>
<span className="material-symbols-outlined text-tertiary text-sm">sensors</span>
</div>
<div className="text-3xl font-headline font-bold tabular-nums">0.024mm</div>
<div className="text-xs text-outline-variant mt-1">Surface Deviation Tolerance</div>
</div>
</div>
</header>

{/* Our Vision Block inspired by Amlaan's */}
<section className="reveal px-12 py-16 max-w-[1920px] mx-auto z-20 relative bg-[#101416]">
  <div className="border-t border-b border-outline-variant/20 py-16 flex flex-col items-center text-center max-w-4xl mx-auto">
    <span className="text-tertiary font-label tracking-[0.3em] uppercase text-xs mb-4 block">Our Vision</span>
    <h2 className="font-headline text-3xl md:text-5xl font-bold leading-tight text-[#A7C8FF] mb-6">Restoring Planet's Lifelines</h2>
    <p className="text-on-surface-variant leading-relaxed text-lg max-w-2xl">
      We are on a journey to deploy <strong>10,000 AquaXFoul ROV units globally by 2030</strong>. Our mission is to create a future where vessel biofouling is mitigated proactively at the source, preventing <strong>50 Million Tons of excess marine carbon emissions</strong> and safeguarding marine biosecurity.
    </p>
    <div className="text-xs text-outline mt-8 font-mono tracking-widest uppercase">
      // AquaXFoul Engineering
    </div>
  </div>
</section>

{/* Feature: Machine Vision System */}
<section className="reveal px-12 py-24 max-w-[1920px] mx-auto z-20 relative bg-surface-container-lowest">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 space-y-8">
<div className="space-y-4">
<div className="flex items-center gap-4">
<span className="w-12 h-[1px] bg-tertiary"></span>
<span className="text-tertiary font-label text-sm tracking-widest uppercase">Detection Architecture</span>
</div>
<h2 className="reveal font-headline text-4xl font-bold">Machine Vision System</h2>
<p className="reveal text-on-surface-variant leading-relaxed text-lg max-w-xl">
                        Our proprietary neural network processing unit utilizes multi-spectral imaging to detect biofouling at sub-millimeter scales. Real-time edge computing classifies organic growth in zero-visibility underwater environments.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-surface-container-high p-4">
<div className="text-outline text-[10px] uppercase tracking-tighter mb-1">Latency</div>
<div className="text-2xl font-headline tabular-nums">4.2ms</div>
</div>
<div className="bg-surface-container-high p-4">
<div className="text-outline text-[10px] uppercase tracking-tighter mb-1">Accuracy</div>
<div className="text-2xl font-headline tabular-nums">99.8%</div>
</div>
</div>
{/* Prototype View */}
<div className="border-t border-outline-variant/30 pt-8 mt-8">
<span className="text-[10px] uppercase tracking-widest text-tertiary mb-4 block">Prototype Evidence: Optical Assembly</span>
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container p-1 border border-outline-variant/20">
<img alt="Technical prototype view 1" className="reveal w-full h-32 object-cover grayscale brightness-75" src="https://lh3.googleusercontent.com/aida/ADBb0uhyw5eUseC3E56SdaSThmhEMCfhA0jW-6vCnEBQe6e29ie0_2Rd64Nj6tsqpaYxDuJzHjpbGPiLTmh9LV-wIWF-9eS-sPVmJz5QqV-GVOLoPpbpN8woRM_oNUdMeLGcB9Ios1ILh4OHH3yWJt6dXhiS5yq15oVBCHqe1uQlOqhnVny5-fmBxvEP0GXg04sOSmWzg_gN0mpZyCQj4J4NGMehJIKKblnpIF9v_g7skhACgVbVg_4vlglPtkQsEH3nnKVJ1dhd7A64cbQ"/>
</div>
<div className="bg-surface-container p-1 border border-outline-variant/20">
<img alt="Technical prototype view 2" className="reveal w-full h-32 object-cover grayscale brightness-75" src="https://lh3.googleusercontent.com/aida/ADBb0uj8QnNEdgUlP-sDnUTyZXCm7o_cal8qTOPpFvRKZMdpZle3jJPZM5wJ4qJektagrDsNYy0eUClUIkRZGXzcx2YoKGiCFbqEUixzBXZjwwAXHVikeC68f5cg_V36vkY7bzuJUquyfGY_625HiN9DMAleZpx3MoyQUc-XB9oDae1UHejw4JoSbyrUApRUiSSzanbeoHKFHNeo3ScoCqfZ5sdmu51P8lJlqhmThei_rc2pMJzNUiJriHjq_lJhjeMshcHF2RoPW-wJIbs"/>
</div>
</div>
<p className="reveal text-xs text-outline mt-3 font-label italic">Component-level testing confirms multi-point sensor registration.</p>
</div>
</div>
<div className="lg:col-span-7 aspect-video bg-surface-container shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
<img className="reveal w-full h-full object-cover grayscale brightness-50 contrast-125 mix-blend-lighten" data-alt="close-up of advanced optical sensor lens with glowing blue digital interface overlays and technical schematics" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2wtwOYwCBBWeWnOfELgtpf6y00u0H4vrD3maYCPJozlPI8Erl5WjkqDDfNk1kxVHcBUF8tzkZrfD9EfLgFTsgE0mMFONpjeRue-9DHk4r1etIrRhYK7KIkg9_soszQFDwclFPw2LzbK0GlRCgP6TNHw8aOBpJbPUsUaqxZc8cX9UDOA62NH8hO5bAjur6cJGF5NJKkbAqa7ypyA-CRAcekQq93J-9sW4N2kVGvgH6WuT8mC3swGOqcwjplOz3-0vJ9Kt8SXHltSvf"/>
<div className="absolute top-8 left-8 flex flex-col gap-2">
<div className="bg-tertiary/20 backdrop-blur-md px-3 py-1 text-[10px] font-label text-tertiary border border-tertiary/30">LIDAR_ACTIVE</div>
<div className="bg-surface/60 backdrop-blur-md px-3 py-1 text-[10px] font-label text-on-surface border border-outline-variant/30">ISO_DEPTH_70M</div>
</div>
</div>
</div>
</section>
{/* Feature: Adaptive Roller-Wheel Adhesion */}
<section className="reveal px-12 py-32 max-w-[1920px] mx-auto z-20 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-8 space-y-8">
<div className="relative group">
<div className="absolute -inset-4 border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<img className="reveal w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="heavy industrial robotic wheel assembly showing mechanical detail and gears in low moody dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhmBQs7VTx5Zcr6r5LOdSGqpGjIf5-tBss6rjH3v0xep7TYQbEIEF6io7T2FTppALpZ4tvJuVCj6mt9UenrWHdpZK3K6GUsHXVmTPHhsV5sF5hNIyeOOG6uTZyT4nHtWXBUb2gqKIS0yVXIJsULUF-MVqSYtA0jinM6WHZDJ0pdbMcpKgE9Z3H8IMQMqN8b9BILO5d67GKjwu8zmUeSa8oBbnnBQvXydLdoPOCi16isQdVJ-AaYRU75HtwZ_HUq4ZnEn_C4Hs4Uexw"/>
{/* Technical Callouts */}
<div className="absolute top-1/4 right-1/4 flex items-center gap-4">
<div className="w-8 h-8 rounded-full border border-tertiary flex items-center justify-center bg-surface/80 backdrop-blur">
<span className="w-1 h-1 bg-tertiary rounded-full"></span>
</div>
<div className="bg-surface-container-high p-3 text-[10px] font-label tracking-widest uppercase border-l-2 border-tertiary">
                            Magnetic Flux Core
                        </div>
</div>
</div>
{/* Prototype Visual Overlay */}
<div className="bg-surface-container-low p-6 border border-outline-variant/20 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-shrink-0 w-full md:w-1/3">
<img alt="Adhesion prototype plan" className="reveal w-full h-auto border border-primary/20 grayscale" src="https://lh3.googleusercontent.com/aida/ADBb0ujoREsz6Von5Zahxy0KnclHe1pYvK4-Zwd_wIXXL1br3fl8_Kk6hoaUCZsz086pxvo9Na2aazwGnFLt6unAznmcpF5C3TM6VW0XfdbKc6p2c2_bZ114LwWJxYz2-bFPlzVzwEr7DNf1UO0ph8CI88zgni68wfUTwDIbHaEgj2cX3PkcRaGg7GOzkxqxRaEnkZQZF4w7WTDkFx0mZ06wC0IWOFLcxfEP9MpCYfV-5_2Ypm2QGUfNEWFH1wpaXjG0_KWhWijrf6TSlw"/>
</div>
<div className="space-y-2">
<h4 className="font-headline text-lg font-bold text-primary">Mechanical Simulation v2.1</h4>
<p className="reveal text-sm text-on-surface-variant italic">Top-down schematic of the dual-track drive system during 45° vertical climb simulation.</p>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col justify-center">
<div className="space-y-6">
<span className="text-primary font-headline text-5xl font-bold opacity-20">02</span>
<h3 className="reveal font-headline text-4xl font-bold">Adaptive Roller-Wheel Adhesion</h3>
<p className="reveal text-on-surface-variant leading-relaxed">
                        Engineered for vertical and inverted surfaces. The adaptive wheel system utilizes variable magnetic flux and mechanical suction to maintain consistent 400N pressure across non-uniform hull geometries.
                    </p>
<div className="space-y-4 pt-8">
<div className="flex justify-between border-b border-outline-variant/20 pb-2">
<span className="text-outline text-xs uppercase tracking-widest">Max Load</span>
<span className="tabular-nums text-primary font-bold">1,200 kg</span>
</div>
<div className="flex justify-between border-b border-outline-variant/20 pb-2">
<span className="text-outline text-xs uppercase tracking-widest">Surface Grip</span>
<span className="tabular-nums text-primary font-bold">μ 0.85</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Feature: Torque-Controlled Joint Architecture */}
<section className="reveal bg-surface-container-low py-32 relative z-20">
<div className="px-12 max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-4 mb-8">
<div className="bg-primary-container p-4">
<span className="material-symbols-outlined text-primary text-3xl">precision_manufacturing</span>
</div>
<h2 className="reveal font-headline text-4xl font-bold leading-tight">Torque-Controlled<br/>Joint Architecture</h2>
</div>
<div className="space-y-6 text-on-surface-variant">
<p>Integrated harmonic drive systems provide zero-backlash motion control. Each joint contains redundant absolute encoders ensuring ±0.1° positioning accuracy in heavy currents.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
<span>6-Axis Degrees of Freedom for complex hull curvatures.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
<span>Sealed titanium housing rated for 1,000m depth.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary mt-1">check_circle</span>
<span>Active thermal management for continuous operation.</span>
</li>
</ul>
</div>
{/* Technical Render */}
<div className="mt-12 p-4 bg-surface-container-lowest border border-tertiary/30">
<div className="flex justify-between items-center mb-4">
<span className="text-[10px] font-mono text-tertiary">AXF_DRIVE_RENDER.CAD</span>
<span className="text-[10px] font-mono text-outline">STATUS: VERIFIED</span>
</div>
<img alt="Joint architecture CAD render" className="reveal w-full h-auto grayscale brightness-110" src="https://lh3.googleusercontent.com/aida/ADBb0uhK1888fn_QE4gk00VYHBJ8o10_1VNy5z2HLbRgZyTRytzTacGaU5kN4YO8XnIyVgTBPoG0pZ4g8HHVVIEci22wzBaxgv3cJ5pgIDQVuXQXiWkWdd7yKkqKJQIRT-hZ1gTeB9MRPmLhtpCH2eywHnZ3jp-IEGuU0AXDMS9Oy3PvQ5AK8t53hZ5nlv7R7TYL_grCQNtqmO13-pNn5-UyNzKIbi072e9GTBHZAdCib4uIfCh_upJgdpmYJ5bsK90iZPiwttK3h26CQVA"/>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="bg-surface-container-high p-1 relative">
<img className="reveal w-full grayscale brightness-75 contrast-125" data-alt="macro close-up of a titanium robotic joint with intricate mechanical cables and hardware, polished metal texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRiaQON7NA2y7gADfwJ4n5up_x2YLbbeohs-650uhX7b10iSou9aEjiIv0xAfViy1KwehybSfroLC88iN2y9Ca1hW6B-ENpwIqqezGZ8wHI-VA9UfTwYIzksHnJgxSh7s-Homd_vvx2_5Vjo9GyfZk2PIiebWCbqbsY6H_ndJgMCqEa5I5_iY84d13YsLFFa8TpUEgjuZJ_errcNAbJciuWBExN8mJlr43Qc0hGr8X27R2B4s6w2OOLAN3Rl8FHTa5oMqJhFGkTpAF"/>
<div className="absolute bottom-0 right-0 bg-primary px-4 py-4">
<span className="material-symbols-outlined text-on-primary text-4xl">architecture</span>
</div>
</div>
{/* Additional Perspective */}
<div className="mt-4">
<img alt="Full system prototype render" className="reveal w-full h-auto grayscale opacity-80 hover:opacity-100 transition-opacity duration-300" src="https://lh3.googleusercontent.com/aida/ADBb0uga8VOC8CCFF-85RRJ9U27tTjqMeoYtNfUUzz0PJWYl_keIz6Ex06kAYpTKvVP-M38DvuY75V7irk_htn8Swuro-p4PS8kMHvmr8v_RXq0U_BHjgRT5K7MnCXQwN6GGaXJCM6IlUzHhIZ0Sob0QYmi_toJ3LsShnsSQqB3pfpR0whi-UtLfCnnzX2tQihDq5iJ5-AcTzqBcjbl27zKUCXMqkS_Ar0U-D9vD-doxN9qw8Ulm_hm8QIPcK7bJg6x8SzwWERm1sNp4hiU"/>
<p className="reveal text-[10px] text-center mt-2 text-outline-variant uppercase tracking-[0.2em]">Primary Propulsion Chassis Alpha-04</p>
</div>
</div>
</div>
</div>
</section>
{/* Telemetry Dashboard */}
<section className="reveal px-12 py-32 max-w-[1920px] mx-auto z-20 relative">
<div className="mb-16">
<h2 className="reveal font-headline text-4xl font-bold mb-4">Real-time Telemetry Dashboard</h2>
<div className="w-24 h-1 bg-tertiary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
<div className="bg-surface-container-highest p-8 space-y-4 border-l-2 border-primary">
<div className="flex justify-between items-center">
<span className="text-outline text-xs uppercase font-label tracking-widest">Velocity</span>
<span className="material-symbols-outlined text-primary text-sm">speed</span>
</div>
<div className="text-5xl font-headline font-bold tabular-nums">1.42 <span className="text-lg font-normal text-outline">m/s</span></div>
<div className="h-1 bg-surface-container w-full">
<div className="h-full bg-primary w-3/4"></div>
</div>
</div>
<div className="bg-surface-container-high p-8 space-y-4">
<div className="flex justify-between items-center">
<span className="text-outline text-xs uppercase font-label tracking-widest">Torque Load</span>
<span className="material-symbols-outlined text-tertiary text-sm">settings_input_component</span>
</div>
<div className="text-5xl font-headline font-bold tabular-nums">82 <span className="text-lg font-normal text-outline">%</span></div>
<div className="h-1 bg-surface-container w-full">
<div className="h-full bg-tertiary w-1/2"></div>
</div>
</div>
<div className="bg-surface-container p-8 space-y-4">
<div className="flex justify-between items-center">
<span className="text-outline text-xs uppercase font-label tracking-widest">Depth Pres.</span>
<span className="material-symbols-outlined text-outline text-sm">compress</span>
</div>
<div className="text-5xl font-headline font-bold tabular-nums">14.8 <span className="text-lg font-normal text-outline">bar</span></div>
<div className="h-1 bg-surface-container-low w-full">
<div className="h-full bg-outline w-1/3"></div>
</div>
</div>
<div className="bg-surface-container-low p-8 space-y-4">
<div className="flex justify-between items-center">
<span className="text-outline text-xs uppercase font-label tracking-widest">Signal Latency</span>
<span className="material-symbols-outlined text-error text-sm">network_check</span>
</div>
<div className="text-5xl font-headline font-bold tabular-nums">12 <span className="text-lg font-normal text-outline">ms</span></div>
<div className="h-1 bg-surface-container-lowest w-full">
<div className="h-full bg-error w-1/12"></div>
</div>
</div>
</div>
{/* Visual Dashboard Preview */}
<div className="mt-12 bg-surface-container-low p-2 aspect-[21/9] relative overflow-hidden group border border-outline-variant/30">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/40 to-surface z-10"></div>
  <div className="absolute inset-0 pointer-events-none z-15 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6))]"></div>
  
  {/* Simulated Scanline Overlay */}
  <div className="absolute inset-0 pointer-events-none z-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]"></div>
  
  <img className="reveal w-full h-full object-cover opacity-40 grayscale contrast-150 group-hover:scale-105 transition-transform duration-[4s]" data-alt="abstract digital data visualization with moving wave patterns, neon lines and technical metrics against a dark blue background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHlcYxy55CEmImYN3HIcztScD2qccR6MrFp6E00fzPsDyat4fXM9O5zkHJHZ7ODGb5kkhTU3ZRD35zUIXsBy8UVZtTDinHAQFBm4BB-eIRkKKm9YfcdtfTXTdI4lq-7OHnxeyEOeQusDUeUsHzG3L9B7Wi_8cNT3-k26P6_wDV_49HTqUFLuMRQ3BbqG8RqtA1N5mvaL290Ph2ZrEJuQZGr9RmJSYYYeCkiZ2P0K0gV4uJ1BtBhG1mIYKeiUVdbVoWRTlfnfk5i-SF"/>

  {/* Simulated HUD overlay data */}
  <div className="absolute inset-6 z-20 flex flex-col justify-between pointer-events-none select-none">
    <div className="flex justify-between items-start">
      <div className="font-mono text-[9px] text-[#A7C8FF] bg-black/60 backdrop-blur px-2.5 py-1.5 border border-[#A7C8FF]/20 rounded-md">
        HUD VERSION: v4.2.1 // FEED_01 // SECURE_SSL
      </div>
      <div className="font-mono text-[9px] text-tertiary bg-black/60 backdrop-blur px-2.5 py-1.5 border border-tertiary/20 rounded-md animate-pulse">
        • RECEIVING REAL-TIME TELEMETRY DATA
      </div>
    </div>
    
    <div className="flex justify-between items-end">
      <div className="font-mono text-[8px] text-outline-variant space-y-1">
        <div>[ AXF_ROV_STATUS: ENGAGED ]</div>
        <div>[ THRUST_VECTOR: NOMINAL ]</div>
        <div>[ DEBRIS_DENS: 12.4% ]</div>
      </div>
      <div className="font-mono text-[8px] text-outline-variant text-right space-y-1">
        <div>SYS_TEMP: 4.2°C // PRESSURE: 14.8BAR</div>
        <div>EST_DRAG_RED: 92.4% // DEPTH: 242.04M</div>
        <div>CO2_MITIGATION: 50M TONS TARGET</div>
      </div>
    </div>
  </div>

  <div className="absolute inset-0 flex items-center justify-center z-30">
    <button className="bg-surface-container-highest/80 backdrop-blur-xl border border-primary/30 px-12 py-4 font-headline text-primary font-bold tracking-widest hover:bg-primary hover:text-on-primary transition-all shadow-glow hover:shadow-none hover:scale-105 duration-300">
      ACCESS COMMAND INTERFACE
    </button>
  </div>
</div>
</section>
{/* Status HUD (Fixed Corner Element) */}
<div className="fixed bottom-12 left-12 z-[60] bg-secondary-container/60 backdrop-blur-xl p-4 border border-outline-variant/10 pointer-events-none hidden xl:block">
<div className="space-y-2">
<div className="flex items-center gap-4">
<span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
<span className="text-[10px] font-label font-bold text-on-secondary-container tracking-tighter">SYSTEMS NOMINAL</span>
</div>
<div className="text-[10px] font-mono text-on-secondary-container opacity-60">
                COORD: 45° 52' 23" N / 122° 40' 32" W<br/>
                DEPTH: 242.04M | TEMP: 4.2°C
            </div>
</div>
</div>
</main>
{/* Footer */}
<footer className="bg-[#101416] rounded-none w-full border-t border-[#44474E]/20">
<div className="grid grid-cols-4 gap-8 px-12 py-16 w-full max-w-[1920px] mx-auto font-['Inter'] tabular-nums text-sm">
<div className="col-span-2">
<Link href="/"><div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
<svg viewBox="0 0 100 100" className="w-6 h-6 text-[#A7C8FF] shrink-0" fill="none" stroke="currentColor" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
  <line x1="55" y1="20" x2="85" y2="75" />
  <line x1="35" y1="85" x2="75" y2="85" />
  <line x1="15" y1="75" x2="40" y2="30" />
</svg>
<div className="text-lg font-bold text-[#A7C8FF] font-headline mb-6">AquaXFoul</div>
</div></Link>
<p className="reveal text-[#8E918F] max-w-sm mb-8 leading-relaxed">
                Setting the standard for technical maritime excellence through robotic innovation and data-driven hull maintenance.
            </p>
<div className="text-[#8E918F]">© 2024 AquaXFoul. Technical Maritime Excellence.</div>
</div>
<div className="flex flex-col gap-4">
<div className="text-[#A7C8FF] font-bold mb-2">Technical</div>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Technical Specs</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">System Logs</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Safety Protocols</Link>
</div>
<div className="flex flex-col gap-4">
<div className="text-[#A7C8FF] font-bold mb-2">Company</div>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/investors">Contact</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Privacy Policy</Link>
<Link className="text-[#8E918F] hover:text-[#A7C8FF] transition-opacity duration-200" href="/">Newsletter</Link>
</div>
</div>
</footer>

    </main>
  );
}
