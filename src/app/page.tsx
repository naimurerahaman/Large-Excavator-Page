import Image from "next/image";

const heroImage =
  "https://sanyglobal-img.sany.com.cn/product/goods/20200817/SY500H_1920_108-190931?x-oss-process=style%2Fgoods_gallary6_1";

const features = [
  {
    title: "Lifecycle Supply Partner",
    body: "One accountable team coordinates materials, machinery, field specialists, and delivery planning from early works through handover.",
  },
  {
    title: "Industrial-Grade Readiness",
    body: "CPL aligns procurement, equipment availability, and site expertise for developers building factories, logistics hubs, utilities, and heavy civil assets.",
  },
  {
    title: "Government Project Controls",
    body: "Structured reporting, compliance-minded documentation, and dependable coordination support transparent public-sector execution.",
  },
  {
    title: "Lower Coordination Cost",
    body: "Integrated sourcing and machinery support reduce handoff delays, duplicated vendor management, and avoidable downtime on critical workfronts.",
  },
];

const specs = [
  ["Materials", "Aggregates, cementitious inputs, steel, civil consumables", "Quality-led sourcing", "Project scheduled"],
  ["Machinery", "Excavators, loaders, lifting, haulage, compacting fleets", "Right-sized deployment", "Mobilized by phase"],
  ["Expertise", "Planning, site coordination, operator support, supervision", "Single-point team", "Lifecycle coverage"],
  ["Industrial Developers", "Factories, parks, warehouses, utilities, logistics", "Build-ready packages", "Fast procurement"],
  ["Government Projects", "Roads, bridges, drainage, river works, public facilities", "Documented controls", "Transparent delivery"],
  ["After-Support", "Maintenance routing, replacement planning, supplier continuity", "Reduced downtime", "Sustained operations"],
  ["Earthworks", "Cut, fill, excavation, hauling, compaction", "Fleet-led productivity", "Early works"],
  ["Civil Structures", "Rebar, formwork inputs, lifting, site teams", "Coordinated supply", "Core construction"],
  ["Utilities", "Drainage, power support, access infrastructure", "Integrated planning", "Enabling works"],
  ["Logistics", "Vendor routing, fleet dispatch, material sequencing", "Fewer idle windows", "Active delivery"],
  ["Quality Records", "Supplier documentation, field updates, progress evidence", "Clear governance", "Reporting cycle"],
  ["Lifecycle Review", "Replacement timing, service planning, future procurement", "Long-term continuity", "Operations"],
];

const gallery = [
  { src: heroImage, alt: "Excavator loading material at a quarry" },
  { src: heroImage, alt: "Heavy machinery for industrial site preparation" },
  { src: heroImage, alt: "Construction machinery supporting material handling" },
  { src: heroImage, alt: "Excavation fleet for lifecycle delivery" },
  { src: heroImage, alt: "Public infrastructure works with heavy equipment" },
  { src: heroImage, alt: "Integrated machinery and materials supply" },
];

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-cpl-line bg-cpl-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-page items-center justify-between px-4 md:px-6">
        <a href="#top" className="focus-ring flex items-center gap-2" aria-label="CPL home">
          <span className="grid size-6 place-items-center rounded-full bg-cpl-red text-[10px] font-black text-white">C</span>
          <span className="text-lg font-black tracking-tight text-cpl-red">CPL</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-xs font-semibold text-cpl-muted md:flex">
          <a className="nav-link" href="#features">Features</a>
          <a className="nav-link" href="#compare">Scope</a>
          <a className="nav-link" href="#gallery">Gallery</a>
          <a className="nav-link" href="#quote">Quote</a>
        </nav>
        <a className="btn btn-small" href="#quote">Inquiry</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cpl-hero text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(255,255,255,0.12),transparent_30%),linear-gradient(90deg,rgba(20,24,30,0.95),rgba(20,24,30,0.66)_52%,rgba(20,24,30,0.92))]" />
      <div className="relative mx-auto grid min-h-[260px] max-w-page items-center gap-8 px-4 py-9 md:grid-cols-[0.86fr_1.14fr] md:px-6 md:py-5">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-white/75">Home · Solutions · Lifecycle Partner</p>
          <p className="mb-4 text-sm font-bold text-white/80">Constructive Partners Limited</p>
          <h1 className="max-w-[560px] text-4xl font-black leading-[0.98] tracking-[-0.04em] md:text-[44px]">
            Built To Move Critical Projects Forward
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
            A single-point lifecycle partner combining materials, machinery, and expertise for industrial developers and government projects.
          </p>
          <div className="mt-7 grid max-w-xl grid-cols-3 gap-5 border-t border-white/14 pt-5">
            {[
              ["1", "Lifecycle Point"],
              ["3", "Core Capabilities"],
              ["24/7", "Project Support"],
            ].map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-black tracking-[-0.03em]">{value}</div>
                <div className="mt-1 text-xs font-semibold text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-[210px] md:min-h-[260px]">
          <div className="absolute inset-x-8 bottom-4 h-16 rounded-full bg-black/50 blur-2xl" />
          <Image src={heroImage} alt="Heavy excavator representing CPL machinery capability" fill priority sizes="(min-width: 768px) 52vw, 100vw" className="object-cover drop-shadow-2xl md:object-contain" />
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="section-title">{children}</h2>;
}

