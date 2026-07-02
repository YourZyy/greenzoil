import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import appAuto from "@/assets/app-automotive.jpg";
import appMoto from "@/assets/app-motorcycle.jpg";
import appHeavy from "@/assets/app-heavy.jpg";
import appIndustrial from "@/assets/app-industrial.jpg";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications · GreenZoil" },
      {
        name: "description",
        content:
          "From passenger cars to mining fleets — GreenZoil lubricants serve every corner of Indonesian industry.",
      },
      { property: "og:title", content: "Applications · GreenZoil" },
      {
        property: "og:description",
        content: "GreenZoil lubricants serve every corner of Indonesian industry.",
      },
    ],
  }),
  component: ApplicationsPage,
});

const APPS = [
  {
    title: "Automotive",
    img: appAuto,
    body: "Passenger cars and commercial vehicles operating under daily Indonesian conditions.",
  },
  {
    title: "Motorcycle",
    img: appMoto,
    body: "From daily commuters to performance machines requiring high-RPM stability.",
  },
  {
    title: "Heavy Equipment",
    img: appHeavy,
    body: "Excavators, dump trucks and earthmovers for mining and construction.",
  },
  {
    title: "Industrial Machinery",
    img: appIndustrial,
    body: "Hydraulic systems, presses and CNC equipment in manufacturing plants.",
  },
];

function ApplicationsPage() {
  return (
    <PageShell
      eyebrow="Applications"
      title={<>Wherever machinery demands more.</>}
      intro="Engineered for the breadth of Indonesian industry — from a single motorcycle in the city to mining fleets in remote provinces."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
        {APPS.map((a) => (
          <div key={a.title} className="bg-background">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={a.img} alt={a.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-8 lg:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight">{a.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{a.body}</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
