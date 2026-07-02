import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { ArrowRight } from "lucide-react";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Insights · GreenZoil" },
      {
        name: "description",
        content: "Updates from the GreenZoil laboratory, supply chain and engineering teams.",
      },
      { property: "og:title", content: "News & Insights · GreenZoil" },
      {
        property: "og:description",
        content: "Updates from the GreenZoil laboratory, supply chain and engineering teams.",
      },
    ],
  }),
  component: NewsPage,
});

const POSTS = [
  {
    img: article1,
    cat: "Research",
    date: "Jun 2026",
    title: "Inside the GreenZoil laboratory: how we test every batch.",
  },
  {
    img: article2,
    cat: "Operations",
    date: "May 2026",
    title: "Building a nationwide lubricant supply chain.",
  },
  {
    img: article3,
    cat: "Engineering",
    date: "Apr 2026",
    title: "Why viscosity stability matters for heavy duty fleets.",
  },
];

function NewsPage() {
  return (
    <PageShell eyebrow="News & Insights" title={<>Latest from GreenZoil.</>}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {POSTS.map((p) => (
          <article key={p.title} className="group">
            <div className="aspect-[4/3] overflow-hidden bg-surface">
              <img
                src={p.img}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-primary font-semibold">{p.cat}</span>
              <span>·</span>
              <span>{p.date}</span>
            </div>
            <h3 className="mt-3 font-display text-xl font-bold leading-snug">{p.title}</h3>
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold border-b border-foreground pb-1">
              Read More <ArrowRight className="h-4 w-4" />
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