function FeatureList() {
  return (
    <section id="features" className="section-wrap">
      <SectionTitle>Features</SectionTitle>
      <div className="mx-auto mb-6 w-fit border border-cpl-red/35 bg-white px-4 py-2 text-center text-xs font-semibold text-cpl-red">
        I want to know if CPL is the right lifecycle partner for my next project →
      </div>
      <div className="mx-auto max-w-content divide-y divide-cpl-line bg-white shadow-soft">
        {features.map((feature) => (
          <details key={feature.title} className="group">
            <summary className="focus-ring flex cursor-pointer list-none items-center justify-between px-5 py-5 text-sm font-black text-cpl-ink md:px-7">
              {feature.title}
              <span className="text-2xl font-light text-cpl-muted transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="px-5 pb-5 text-sm leading-6 text-cpl-muted md:px-7">{feature.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CompareTable() {
  return (
    <section id="compare" className="section-wrap pt-2">
      <SectionTitle>Scope &amp; Compare</SectionTitle>
      <div className="mx-auto max-w-content overflow-x-auto bg-white shadow-soft">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <caption className="sr-only">CPL lifecycle service scope for industrial and government projects</caption>
          <thead>
            <tr className="border-b border-cpl-line bg-white text-xs font-black text-cpl-ink">
              <th className="px-6 py-5">Service Model</th>
              <th className="px-6 py-5">What CPL Combines</th>
              <th className="px-6 py-5">Delivery Value</th>
              <th className="px-6 py-5">Lifecycle Stage</th>
            </tr>
          </thead>
          <tbody>
            {specs.map(([model, combined, value, stage], index) => (
              <tr key={model} className={index % 2 === 0 ? "bg-cpl-row" : "bg-white"}>
                <th className="px-6 py-6 align-top font-black text-cpl-ink">
                  <span>{model}</span>
                  <a className="mt-2 block text-xs font-bold text-cpl-red" href="#quote">Inquiry</a>
                  <span className="mt-2 inline-block border border-cpl-red/50 px-2 py-1 text-[10px] font-bold text-cpl-red">More Detail→</span>
                </th>
                <td className="px-6 py-6 align-top text-cpl-muted">{combined}</td>
                <td className="px-6 py-6 align-top text-cpl-muted">{value}</td>
                <td className="px-6 py-6 align-top text-cpl-muted">{stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section-wrap pt-3">
      <SectionTitle>Gallery</SectionTitle>
      <div className="mx-auto max-w-content bg-white shadow-soft">
        <div className="grid grid-cols-2 border-b border-cpl-line text-center text-xs font-bold">
          <span className="border-b-2 border-cpl-red py-3 text-cpl-red">Images</span>
          <span className="py-3 text-cpl-muted">Video</span>
        </div>
        <div className="grid grid-cols-2 gap-1 p-1 md:grid-cols-4">
          {gallery.map((image, index) => (
            <div key={`${image.alt}-${index}`} className={index === 0 ? "relative min-h-[210px] md:col-span-2 md:row-span-2" : index === 7 ? "relative min-h-[170px] md:col-span-2 md:row-span-2" : "relative min-h-[120px] md:min-h-[170px]"}>
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  const inputClass = "h-9 border border-cpl-form bg-white px-3 text-sm text-cpl-ink outline-none focus:border-cpl-red focus:ring-2 focus:ring-cpl-red/20";
  return (
    <section id="quote" className="section-wrap pb-24 pt-2">
      <SectionTitle>Request a Quote</SectionTitle>
      <form className="mx-auto max-w-content space-y-6" aria-label="Request a CPL project quote">
        <fieldset className="space-y-3">
          <legend className="label-required">Equipment / Service</legend>
          <div className="grid gap-3 md:grid-cols-3">
            <select className={inputClass} defaultValue="Lifecycle Partner"><option>Lifecycle Partner</option></select>
            <select className={inputClass} defaultValue="Materials + Machinery"><option>Materials + Machinery</option></select>
            <input className={inputClass} defaultValue="CPL Integrated Project Support" aria-label="Product model" />
          </div>
        </fieldset>
        <fieldset className="space-y-3">
          <legend className="label-required">Project Location</legend>
          <div className="grid gap-3 md:grid-cols-2">
            <select className={inputClass} defaultValue="Bangladesh"><option>Bangladesh</option><option>International</option></select>
            <input className={inputClass} placeholder="City / Area" aria-label="City or area" />
          </div>
        </fieldset>
        <fieldset className="space-y-3">
          <legend className="label-required">Contact Information</legend>
          <div className="grid gap-3 md:grid-cols-[1fr_0.7fr_1fr_1fr]">
            <input className={inputClass} placeholder="Name" aria-label="Name" />
            <select className={inputClass} defaultValue="+880"><option>+880</option><option>+1</option><option>+44</option></select>
            <input className={inputClass} placeholder="Business Phone" aria-label="Business phone" />
            <input className={inputClass} type="email" placeholder="Email" aria-label="Email" />
          </div>
          <input className={`${inputClass} w-full md:w-2/3`} placeholder="Company Name" aria-label="Company name" />
        </fieldset>
        <fieldset className="space-y-3">
          <legend className="label-required">Purchase Timeframe</legend>
          <select className={`${inputClass} w-full md:w-1/3`} defaultValue="Please Select"><option>Please Select</option><option>Less than a month</option><option>1-3 months</option><option>4-6 months</option></select>
        </fieldset>
        <label className="block text-xs font-bold text-cpl-muted" htmlFor="specifics">More Specifics</label>
        <textarea id="specifics" className="min-h-24 w-full border border-cpl-form bg-white p-3 text-sm outline-none focus:border-cpl-red focus:ring-2 focus:ring-cpl-red/20" placeholder="Please fill in more details about your inquiry." />
        <label className="flex items-start gap-2 text-xs text-cpl-muted">
          <input type="checkbox" className="mt-0.5 accent-cpl-red" />
          <span>I agree that my data from this form may be used to answer my inquiry. <a className="text-cpl-red" href="#top">Privacy Policy</a></span>
        </label>
        <div className="text-center">
          <button className="btn min-w-40" type="submit">Send</button>
        </div>
      </form>
    </section>
  );
}

function Footer() {
  const groups = [
    ["Products", "Materials", "Machinery", "Lifecycle Supply", "Operator Support", "Maintenance"],
    ["Solutions", "Industrial Developers", "Government Projects", "Infrastructure", "Utilities", "Logistics"],
    ["Service", "Procurement", "Mobilization", "Site Coordination", "Quality Records", "After-Support"],
    ["About", "About CPL", "Capabilities", "Compliance", "Careers", "Contact Us"],
  ];
  return (
    <footer className="bg-cpl-footer text-white">
      <div className="mx-auto grid max-w-page gap-8 px-4 py-12 md:grid-cols-[repeat(4,1fr)_1.2fr] md:px-6">
        {groups.map(([title, ...items]) => (
          <div key={title}>
            <h3 className="mb-4 text-sm font-black">{title}</h3>
            <ul className="space-y-2 text-xs text-white/55">
              {items.map((item) => <li key={item}><a className="focus-ring hover:text-white" href="#top">{item}</a></li>)}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-4 text-sm font-black">Discover More</h3>
          <p className="max-w-xs text-xs leading-6 text-white/55">Constructive Partners Limited supports project owners with connected materials, machinery, and expertise.</p>
          <a className="focus-ring mt-5 inline-flex border border-white/25 px-4 py-2 text-xs font-bold text-white" href="#quote">Service Network</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-cpl-page text-cpl-ink">
        <Hero />
        <nav className="sticky top-11 z-20 border-y border-cpl-line bg-white" aria-label="Page sections">
          <div className="mx-auto flex max-w-content items-center justify-between px-4 text-xs font-bold text-cpl-muted">
            <a className="tab-link" href="#features">Features</a>
            <a className="tab-link" href="#compare">Scope &amp; Compare</a>
            <a className="tab-link active" href="#gallery">Gallery</a>
            <a className="btn btn-small my-2" href="#quote">Request a Quote</a>
          </div>
        </nav>
        <FeatureList />
        <CompareTable />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
      <aside className="fixed bottom-16 right-0 z-40 hidden flex-col overflow-hidden border border-cpl-line bg-white text-[10px] font-bold text-cpl-muted shadow-soft md:flex" aria-label="Quick contact">
        <a className="focus-ring bg-cpl-red px-3 py-3 text-white" href="#quote">Inquiry</a>
        <a className="focus-ring px-3 py-3" href="#quote">WhatsApp</a>
        <a className="focus-ring px-3 py-3" href="#top">Top</a>
      </aside>
    </>
  );
}


