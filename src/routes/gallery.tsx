import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import factoryImg from "@/assets/factory.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";
import pGTurbo from "@/assets/product-gturbo.jpg";
import pGPower from "@/assets/product-gpower.jpg";
import pGHydro from "@/assets/product-ghydro.jpg";
import appAuto from "@/assets/app-automotive.jpg";
import appMoto from "@/assets/app-motorcycle.jpg";
import appHeavy from "@/assets/app-heavy.jpg";
import appIndustrial from "@/assets/app-industrial.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery · GreenZoil" },
      {
        name: "description",
        content: "Inside GreenZoil — facility, manufacturing line and product photography.",
      },
      { property: "og:title", content: "Gallery · GreenZoil" },
      {
        property: "og:description",
        content: "Inside GreenZoil — facility, manufacturing line and product photography.",
      },
    ],
  }),
  component: GalleryPage,
});

const IMAGES = [
  factoryImg,
  manufacturingImg,
  pGTurbo,
  appAuto,
  appHeavy,
  pGPower,
  appIndustrial,
  appMoto,
  pGHydro,
];

function GalleryPage() {
  return (
    <PageShell
      eyebrow="Gallery"
      title={<>Inside GreenZoil.</>}
      intro="A look at our facility, manufacturing line, products and the machinery we serve."
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
        {IMAGES.map((src, i) => (
          <div key={i} className="bg-background aspect-square overflow-hidden">
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </PageShell>
  );
}
