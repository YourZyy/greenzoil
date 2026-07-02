import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Instagram, Menu, X } from "lucide-react";
//#region src/assets/greenzoil-logo.png
var greenzoil_logo_default = "/assets/greenzoil-logo-BlQjLjMD.png";
//#endregion
//#region src/components/site/Header.tsx
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/applications",
		label: "Applications"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/news",
		label: "News"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header({ transparent = false }) {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const solid = !transparent || scrolled;
	return /* @__PURE__ */ jsxs("header", {
		className: ["fixed inset-x-0 top-0 z-50 transition-all duration-300", solid ? "bg-background/85 backdrop-blur-xl border-b border-rule/80 text-foreground shadow-[0_10px_30px_rgba(15,23,42,0.04)]" : "bg-transparent text-white"].join(" "),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-wide flex h-20 items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-3 shrink-0",
					children: [/* @__PURE__ */ jsx("img", {
						src: greenzoil_logo_default,
						alt: "GreenZoil",
						className: "h-9 w-9"
					}), /* @__PURE__ */ jsxs("span", {
						className: ["font-display text-xl font-bold tracking-tight", solid ? "text-foreground" : "text-white"].join(" "),
						children: ["GREEN", /* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "ZOIL"
						})]
					})]
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden lg:flex items-center gap-8 text-sm font-medium",
					children: NAV.map((item) => /* @__PURE__ */ jsx(Link, {
						to: item.to,
						className: "relative py-2 transition-colors hover:text-primary/80 [&.active]:text-primary",
						activeOptions: { exact: item.to === "/" },
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden lg:flex items-center gap-3 shrink-0",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90",
						children: ["Request Quote", /* @__PURE__ */ jsx("span", {
							"aria-hidden": true,
							children: "→"
						})]
					})
				}),
				/* @__PURE__ */ jsx("button", {
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					className: "lg:hidden grid h-10 w-10 place-items-center rounded-full border border-rule/70 bg-background/80",
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "lg:hidden bg-background/95 backdrop-blur-xl text-foreground border-t border-rule/80",
			children: /* @__PURE__ */ jsxs("nav", {
				className: "container-wide flex flex-col py-6 gap-1",
				children: [NAV.map((item) => /* @__PURE__ */ jsx(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "py-3 text-base font-medium border-b border-rule/70",
					children: item.label
				}, item.to)), /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					onClick: () => setOpen(false),
					className: "mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground",
					children: "Request Quote"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/site/Footer.tsx
var TikTokIcon = (props) => /* @__PURE__ */ jsx("svg", {
	viewBox: "0 0 24 24",
	fill: "currentColor",
	"aria-hidden": true,
	...props,
	children: /* @__PURE__ */ jsx("path", { d: "M16.5 3a5.5 5.5 0 0 0 5 4v3a8.5 8.5 0 0 1-5-1.6V15a6 6 0 1 1-6-6v3a3 3 0 1 0 3 3V3h3z" })
});
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-ink text-ink-foreground",
		children: [/* @__PURE__ */ jsx("div", {
			className: "container-wide py-20 lg:py-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 gap-12 lg:grid-cols-12",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("img", {
									src: greenzoil_logo_default,
									alt: "GreenZoil",
									className: "h-10 w-10"
								}), /* @__PURE__ */ jsxs("span", {
									className: "font-display text-2xl font-bold",
									children: ["GREEN", /* @__PURE__ */ jsx("span", {
										className: "text-primary",
										children: "ZOIL"
									})]
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 max-w-sm text-sm text-white/60 leading-relaxed",
								children: "Premium Indonesian lubricant manufacturer engineered for automotive and industrial performance. A division of CV. Makita."
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-8 flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("a", {
									href: "https://www.instagram.com/greenzoil_official/",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "Instagram",
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:border-primary",
									children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" })
								}), /* @__PURE__ */ jsx("a", {
									href: "https://www.tiktok.com/@greenzoil",
									target: "_blank",
									rel: "noreferrer",
									"aria-label": "TikTok",
									className: "grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground hover:border-primary",
									children: /* @__PURE__ */ jsx(TikTokIcon, { className: "h-4 w-4" })
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "eyebrow text-white/50",
							children: "Company"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "hover:text-primary",
									children: "About"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/about",
									className: "hover:text-primary",
									children: "Manufacturing"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/news",
									className: "hover:text-primary",
									children: "News"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "hover:text-primary",
									children: "Careers"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-2",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "eyebrow text-white/50",
							children: "Products"
						}), /* @__PURE__ */ jsxs("ul", {
							className: "mt-6 space-y-3 text-sm",
							children: [
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/products",
									className: "hover:text-primary",
									children: "G-Turbo"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/products",
									className: "hover:text-primary",
									children: "G-Power"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/products",
									className: "hover:text-primary",
									children: "G-Hydro"
								}) }),
								/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
									to: "/applications",
									className: "hover:text-primary",
									children: "Applications"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-4",
						children: [
							/* @__PURE__ */ jsx("h4", {
								className: "eyebrow text-white/50",
								children: "Contact"
							}),
							/* @__PURE__ */ jsxs("address", {
								className: "mt-6 not-italic text-sm text-white/70 leading-relaxed",
								children: [
									"Jl. Terboyo Industri Megah XI No.3",
									/* @__PURE__ */ jsx("br", {}),
									"Terboyo Wetan, Kec. Genuk",
									/* @__PURE__ */ jsx("br", {}),
									"Kota Semarang, Jawa Tengah 50112",
									/* @__PURE__ */ jsx("br", {}),
									"Indonesia"
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-5 text-sm text-white/70",
								children: /* @__PURE__ */ jsx("a", {
									href: "tel:+6281125955557",
									className: "hover:text-primary",
									children: "+62 811-2595-557"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-5 text-xs text-white/50 leading-relaxed",
								children: [
									/* @__PURE__ */ jsx("div", {
										className: "font-medium text-white/80 uppercase tracking-wider mb-1",
										children: "Business Hours"
									}),
									"Mon – Fri · 08.00 – 17.00",
									/* @__PURE__ */ jsx("br", {}),
									"Saturday · 08.00 – 16.00",
									/* @__PURE__ */ jsx("br", {}),
									"Sunday · Closed"
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-6 overflow-hidden border border-white/10",
								children: /* @__PURE__ */ jsx("iframe", {
									title: "GreenZoil Location",
									src: "https://www.google.com/maps?q=Jl.+Terboyo+Industri+Megah+XI+No.3,+Terboyo+Wetan,+Genuk,+Semarang&output=embed",
									className: "block w-full h-44 grayscale",
									loading: "lazy"
								})
							})
						]
					})
				]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-wide flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 py-6 text-xs text-white/40",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" GreenZoil · CV. Makita. All rights reserved."
				] }), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap gap-3",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/10 px-3 py-1",
							children: "SNI Certified"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/10 px-3 py-1",
							children: "NPT Registered"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/10 px-3 py-1",
							children: "Since 2005"
						})
					]
				})]
			})
		})]
	});
}
//#endregion
export { Header as n, Footer as t };
