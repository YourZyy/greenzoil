import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import factoryImg from "@/assets/factory.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · GreenZoil" },
      {
        name: "description",
        content:
          "GreenZoil is the lubricant division of CV. Makita — an Indonesian manufacturer with two decades of industrial heritage.",
      },
      { property: "og:title", content: "About · GreenZoil" },
      { property: "og:description", content: "Indonesian engineering. Industrial excellence." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title={
        <>
          Indonesian engineering.
          <br />
          Industrial excellence.
        </>
      }
      intro="GreenZoil is the lubricant division of CV. Makita — engineering premium oils for the country's most demanding fleets, factories and equipment since 2005."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-6 text-base text-muted-foreground leading-relaxed">
          <p>
            Founded in Semarang in 2005, CV. Makita built two decades of manufacturing expertise
            across furniture, packaging and now lubricants. GreenZoil consolidates that heritage
            into a single, focused product mission: premium oils for Indonesia.
          </p>
          <p>
            We blend at our facility in Terboyo Industrial Estate using carefully selected Group II
            and III base stocks, paired with proven additive chemistries. Every batch is verified in
            our on-site laboratory before release.
          </p>
          <p>
            Our products power motorcycles, passenger cars, trucks, hydraulic systems and heavy
            equipment across the archipelago — supported by a distributor network of more than one
            hundred partners.
          </p>
        </div>
        <div className="lg:col-span-5">
          <img src={factoryImg} alt="Factory" className="w-full aspect-[4/5] object-cover" />
        </div>
      </div>

      <div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <img
          src={manufacturingImg}
          alt="Manufacturing"
          className="lg:col-span-7 w-full aspect-[5/4] object-cover"
        />
        <div className="lg:col-span-5">
          <div className="eyebrow">Manufacturing</div>
          <h2 className="display-section mt-4">Built in Semarang.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Our blending hall, packaging line and quality laboratory operate under a single roof —
            enabling tight control over every step from raw material to sealed bottle.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
