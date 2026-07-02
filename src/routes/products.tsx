import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import pGTurbo from "@/assets/product-gturbo.jpg";
import pGPower from "@/assets/product-gpower.jpg";
import pGHydro from "@/assets/product-ghydro.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products · GreenZoil" },
      {
        name: "description",
        content:
          "GreenZoil G-Turbo, G-Power and G-Hydro — premium lubricants engineered for automotive and industrial machinery.",
      },
      { property: "og:title", content: "Products · GreenZoil" },
      {
        property: "og:description",
        content: "Premium lubricants engineered for automotive and industrial machinery.",
      },
    ],
  }),
  component: ProductsPage,
});

const PRODUCTS = [
  {
    name: "GreenZoil G-Turbo",
    code: "G-01",
    img: pGTurbo,
    desc: "High-performance turbo engine oil engineered for forced-induction powertrains.",
    specs: ["SAE 5W-40 / 10W-40", "API SN / CF", "Synthetic blend"],
  },
  {
    name: "GreenZoil G-Power",
    code: "G-02",
    img: pGPower,
    desc: "Heavy-duty motor oil formulated for commercial fleets and high-load operation.",
    specs: ["SAE 15W-40 / 20W-50", "API CI-4 / SL", "Mineral premium"],
  },
  {
    name: "GreenZoil G-Hydro",
    code: "G-03",
    img: pGHydro,
    desc: "Industrial hydraulic fluid designed for precision machinery and heavy equipment.",
    specs: ["ISO VG 32 / 46 / 68", "DIN 51524 Part 2", "Anti-wear AW"],
  },
];

function ProductsPage() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title={<>Premium product portfolio.</>}
      intro="Three engineered product lines covering passenger, commercial and industrial applications across Indonesia."
    >
      <div className="space-y-24">
        {PRODUCTS.map((p, i) => (
          <div key={p.code} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="aspect-[4/5] bg-ink overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className={`lg:col-span-6 ${i % 2 ? "lg:order-1" : ""}`}>
              <div className="text-xs tracking-[0.2em] uppercase text-primary">{p.code}</div>
              <h2 className="display-section mt-4">{p.name}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{p.desc}</p>
              <ul className="mt-8 divide-y divide-rule border-y border-rule">
                {p.specs.map((s) => (
                  <li key={s} className="py-4 flex justify-between text-sm">
                    <span className="text-muted-foreground">Specification</span>
                    <span className="font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
