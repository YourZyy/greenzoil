import type { ReactNode } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-20">
        <section className="bg-surface/80 border-b border-rule/80 backdrop-blur-sm">
          <div className="container-wide py-24 lg:py-32">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
            <h1 className="display-section mt-6 max-w-4xl">{title}</h1>
            {intro && (
              <p className="mt-8 max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        </section>
        {children && (
          <section className="bg-background">
            <div className="container-wide py-24 lg:py-32">{children}</div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
