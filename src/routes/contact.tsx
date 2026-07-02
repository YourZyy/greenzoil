import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight, Instagram, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · GreenZoil" },
      {
        name: "description",
        content: "Contact GreenZoil sales — request a quote, sample, or distributor partnership.",
      },
      { property: "og:title", content: "Contact · GreenZoil" },
      {
        property: "og:description",
        content: "Request a quote, sample, or distributor partnership.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title={<>Talk to our sales team.</>}
      intro="Whether you operate a single workshop or a national fleet, our team will recommend the right lubricant program for you."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Full Name" name="name" />
            <Field label="Company" name="company" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" />
            <div className="sm:col-span-2">
              <label className="eyebrow block mb-3">Message</label>
              <textarea
                rows={6}
                className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
              />
            </div>
            <button className="sm:col-span-2 justify-self-start inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold text-white hover:bg-primary hover:text-primary-foreground transition-colors">
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>

        <aside className="lg:col-span-5 space-y-8 border-l-0 lg:border-l border-rule lg:pl-12">
          <Info icon={<MapPin className="h-4 w-4" />} label="Address">
            Jl. Terboyo Industri Megah XI No.3
            <br />
            Terboyo Wetan, Kec. Genuk
            <br />
            Semarang, Jawa Tengah 50112
          </Info>
          <Info icon={<Phone className="h-4 w-4" />} label="Phone">
            <a href="tel:+6281125955557" className="hover:text-primary">
              +62 811-2595-557
            </a>
          </Info>
          <Info icon={<Clock className="h-4 w-4" />} label="Business Hours">
            Mon – Fri · 08.00 – 17.00
            <br />
            Saturday · 08.00 – 16.00
            <br />
            Sunday · Closed
          </Info>
          <Info icon={<Instagram className="h-4 w-4" />} label="Social">
            <a
              href="https://www.instagram.com/greenzoil_official/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary block"
            >
              Instagram · @greenzoil_official
            </a>
            <a
              href="https://www.tiktok.com/@greenzoil"
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary block"
            >
              TikTok · @greenzoil
            </a>
          </Info>
        </aside>
      </div>

      <div className="mt-20 border border-rule">
        <iframe
          title="GreenZoil Location"
          src="https://www.google.com/maps?q=Jl.+Terboyo+Industri+Megah+XI+No.3,+Terboyo+Wetan,+Genuk,+Semarang&output=embed"
          className="block w-full h-[420px] grayscale"
          loading="lazy"
        />
      </div>
    </PageShell>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="w-full border border-rule bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function Info({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 text-primary">
        {icon}
        <span className="eyebrow text-foreground">{label}</span>
      </div>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
