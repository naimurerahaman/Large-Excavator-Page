import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck } from "lucide-react";

const heroImage =
  "https://sanyglobal-img.sany.com.cn/product/goods/20200817/SY500H_1920_108-190931?x-oss-process=style%2Fgoods_gallary6_1";

const galleryImages = [
  {
    src: heroImage,
    alt: "Excavator loading material at a quarry",
    label: "Earthworks",
    body: "Quarry loading and site mobilization in one frame.",
    position: "center 42%",
  },
  {
    src: "https://sanyglobal-img.sany.com.cn/product/goods/20210725/SY550H-181254.jpg?x-oss-process=image%2Fformat%2Cwebp",
    alt: "SANY excavator loading rock at a quarry face",
    label: "Load-out",
    body: "A tighter crop that reads like a field shot rather than a catalog tile.",
    position: "center 58%",
  },
  {
    src: "https://sanyglobal-img.sany.com.cn/prod/20250714/SY550H%E5%9C%A8%E6%B2%99%E7%89%B92_095124.jpg?x-oss-process=image%2Fformat%2Cwebp",
    alt: "SANY excavator in desert terrain",
    label: "Heavy duty",
    body: "Dust, slope, and haulage conditions handled with steady reach.",
    position: "center 38%",
  },
  {
    src: "https://sanyglobal-img.sany.com.cn/product/goods/20200916/882_P_155428364-161004.jpg?x-oss-process=image%2Fformat%2Cwebp",
    alt: "SANY excavator working in a rocky site",
    label: "Site control",
    body: "A second machine view that feels closer to a live project log.",
    position: "center 48%",
  },
];

const heroStats = [
  ["1", "Lifecycle point"],
  ["3", "Core capabilities"],
  ["24/7", "Project support"],
];

