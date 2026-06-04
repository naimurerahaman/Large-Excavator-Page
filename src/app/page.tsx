import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Factory,
  HardHat,
  Layers3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Truck,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const heroImage =
  "https://sanyglobal-img.sany.com.cn/product/goods/20200817/SY500H_1920_108-190931?x-oss-process=style%2Fgoods_gallary6_1";

const navItems = [
  ["Capabilities", "#capabilities"],
  ["Delivery", "#delivery"],
  ["Scope", "#scope"],
  ["Quote", "#quote"],
];

const heroStats = [
  {
    value: "01",
    label: "Accountable partner",
    detail: "One team for supply, fleet and site support.",
  },
  {
    value: "03",
    label: "Core capabilities",
    detail: "Materials, machinery and project expertise.",
  },
  {
    value: "24/7",
    label: "Critical response",
    detail: "Rapid routing for active workfronts.",
  },
];

const capabilities: Array<{
  icon: LucideIcon;
  title: string;
  body: string;
  points: string[];
}> = [
  {
    icon: Layers3,
    title: "Materials Supply",
    body: "Reliable sourcing for aggregates, cementitious inputs, steel and civil consumables.",
    points: ["Quality-led vendors", "Scheduled deliveries", "Supplier continuity"],
  },
  {
    icon: Truck,
    title: "Machinery Deployment",
    body: "Right-sized equipment planning for excavation, lifting, haulage and compaction phases.",
    points: ["Fleet availability", "Operator support", "Mobilized by phase"],
  },
  {
    icon: HardHat,
    title: "Field Expertise",
    body: "Practical site coordination that keeps procurement, equipment and supervision aligned.",
    points: ["Project controls", "Workfront planning", "Progress evidence"],
  },
];

const workflow = [
  {
    step: "01",
    title: "Map the workfront",
    body: "Define the critical path, material needs, equipment windows and owner requirements.",
  },
  {
    step: "02",
    title: "Bundle the scope",
    body: "Combine sourcing, fleet planning and field specialists into a single project package.",
  },
  {
    step: "03",
    title: "Mobilize in phases",
    body: "Route vendors, machines and support teams around active site constraints.",
  },
  {
    step: "04",
    title: "Control the lifecycle",
    body: "Track documentation, continuity, maintenance needs and future procurement cycles.",
  },
];

const scopeItems: Array<{
  icon: LucideIcon;
  title: string;
  body: string;
}> = [
  {
    icon: Factory,
    title: "Industrial Developers",
    body: "Factories, logistics hubs, warehouses, utilities and enabling works.",
  },
  {
    icon: Building2,
    title: "Government Projects",
    body: "Roads, bridges, drainage, river works and public facilities with documented controls.",
  },
  {
    icon: Wrench,
    title: "After-Support",
    body: "Maintenance routing, replacement planning and supplier continuity after handover.",
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    body: "Transparent reporting, quality records and compliance-minded coordination.",
  },
];

const workTags = [
  "Earthworks",
  "Civil structures",
  "Utilities",
  "Logistics",
  "Quality records",
  "Lifecycle review",
];

const footerGroups = [
  ["Products", "Materials", "Machinery", "Lifecycle Supply", "Operator Support"],
  ["Solutions", "Industrial Developers", "Government Projects", "Infrastructure"],
  ["Service", "Procurement", "Mobilization", "Site Coordination", "After-Support"],
  ["Company", "About CPL", "Capabilities", "Compliance", "Contact"],
];

