import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import logo from "@/assets/greenzoil-logo.png";

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
    <path d="M16.5 3a5.5 5.5 0 0 0 5 4v3a8.5 8.5 0 0 1-5-1.6V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-wide py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="GreenZoil" className="h-10 w-10" />
              <span className="font-display text-2xl font-bold">
                GREEN<span className="text-primary">ZOIL</span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm text-white/60 leading-relaxed">
              Premium Indonesian lubricant manufacturer engineered for automotive and industrial
              performance. A division of CV. Makita.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/greenzoil_official/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@greenzoil"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow text-white/50">Company</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-primary">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow text-white/50">Products</h4>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <Link to="/products" className="hover:text-primary">
                  G-Turbo
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary">
                  G-Power
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-primary">
                  G-Hydro
                </Link>
              </li>
              <li>
                <Link to="/applications" className="hover:text-primary">
                  Applications
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="eyebrow text-white/50">Contact</h4>
            <address className="mt-6 not-italic text-sm text-white/70 leading-relaxed">
              Jl. Terboyo Industri Megah XI No.3
              <br />
              Terboyo Wetan, Kec. Genuk
              <br />
              Kota Semarang, Jawa Tengah 50112
              <br />
              Indonesia
            </address>
            <div className="mt-5 text-sm text-white/70">
              <a href="tel:+6281125955557" className="hover:text-primary">
                +62 811-2595-557
              </a>
            </div>
            <div className="mt-5 text-xs text-white/50 leading-relaxed">
              <div className="font-medium text-white/80 uppercase tracking-wider mb-1">
                Business Hours
              </div>
              Mon – Fri · 08.00 – 17.00
              <br />
              Saturday · 08.00 – 16.00
              <br />
              Sunday · Closed
            </div>

            <div className="mt-6 overflow-hidden border border-white/10">
              <iframe
                title="GreenZoil Location"
                src="https://www.google.com/maps?q=Jl.+Terboyo+Industri+Megah+XI+No.3,+Terboyo+Wetan,+Genuk,+Semarang&output=embed"
                className="block w-full h-44 grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6 text-xs text-white/40">
          <div>© {new Date().getFullYear()} GreenZoil · CV. Makita. All rights reserved.</div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-3 py-1">SNI Certified</span>
            <span className="rounded-full border border-white/10 px-3 py-1">NPT Registered</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Since 2005</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