const features = [
  {
    title: "Lifecycle Supply Partner",
    body: "One accountable team coordinates materials, machinery, field specialists, and delivery planning from early works through handover.",
  },
  {
    title: "Industrial-Grade Readiness",
    body: "CPL aligns procurement, equipment availability, and site expertise for factories, logistics hubs, utilities, and heavy civil assets.",
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

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-cpl-line bg-cpl-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-11 max-w-page items-center justify-between px-4 md:px-6">
        <a href="#top" className="focus-ring flex items-center gap-2" aria-label="CPL home">
          <span className="grid size-6 place-items-center rounded-full bg-cpl-red text-[10px] font-black text-white">C</span>
          <span className="text-lg font-black tracking-tight text-cpl-red">CPL</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 text-xs font-semibold text-cpl-muted md:flex">
          <a className="nav-link" href="#features">
            Features
          </a>
          <a className="nav-link" href="#compare">
            Scope
          </a>
          <a className="nav-link" href="#gallery">
            Gallery
          </a>
          <a className="nav-link" href="#quote">
            Quote
          </a>
        </nav>
        <a className="btn btn-small" href="#quote">
          Inquiry
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cpl-hero text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_34%),linear-gradient(90deg,rgba(18,22,27,0.95),rgba(22,26,31,0.72)_52%,rgba(18,22,27,0.94))]" />
      <div className="relative mx-auto grid min-h-[260px] max-w-page gap-10 px-4 py-10 md:px-6 lg:min-h-[560px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:py-16">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">Home · Solutions · Lifecycle Partner</p>
          <p className="mt-5 text-sm font-bold text-white/80">Constructive Partners Limited</p>
          <h1 className="mt-4 max-w-[11ch] text-4xl font-black leading-[0.96] tracking-[-0.045em] text-white md:text-[4.1rem] md:leading-[0.95] lg:text-[4.6rem]">
            Built To Move Critical Projects Forward
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
            A single-point lifecycle partner combining materials, machinery, and expertise for industrial developers and government projects.
          </p>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-5">
            {heroStats.map(([value, label]) => (
              <div key={label}>
                <div className="text-2xl font-black tracking-[-0.03em] text-white">{value}</div>
                <div className="mt-1 text-xs font-semibold text-white/60">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-transparent bg-cpl-red px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(237,28,36,0.28)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-cpl-red-dark focus-ring"
              href="#quote"
            >
              Request a Quote
              <ArrowRight className="size-4" aria-hidden />
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/20 focus-ring"
              href="#compare"
            >
              View Scope
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </div>
        <figure className="relative overflow-hidden border border-white/10 bg-white/5 shadow-[0_24px_60px_rgba(0,0,0,0.26)]">
          <div className="relative aspect-[4/3] min-h-[240px] lg:min-h-[420px]">
            <Image
              src={heroImage}
              alt="Heavy excavator representing CPL machinery capability"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-white/10 bg-[#11151a] px-5 py-4 text-sm leading-6 text-white/70">
            Site-ready excavation, hauling, and equipment coordination for active work fronts.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="section-title">{children}</h2>;
}

function FeatureList() {
  return (
    <section id="features" className="section-wrap pt-12">
      <SectionTitle>Features</SectionTitle>
      <div className="mx-auto mb-6 flex max-w-content flex-col gap-3 border border-cpl-line bg-white px-4 py-4 shadow-soft sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold leading-6 text-cpl-ink">Need one team for materials, machinery, and site coordination?</p>
        <a className="btn btn-small w-fit" href="#quote">
          Start a quote
        </a>
      </div>
      <div className="mx-auto max-w-content border border-cpl-line bg-white shadow-soft">
        {features.map((feature, index) => (
          <details key={feature.title} className={`group ${index > 0 ? "border-t border-cpl-line" : ""}`}>
            <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left text-[15px] font-semibold text-cpl-ink transition duration-200 ease-out group-open:bg-cpl-row md:px-7">
              <span>{feature.title}</span>
              <span className="grid size-9 place-items-center border border-cpl-line bg-white text-xl font-light text-cpl-muted transition duration-200 ease-out group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="px-5 pb-6 text-sm leading-7 text-cpl-muted md:px-7 md:pr-16">{feature.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CompareTable() {
  return (
    <section id="compare" className="section-wrap pt-10">
      <SectionTitle>Scope &amp; Compare</SectionTitle>
      <p className="mx-auto mb-6 max-w-content text-center text-sm leading-7 text-cpl-muted">
        Materials, equipment, and expertise stay linked across the project lifecycle.
      </p>
      <div className="mx-auto max-w-content overflow-x-auto border border-cpl-line bg-white shadow-soft">
        <table className="w-full min-w-[760px] border-collapse text-left text-sm">
          <caption className="sr-only">CPL lifecycle service scope for industrial and government projects</caption>
          <thead>
            <tr className="border-b border-cpl-line bg-white text-[11px] font-bold uppercase tracking-[0.08em] text-cpl-ink">
              <th className="px-6 py-5">Service Model</th>
              <th className="px-6 py-5">What CPL Combines</th>
              <th className="px-6 py-5">Delivery Value</th>
              <th className="px-6 py-5">Lifecycle Stage</th>
            </tr>
          </thead>
          <tbody>
            {specs.map(([model, combined, value, stage], index) => (
            <tr key={model} className={index % 2 === 0 ? "bg-cpl-row/60" : "bg-white"}>
                <th className="px-6 py-6 align-top font-semibold text-cpl-ink">
                  <span className="block text-base font-bold">{model}</span>
                  <a className="focus-ring mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cpl-red" href="#quote">
                    Inquiry
                    <ArrowRight className="size-3.5" aria-hidden />
                  </a>
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

function GalleryImageTile({
  src,
  alt,
  label,
  body,
  position,
  className,
}: {
  src: string;
  alt: string;
  label: string;
  body: string;
  position: string;
  className: string;
}) {
  return (
    <figure className={`relative overflow-hidden border border-cpl-line bg-white shadow-soft ${className}`}>
      <div className="relative h-full min-h-[220px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 34vw, 100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-gradient-to-t from-[#14181d]/96 via-[#14181d]/62 to-transparent px-5 py-4 text-white">
        <span className="block text-[11px] uppercase tracking-[0.18em] text-white/60">{label}</span>
        <span className="mt-1 block text-sm font-semibold leading-6 text-white/90">{body}</span>
      </figcaption>
    </figure>
  );
}

function GalleryTextTile({
  tone,
  title,
  body,
  bullets,
  className,
}: {
  tone: "dark" | "light" | "accent";
  title: string;
  body: string;
  bullets: string[];
  className: string;
}) {
  const toneClass =
    tone === "dark"
      ? "bg-cpl-hero text-white"
      : tone === "accent"
        ? "bg-cpl-row text-cpl-ink"
        : "bg-white text-cpl-ink";
  const bodyClass = tone === "dark" ? "text-white/70" : "text-cpl-muted";
  const bulletClass = tone === "dark" ? "text-white/80" : "text-cpl-muted";
  const iconClass = tone === "dark" ? "text-white/60" : "text-cpl-red";

  return (
    <article className={`flex h-full flex-col justify-between border border-cpl-line p-5 shadow-soft ${toneClass} ${className}`}>
      <div>
          <p className={`text-[11px] font-bold uppercase tracking-[0.18em] ${tone === "dark" ? "text-white/60" : "text-cpl-red"}`}>
          Project note
        </p>
        <h3 className="mt-3 text-lg font-bold leading-6">{title}</h3>
        <p className={`mt-3 text-sm leading-7 ${bodyClass}`}>{body}</p>
      </div>
      <ul className={`mt-5 space-y-3 text-sm ${bulletClass}`}>
        {bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2">
            <BadgeCheck className={`mt-0.5 size-4 shrink-0 ${iconClass}`} aria-hidden />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section-wrap pt-10">
      <SectionTitle>Gallery</SectionTitle>
      <p className="mx-auto mb-6 max-w-content text-center text-sm leading-7 text-cpl-muted">
        Selected views from quarry loading, mobilization, and site coordination.
      </p>
      <div className="mx-auto grid max-w-content gap-2 md:auto-rows-[190px] md:grid-cols-12">
        <GalleryImageTile
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
          label={galleryImages[0].label}
          body={galleryImages[0].body}
          position={galleryImages[0].position}
          className="min-h-[320px] md:col-span-7 md:row-span-2 md:min-h-0"
        />
        <GalleryTextTile
          tone="dark"
          title="One chain of accountability"
          body="Materials, machinery, and field support stay under one project lead so work does not stall at handoff points."
          bullets={["Industrial developers", "Government projects", "Site coordination"]}
          className="min-h-[190px] md:col-span-5"
        />
        <GalleryImageTile
          src={galleryImages[1].src}
          alt={galleryImages[1].alt}
          label={galleryImages[1].label}
          body={galleryImages[1].body}
          position={galleryImages[1].position}
          className="min-h-[220px] md:col-span-5"
        />
        <GalleryTextTile
          tone="light"
          title="Built for delivery control"
          body="Procurement, mobilization, and reporting keep a single rhythm from kickoff to handover."
          bullets={["Scheduling", "Documentation", "Progress visibility"]}
          className="min-h-[220px] md:col-span-7"
        />
        <GalleryImageTile
          src={galleryImages[2].src}
          alt={galleryImages[2].alt}
          label={galleryImages[2].label}
          body={galleryImages[2].body}
          position={galleryImages[2].position}
          className="min-h-[190px] md:col-span-4"
        />
        <GalleryTextTile
          tone="accent"
          title="After-support continuity"
          body="Replacement planning, service routing, and supplier continuity stay in the lifecycle model instead of being added later."
          bullets={["Maintenance routing", "Spare planning", "Continuity"]}
          className="min-h-[190px] md:col-span-8"
        />
      </div>
    </section>
  );
}

function QuoteForm() {
  const inputClass =
    "min-h-11 w-full border border-cpl-form bg-white px-3 text-sm text-cpl-ink outline-none transition duration-200 ease-out focus:border-cpl-red focus:ring-2 focus:ring-cpl-red/20";

  return (
    <section id="quote" className="section-wrap pb-24 pt-10">
      <SectionTitle>Request a Quote</SectionTitle>
      <p className="mx-auto mb-6 max-w-content text-center text-sm leading-7 text-cpl-muted">
        Share the project scope, location, and timing. Keep it short and the right team can respond faster.
      </p>
      <form className="mx-auto max-w-content border border-cpl-line bg-white p-5 shadow-soft md:p-6" aria-label="Request a CPL project quote">
        <fieldset className="space-y-3">
          <legend className="label-required">Equipment / Service</legend>
          <div className="grid gap-3 md:grid-cols-3">
            <select className={inputClass} defaultValue="Lifecycle Partner">
              <option>Lifecycle Partner</option>
            </select>
            <select className={inputClass} defaultValue="Materials + Machinery">
              <option>Materials + Machinery</option>
            </select>
            <input className={inputClass} defaultValue="CPL Integrated Project Support" aria-label="Product model" />
          </div>
        </fieldset>
        <fieldset className="mt-5 space-y-3">
          <legend className="label-required">Project Location</legend>
          <div className="grid gap-3 md:grid-cols-2">
            <select className={inputClass} defaultValue="Bangladesh">
              <option>Bangladesh</option>
              <option>International</option>
            </select>
            <input className={inputClass} placeholder="City / Area" aria-label="City or area" />
          </div>
        </fieldset>
        <fieldset className="mt-5 space-y-3">
          <legend className="label-required">Contact Information</legend>
          <div className="grid gap-3 md:grid-cols-[1fr_0.7fr_1fr_1fr]">
            <input className={inputClass} placeholder="Name" aria-label="Name" />
            <select className={inputClass} defaultValue="+880">
              <option>+880</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input className={inputClass} placeholder="Business Phone" aria-label="Business phone" />
            <input className={inputClass} type="email" placeholder="Email" aria-label="Email" />
          </div>
          <input className={`${inputClass} mt-3 w-full md:w-2/3`} placeholder="Company Name" aria-label="Company name" />
        </fieldset>
        <fieldset className="mt-5 space-y-3">
          <legend className="label-required">Purchase Timeframe</legend>
          <select className={`${inputClass} w-full md:w-1/3`} defaultValue="Please Select">
            <option>Please Select</option>
            <option>Less than a month</option>
            <option>1-3 months</option>
            <option>4-6 months</option>
          </select>
        </fieldset>
        <div className="mt-5">
          <label className="mb-3 block text-xs font-bold text-cpl-muted" htmlFor="specifics">
            More Specifics
          </label>
          <textarea
            id="specifics"
            className="min-h-28 w-full border border-cpl-form bg-white p-3 text-sm outline-none transition duration-200 ease-out focus:border-cpl-red focus:ring-2 focus:ring-cpl-red/20"
            placeholder="Please fill in more details about your inquiry."
          />
        </div>
        <label className="mt-5 flex items-start gap-2 text-xs leading-5 text-cpl-muted">
          <input type="checkbox" className="mt-0.5 h-4 w-4 accent-cpl-red" />
          <span>
            I agree that my data from this form may be used to answer my inquiry.{" "}
            <a className="text-cpl-red" href="#top">
              Privacy Policy
            </a>
          </span>
        </label>
        <div className="mt-6 text-center">
          <button className="btn min-w-40" type="submit">
            Send
            <ArrowRight className="size-4" aria-hidden />
          </button>
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
            <ul className="space-y-2 text-xs text-white/60">
              {items.map((item) => (
                <li key={item}>
                  <a className="focus-ring hover:text-white" href="#top">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className="mb-4 text-sm font-black">Discover More</h3>
          <p className="max-w-xs text-xs leading-6 text-white/60">
            Constructive Partners Limited supports project owners with connected materials, machinery, and expertise.
          </p>
          <a className="focus-ring mt-5 inline-flex border border-white/20 px-4 py-2 text-xs font-bold text-white" href="#quote">
            Service Network
          </a>
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
            <a className="tab-link" href="#features">
              Features
            </a>
            <a className="tab-link" href="#compare">
              Scope &amp; Compare
            </a>
            <a className="tab-link active" href="#gallery">
              Gallery
            </a>
            <a className="btn btn-small my-2" href="#quote">
              Request a Quote
            </a>
          </div>
        </nav>
        <FeatureList />
        <CompareTable />
        <Gallery />
        <QuoteForm />
      </main>
      <Footer />
      <aside
        className="fixed bottom-16 right-0 z-40 hidden flex-col overflow-hidden border border-cpl-line bg-white text-[10px] font-bold text-cpl-muted shadow-soft md:flex"
        aria-label="Quick contact"
      >
        <a className="focus-ring bg-cpl-red px-3 py-3 text-white" href="#quote">
          Inquiry
        </a>
        <a className="focus-ring px-3 py-3" href="#quote">
          WhatsApp
        </a>
        <a className="focus-ring px-3 py-3" href="#top">
          Top
        </a>
      </aside>
    </>
  );
}