function IconBox({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="grid size-10 shrink-0 place-items-center rounded-[8px] border border-cpl-line bg-white text-cpl-red shadow-subtle">
      <Icon className="size-5" aria-hidden="true" />
    </span>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="section-kicker text-cpl-red">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight text-cpl-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-cpl-muted md:text-lg">{body}</p>
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <a className={variant === "primary" ? "btn-primary" : "btn-secondary"} href={href}>
      <span>{children}</span>
      <ArrowRight className="size-4" aria-hidden="true" />
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cpl-line bg-white/90 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between">
        <a href="#top" className="focus-ring flex items-center gap-3" aria-label="CPL home">
          <span className="grid size-10 place-items-center rounded-[8px] bg-cpl-red text-sm font-black text-white shadow-red">
            C
          </span>
          <span>
            <span className="block text-lg font-black leading-none text-cpl-ink">CPL</span>
            <span className="hidden text-xs font-semibold text-cpl-muted sm:block">
              Constructive Partners Limited
            </span>
          </span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm font-bold text-cpl-muted lg:flex">
          {navItems.map(([label, href]) => (
            <a className="nav-link" href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn-primary px-4 py-3 text-sm" href="#quote">
          <PhoneCall className="size-4" aria-hidden="true" />
          <span>Inquiry</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-backdrop relative overflow-hidden text-white">
      <Image
        src={heroImage}
        alt="Heavy excavator working on a construction site"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="page-shell relative z-10 flex min-h-[620px] flex-col justify-center py-12 md:min-h-[660px] md:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-[8px] border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold text-white/80">
            <BadgeCheck className="size-4 text-cpl-accent" aria-hidden="true" />
            Lifecycle project partner for complex construction work
          </div>
          <h1 className="mt-7 text-4xl font-black leading-none text-white md:text-6xl">
            Materials, machinery and site expertise under one accountable team.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
            CPL coordinates sourcing, equipment deployment and field support for industrial developers and public-sector projects that need fewer handoffs and tighter execution.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ActionLink href="#quote">Request a Quote</ActionLink>
            <ActionLink href="#capabilities" variant="secondary">
              View Capabilities
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  return (
    <section className="bg-cpl-page">
      <div className="page-shell relative z-20 -mt-12 grid gap-3 pb-14 md:grid-cols-3">
        {heroStats.map((stat) => (
          <article className="surface-card p-5" key={stat.label}>
            <div className="text-3xl font-black text-cpl-red">{stat.value}</div>
            <h2 className="mt-2 text-base font-black text-cpl-ink">{stat.label}</h2>
            <p className="mt-2 text-sm leading-6 text-cpl-muted">{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="section-band bg-cpl-page">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Core capabilities"
          title="Built for project owners who need one operational partner."
          body="CPL brings the high-friction parts of construction delivery into a coordinated model, from early procurement through lifecycle support."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article className="surface-card p-6" key={item.title}>
                <div className="flex items-center justify-between gap-4">
                  <IconBox icon={Icon} />
                  <span className="rounded-[8px] border border-cpl-line bg-cpl-soft px-3 py-1 text-xs font-bold text-cpl-muted">
                    CPL
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black text-cpl-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-cpl-muted">{item.body}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li className="flex items-center gap-2 text-sm font-bold text-cpl-ink" key={point}>
                      <CheckCircle2 className="size-4 text-cpl-green" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Delivery() {
  return (
    <section id="delivery" className="section-band bg-white">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="section-kicker text-cpl-red">Delivery model</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-cpl-ink md:text-5xl">
            A tighter path from planning to active site execution.
          </h2>
          <p className="mt-5 text-base leading-7 text-cpl-muted">
            Instead of coordinating disconnected suppliers, fleets and specialists, CPL sets up one operating rhythm for the full project lifecycle.
          </p>
          <div className="mt-8 overflow-hidden rounded-[8px] border border-cpl-line bg-cpl-soft">
            <div className="relative aspect-[16/10] min-h-[240px]">
              <Image
                src={heroImage}
                alt="Construction machinery prepared for site delivery"
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          {workflow.map((item) => (
            <article className="surface-card grid gap-5 p-5 sm:grid-cols-[72px_1fr]" key={item.step}>
              <div className="grid size-16 place-items-center rounded-[8px] bg-cpl-ink text-lg font-black text-white">
                {item.step}
              </div>
              <div>
                <h3 className="text-xl font-black text-cpl-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cpl-muted">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scope() {
  return (
    <section id="scope" className="section-band bg-cpl-page">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Project scope"
          title="Coverage for industrial, infrastructure and public work."
          body="The service model is designed for owners who need dependable routing, practical coordination and documented delivery controls."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {scopeItems.map((item) => (
            <article className="surface-card flex gap-5 p-6" key={item.title}>
              <IconBox icon={item.icon} />
              <div>
                <h3 className="text-lg font-black text-cpl-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-cpl-muted">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {workTags.map((tag) => (
            <span className="rounded-[8px] border border-cpl-line bg-white px-4 py-2 text-sm font-bold text-cpl-muted shadow-subtle" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteForm() {
  return (
    <section id="quote" className="section-band bg-white">
      <div className="page-shell">
        <div className="surface-card overflow-hidden">
          <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
            <div className="bg-cpl-ink p-6 text-white md:p-10">
              <p className="section-kicker text-white/60">Request a quote</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">
                Bring CPL in before the next workfront stalls.
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/70">
                Share the project type, location and timeline. The team can respond with the materials, machinery and support path that fits the work.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  ["Fast scoping", "Early-stage routing for critical resources."],
                  ["Integrated support", "Supply, fleet and field expertise in one request."],
                  ["Lifecycle continuity", "Plans that extend beyond mobilization."],
                ].map(([title, body]) => (
                  <div className="flex gap-3" key={title}>
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cpl-accent" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-black">{title}</p>
                      <p className="mt-1 text-xs leading-5 text-white/60">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="grid gap-5 p-6 md:p-10" aria-label="Request a CPL project quote">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="label-text">Equipment / Service</span>
                  <select className="input-field" defaultValue="Lifecycle Partner">
                    <option>Lifecycle Partner</option>
                    <option>Materials Supply</option>
                    <option>Machinery Deployment</option>
                    <option>Field Expertise</option>
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className="label-text">Project Type</span>
                  <select className="input-field" defaultValue="Industrial Developer">
                    <option>Industrial Developer</option>
                    <option>Government Project</option>
                    <option>Infrastructure</option>
                    <option>Utilities</option>
                  </select>
                </label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="label-text">Project Location</span>
                  <input className="input-field" placeholder="City / Area" aria-label="Project location" />
                </label>
                <label className="grid gap-2">
                  <span className="label-text">Purchase Timeframe</span>
                  <select className="input-field" defaultValue="Please Select">
                    <option>Please Select</option>
                    <option>Less than a month</option>
                    <option>1-3 months</option>
                    <option>4-6 months</option>
                  </select>
                </label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="label-text">Name</span>
                  <input className="input-field" placeholder="Your name" aria-label="Name" />
                </label>
                <label className="grid gap-2">
                  <span className="label-text">Business Phone</span>
                  <input className="input-field" placeholder="+880" aria-label="Business phone" />
                </label>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="label-text">Email</span>
                  <input className="input-field" type="email" placeholder="name@company.com" aria-label="Email" />
                </label>
                <label className="grid gap-2">
                  <span className="label-text">Company</span>
                  <input className="input-field" placeholder="Company name" aria-label="Company name" />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="label-text">Project Specifics</span>
                <textarea
                  className="input-field min-h-32 resize-y py-3"
                  placeholder="Tell us about the scope, expected start date, equipment needs or delivery constraints."
                  aria-label="Project specifics"
                />
              </label>
              <label className="flex items-start gap-3 text-xs leading-5 text-cpl-muted">
                <input type="checkbox" className="mt-1 accent-cpl-red" />
                <span>
                  I agree that my data from this form may be used to answer my inquiry.{" "}
                  <a className="font-bold text-cpl-red" href="#top">
                    Privacy Policy
                  </a>
                </span>
              </label>
              <button className="btn-primary justify-center" type="submit">
                <span>Send Inquiry</span>
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-cpl-charcoal text-white">
      <div className="page-shell grid gap-8 py-12 md:grid-cols-[1.2fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-[8px] bg-cpl-red text-sm font-black">C</span>
            <div>
              <p className="font-black">Constructive Partners Limited</p>
              <p className="mt-1 text-xs text-white/60">Materials, machinery and expertise.</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
            A lifecycle partner for owners building industrial, infrastructure and public-sector assets.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white/80">
            <MapPin className="size-4 text-cpl-accent" aria-hidden="true" />
            Bangladesh project support
          </div>
        </div>
        {footerGroups.map(([title, ...items]) => (
          <div key={title}>
            <h3 className="text-sm font-black">{title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
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
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBand />
        <Capabilities />
        <Delivery />
        <Scope />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
