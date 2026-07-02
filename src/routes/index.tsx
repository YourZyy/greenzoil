import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Shield,
  Gauge,
  Thermometer,
  Droplet,
  Award,
  Truck,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

import heroBottles from "@/assets/hero-bottles.jpg";
import factoryImg from "@/assets/factory.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import pGTurbo from "@/assets/product-gturbo.jpg";
import pGPower from "@/assets/product-gpower.jpg";
import pGHydro from "@/assets/product-ghydro.jpg";
import appAuto from "@/assets/app-automotive.jpg";
import appMoto from "@/assets/app-motorcycle.jpg";
import appHeavy from "@/assets/app-heavy.jpg";
import appIndustrial from "@/assets/app-industrial.jpg";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GreenZoil · Engineered for Every Industry" },
      {
        name: "description",
        content:
          "Premium Indonesian lubricants developed for automotive vehicles and industrial machinery — superior protection, maximum efficiency, long-lasting performance.",
      },
      { property: "og:title", content: "GreenZoil · Engineered for Every Industry" },
      {
        property: "og:description",
        content: "Premium Indonesian lubricants for automotive and industrial machinery.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header transparent />
      <main>
        <Hero />
        <About />
        <WhyGreenzoil />
        <Products />
        <Applications />
        <Manufacturing />
        <Timeline />
        <Articles />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

/* ============== HERO ============== */
function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-ink text-white">
      {/* background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBottles}
          alt=""
          aria-hidden
          className="h-full w-full object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-ink/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)]" />
      </div>

      <div className="container-wide relative z-10 flex min-h-[92svh] flex-col justify-between pt-36 pb-14 lg:pt-44 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-9 fade-up">
            <div className="flex items-center gap-3 text-white/55">
              <span className="h-px w-8 bg-primary" />
              <span className="eyebrow text-white/55">Industrial Lubricants — Est. 2005</span>
            </div>
            <h1 className="mt-8 max-w-5xl font-display font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2.75rem,6vw,5.1rem)]">
              Engineered for
              <br />
              <span className="text-primary">every industry.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed">
              Premium lubricants developed for automotive vehicles and industrial machinery —
              delivering superior protection, maximum efficiency and long-lasting performance.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#catalog"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5"
              >
                <Download className="h-4 w-4" /> Download Catalog
              </a>
            </div>
          </div>
        </div>

        {/* bottom strip: trust marks */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/45">
            <span className="rounded-full border border-white/10 px-4 py-2">SNI Certified</span>
            <span className="rounded-full border border-white/10 px-4 py-2">NPT Registered</span>
            <span className="rounded-full border border-white/10 px-4 py-2">
              Manufactured in Indonesia
            </span>
            <span className="hidden lg:inline-flex rounded-full border border-white/10 px-4 py-2">
              100+ Distributor Partners
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== ABOUT ============== */
const STATS = [
  { value: "20+", label: "Years Experience" },
  { value: "3", label: "Main Product Lines" },
  { value: "100+", label: "Business Partners" },
  { value: "1000+", label: "Satisfied Customers" },
] as const;

function About() {
  return (
    <section className="bg-background">
      <div className="container-wide py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <img
                src={factoryImg}
                alt="GreenZoil manufacturing facility"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-6 lg:pt-12">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">About GreenZoil</span>
            </div>
            <h2 className="display-section mt-6">
              Indonesian engineering.
              <br />
              Industrial excellence.
            </h2>
            <p className="mt-8 text-base lg:text-lg text-muted-foreground leading-relaxed">
              GreenZoil is the lubricant division of CV. Makita — an Indonesian manufacturer with
              two decades of industrial heritage. We engineer premium oils for the country's most
              demanding fleets, factories and equipment.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Every barrel reflects a commitment to quality, scientific innovation, and the
              long-term performance of the machinery our partners depend on.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule pt-10">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                    {s.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== WHY ============== */
const FEATURES = [
  {
    icon: Shield,
    title: "Engine Protection",
    body: "Anti-wear additives shield critical surfaces under extreme loads.",
  },
  {
    icon: Gauge,
    title: "Fuel Efficiency",
    body: "Low-friction formulations reduce consumption and operating cost.",
  },
  {
    icon: Thermometer,
    title: "Temperature Stability",
    body: "Stable viscosity across the full thermal range of heavy duty.",
  },
  {
    icon: Droplet,
    title: "Premium Base Oil",
    body: "High-purity Group II/III base stocks deliver consistent quality.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    body: "SNI certified, NPT registered, batch-tested in our laboratory.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    body: "Nationwide logistics and a partner network of 100+ distributors.",
  },
] as const;

function WhyGreenzoil() {
  return (
    <section className="bg-surface">
      <div className="container-wide py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="eyebrow">Why GreenZoil</span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="display-section mt-6">
            Built for performance.
            <br />
            Made to last.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-3xl border border-rule bg-background p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white hover:shadow-xl"
            >
              <f.icon className="h-7 w-7 text-primary" strokeWidth={1.4} />
              <h3 className="mt-8 font-display text-2xl font-bold tracking-tight">{f.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-white/70">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== PRODUCTS ============== */
const PRODUCTS = [
  {
    name: "GreenZoil G-Turbo",
    img: pGTurbo,
    desc: "High-performance turbo engine oil engineered for forced-induction powertrains.",
    apps: ["Turbocharged engines", "High-RPM applications", "Performance vehicles"],
    benefits: ["Superior thermal stability", "Anti-wear protection"],
    code: "G-01",
  },
  {
    name: "GreenZoil G-Power",
    img: pGPower,
    desc: "Heavy-duty motor oil formulated for commercial fleets and high-load operation.",
    apps: ["Trucks & buses", "Commercial fleets", "Diesel engines"],
    benefits: ["Extended drain intervals", "Soot dispersancy"],
    code: "G-02",
  },
  {
    name: "GreenZoil G-Hydro",
    img: pGHydro,
    desc: "Industrial hydraulic fluid designed for precision machinery and heavy equipment.",
    apps: ["Hydraulic systems", "Heavy equipment", "Industrial presses"],
    benefits: ["Anti-foam stability", "Filterability"],
    code: "G-03",
  },
] as const;

function Products() {
  return (
    <section className="bg-background">
      <div className="container-wide py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">Premium Portfolio</span>
            </div>
            <h2 className="display-section mt-6 max-w-2xl">
              Premium product
              <br />
              portfolio.
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary group"
          >
            View all products
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-3xl border border-rule bg-background flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 rounded-full bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/80 backdrop-blur-sm">
                  {p.code}
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col flex-1">
                <h3 className="font-display text-2xl font-bold tracking-tight">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <div className="eyebrow mb-2">Applications</div>
                    <ul className="space-y-2 text-foreground/80">
                      {p.apps.map((a) => (
                        <li key={a} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="eyebrow mb-2">Key Benefits</div>
                    <ul className="space-y-2 text-foreground/80">
                      {p.benefits.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  to="/products"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 self-start hover:text-primary transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== APPLICATIONS ============== */
const APPS = [
  { title: "Automotive", img: appAuto, tag: "Passenger Car / Truck" },
  { title: "Motorcycle", img: appMoto, tag: "Performance / Daily" },
  { title: "Heavy Equipment", img: appHeavy, tag: "Mining / Construction" },
  { title: "Industrial Machinery", img: appIndustrial, tag: "Manufacturing / Hydraulics" },
] as const;

function Applications() {
  return (
    <section className="bg-ink text-white">
      <div className="container-wide py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-white/60">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow text-white/60">Applications</span>
            </div>
            <h2 className="display-section mt-6 text-white">
              Wherever machinery
              <br />
              demands more.
            </h2>
          </div>
          <p className="lg:col-span-5 text-base text-white/60 leading-relaxed">
            Engineered for the breadth of Indonesian industry — from a single motorcycle in the city
            to mining fleets in remote provinces.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {APPS.map((a) => (
            <div
              key={a.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink shadow-lg ring-1 ring-white/10"
            >
              <img
                src={a.img}
                alt={a.title}
                className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                <div className="text-[10px] tracking-[0.2em] uppercase text-primary">{a.tag}</div>
                <div className="mt-2 font-display text-2xl font-bold tracking-tight">{a.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== MANUFACTURING ============== */
function Manufacturing() {
  const capabilities = ["Production", "Quality Control", "Research", "Packaging", "Laboratory"];
  return (
    <section className="bg-background">
      <div className="container-wide py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-3xl bg-surface shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
              <img
                src={manufacturingImg}
                alt="Manufacturing line"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">Manufacturing</span>
            </div>
            <h2 className="display-section mt-6">
              Manufactured
              <br />
              with precision.
            </h2>
            <p className="mt-8 text-base text-muted-foreground leading-relaxed">
              Every GreenZoil product is engineered through an integrated process — from raw base
              oil selection and additive blending through automated filling, sealing and laboratory
              verification.
            </p>

            <ul className="mt-10 divide-y divide-rule border-y border-rule rounded-2xl overflow-hidden bg-background/60 backdrop-blur-sm">
              {capabilities.map((c, i) => (
                <li key={c} className="flex items-center justify-between py-4">
                  <span className="font-display text-lg font-semibold">{c}</span>
                  <span className="text-xs text-muted-foreground tracking-[0.18em] uppercase">
                    0{i + 1}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Learn About Manufacturing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== TIMELINE ============== */
const TIMELINE = [
  {
    year: "2005",
    title: "CV. Makita Founded",
    body: "Beginning of an industrial heritage in Semarang.",
  },
  {
    year: "2016",
    title: "Furniture Industry",
    body: "Expanded operations into furniture manufacturing.",
  },
  {
    year: "2018",
    title: "Packaging Industry",
    body: "Diversified production into industrial packaging.",
  },
  {
    year: "2020",
    title: "GreenZoil Lubricants",
    body: "Launched the GreenZoil lubricant division.",
  },
] as const;

function Timeline() {
  return (
    <section className="bg-surface">
      <div className="container-wide py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">Heritage</span>
            </div>
            <h2 className="display-section mt-6">
              Two decades
              <br />
              in industry.
            </h2>
          </div>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-[3.25rem] h-px bg-foreground/15 hidden lg:block" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {TIMELINE.map((t, i) => (
              <div
                key={t.year}
                className="relative rounded-2xl border border-rule bg-background/70 p-6 shadow-sm backdrop-blur-sm"
              >
                <div className="hidden lg:block absolute -top-1 left-0 h-3 w-3 rounded-full bg-primary ring-4 ring-surface" />
                <div className="lg:pt-12">
                  <div className="font-display text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    {t.year}
                  </div>
                  <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Stage 0{i + 1}
                  </div>
                  <div className="mt-4 font-display text-xl font-semibold">{t.title}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== ARTICLES ============== */
const ARTICLES = [
  {
    img: article1,
    cat: "Research",
    title: "Inside the GreenZoil laboratory: how we test every batch.",
  },
  { img: article2, cat: "Operations", title: "Building a nationwide lubricant supply chain." },
  {
    img: article3,
    cat: "Engineering",
    title: "Why viscosity stability matters for heavy duty fleets.",
  },
] as const;

function Articles() {
  return (
    <section className="bg-background">
      <div className="container-wide py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">Latest Articles</span>
            </div>
            <h2 className="display-section mt-6">News & insights.</h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
          >
            All articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
          {ARTICLES.map((a, i) => (
            <article key={a.title} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-surface shadow-sm">
                <img
                  src={a.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="text-primary font-semibold">{a.cat}</span>
                <span>·</span>
                <span>0{i + 1}</span>
              </div>
              <h3 className="mt-3 font-display text-xl lg:text-2xl font-bold tracking-tight leading-snug group-hover:text-primary">
                {a.title}
              </h3>
              <Link
                to="/news"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-primary transition-colors"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CTA ============== */
function CallToAction() {
  return (
    <section className="bg-ink text-white relative overflow-hidden">
      <div className="container-wide py-28 lg:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-white/60">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow text-white/60">Get in touch</span>
            </div>
            <h2 className="display-hero mt-8 text-white max-w-4xl">
              Need premium lubricants
              <br />
              for your <span className="text-primary">business?</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#catalog"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Download Catalog
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -right-20 -bottom-20 font-display text-[16rem] lg:text-[22rem] leading-none text-white/[0.04] select-none pointer-events-none">
        GZ
      </div>
    </section>
  );
}
