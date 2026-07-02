import { n as Header, t as Footer } from "./Footer-BCmWMN9z.js";
import { n as factory_default, t as manufacturing_default } from "./manufacturing-CZ52o_fR.js";
import { i as app_automotive_default, n as app_heavy_default, r as app_motorcycle_default, t as app_industrial_default } from "./app-industrial-BKOa8ugD.js";
import { n as product_gpower_default, r as product_gturbo_default, t as product_ghydro_default } from "./product-ghydro-BlhnQMPE.js";
import { n as article_2_default, r as article_1_default, t as article_3_default } from "./article-3-DY8FQTrz.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ArrowUpRight, Award, Download, Droplet, Gauge, Shield, Thermometer, Truck } from "lucide-react";
//#region src/assets/hero-bottles.jpg
var hero_bottles_default = "/assets/hero-bottles-CoM2aBfD.jpg";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function HomePage() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Header, { transparent: true }),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(WhyGreenzoil, {}),
				/* @__PURE__ */ jsx(Products, {}),
				/* @__PURE__ */ jsx(Applications, {}),
				/* @__PURE__ */ jsx(Manufacturing, {}),
				/* @__PURE__ */ jsx(Timeline, {}),
				/* @__PURE__ */ jsx(Articles, {}),
				/* @__PURE__ */ jsx(CallToAction, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative min-h-[92svh] overflow-hidden bg-ink text-white",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "absolute inset-0",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: hero_bottles_default,
					alt: "",
					"aria-hidden": true,
					className: "h-full w-full object-cover object-center opacity-55"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-ink/60" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)]" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "container-wide relative z-10 flex min-h-[92svh] flex-col justify-between pt-36 pb-14 lg:pt-44 lg:pb-20",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
				children: /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-9 fade-up",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3 text-white/55",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-primary" }), /* @__PURE__ */ jsx("span", {
								className: "eyebrow text-white/55",
								children: "Industrial Lubricants — Est. 2005"
							})]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-8 max-w-5xl font-display font-semibold tracking-[-0.03em] leading-[1] text-[clamp(2.75rem,6vw,5.1rem)]",
							children: [
								"Engineered for",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "text-primary",
									children: "every industry."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-8 max-w-xl text-base lg:text-lg text-white/70 leading-relaxed",
							children: "Premium lubricants developed for automotive vehicles and industrial machinery — delivering superior protection, maximum efficiency and long-lasting performance."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/products",
								className: "inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90",
								children: ["Explore Products ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ jsxs("a", {
								href: "#catalog",
								className: "inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/5",
								children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), " Download Catalog"]
							})]
						})
					]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 border-t border-white/10 pt-8",
				children: /* @__PURE__ */ jsxs("div", {
					className: "flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-white/45",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/10 px-4 py-2",
							children: "SNI Certified"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/10 px-4 py-2",
							children: "NPT Registered"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "rounded-full border border-white/10 px-4 py-2",
							children: "Manufactured in Indonesia"
						}),
						/* @__PURE__ */ jsx("span", {
							className: "hidden lg:inline-flex rounded-full border border-white/10 px-4 py-2",
							children: "100+ Distributor Partners"
						})
					]
				})
			})]
		})]
	});
}
var STATS = [
	{
		value: "20+",
		label: "Years Experience"
	},
	{
		value: "3",
		label: "Main Product Lines"
	},
	{
		value: "100+",
		label: "Business Partners"
	},
	{
		value: "1000+",
		label: "Satisfied Customers"
	}
];
function About() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-wide py-24 lg:py-32",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ jsx("div", {
						className: "relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface shadow-[0_18px_50px_rgba(15,23,42,0.08)]",
						children: /* @__PURE__ */ jsx("img", {
							src: factory_default,
							alt: "GreenZoil manufacturing facility",
							className: "h-full w-full object-cover",
							loading: "lazy"
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-6 lg:pt-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "About GreenZoil"
							})]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "display-section mt-6",
							children: [
								"Indonesian engineering.",
								/* @__PURE__ */ jsx("br", {}),
								"Industrial excellence."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-8 text-base lg:text-lg text-muted-foreground leading-relaxed",
							children: "GreenZoil is the lubricant division of CV. Makita — an Indonesian manufacturer with two decades of industrial heritage. We engineer premium oils for the country's most demanding fleets, factories and equipment."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-base text-muted-foreground leading-relaxed",
							children: "Every barrel reflects a commitment to quality, scientific innovation, and the long-term performance of the machinery our partners depend on."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-rule pt-10",
							children: STATS.map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
								className: "font-display text-4xl lg:text-5xl font-bold tracking-tight text-foreground",
								children: s.value
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground",
								children: s.label
							})] }, s.label))
						})
					]
				})]
			})
		})
	});
}
var FEATURES = [
	{
		icon: Shield,
		title: "Engine Protection",
		body: "Anti-wear additives shield critical surfaces under extreme loads."
	},
	{
		icon: Gauge,
		title: "Fuel Efficiency",
		body: "Low-friction formulations reduce consumption and operating cost."
	},
	{
		icon: Thermometer,
		title: "Temperature Stability",
		body: "Stable viscosity across the full thermal range of heavy duty."
	},
	{
		icon: Droplet,
		title: "Premium Base Oil",
		body: "High-purity Group II/III base stocks deliver consistent quality."
	},
	{
		icon: Award,
		title: "Certified Quality",
		body: "SNI certified, NPT registered, batch-tested in our laboratory."
	},
	{
		icon: Truck,
		title: "Reliable Supply",
		body: "Nationwide logistics and a partner network of 100+ distributors."
	}
];
function WhyGreenzoil() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-wide py-24 lg:py-32",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center justify-center gap-3",
					children: [
						/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }),
						/* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Why GreenZoil"
						}),
						/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" })
					]
				}), /* @__PURE__ */ jsxs("h2", {
					className: "display-section mt-6",
					children: [
						"Built for performance.",
						/* @__PURE__ */ jsx("br", {}),
						"Made to last."
					]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: FEATURES.map((f) => /* @__PURE__ */ jsxs("div", {
					className: "group relative overflow-hidden rounded-3xl border border-rule bg-background p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-ink hover:text-white hover:shadow-xl",
					children: [
						/* @__PURE__ */ jsx(f.icon, {
							className: "h-7 w-7 text-primary",
							strokeWidth: 1.4
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-8 font-display text-2xl font-bold tracking-tight",
							children: f.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed group-hover:text-white/70",
							children: f.body
						})
					]
				}, f.title))
			})]
		})
	});
}
var PRODUCTS = [
	{
		name: "GreenZoil G-Turbo",
		img: product_gturbo_default,
		desc: "High-performance turbo engine oil engineered for forced-induction powertrains.",
		apps: [
			"Turbocharged engines",
			"High-RPM applications",
			"Performance vehicles"
		],
		benefits: ["Superior thermal stability", "Anti-wear protection"],
		code: "G-01"
	},
	{
		name: "GreenZoil G-Power",
		img: product_gpower_default,
		desc: "Heavy-duty motor oil formulated for commercial fleets and high-load operation.",
		apps: [
			"Trucks & buses",
			"Commercial fleets",
			"Diesel engines"
		],
		benefits: ["Extended drain intervals", "Soot dispersancy"],
		code: "G-02"
	},
	{
		name: "GreenZoil G-Hydro",
		img: product_ghydro_default,
		desc: "Industrial hydraulic fluid designed for precision machinery and heavy equipment.",
		apps: [
			"Hydraulic systems",
			"Heavy equipment",
			"Industrial presses"
		],
		benefits: ["Anti-foam stability", "Filterability"],
		code: "G-03"
	}
];
function Products() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-wide py-24 lg:py-32",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Premium Portfolio"
					})]
				}), /* @__PURE__ */ jsxs("h2", {
					className: "display-section mt-6 max-w-2xl",
					children: [
						"Premium product",
						/* @__PURE__ */ jsx("br", {}),
						"portfolio."
					]
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/products",
					className: "inline-flex items-center gap-2 text-sm font-semibold hover:text-primary group",
					children: ["View all products", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",
				children: PRODUCTS.map((p) => /* @__PURE__ */ jsxs("article", {
					className: "group overflow-hidden rounded-3xl border border-rule bg-background flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-surface hover:shadow-xl",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "relative aspect-[4/5] overflow-hidden bg-ink",
						children: [/* @__PURE__ */ jsx("img", {
							src: p.img,
							alt: p.name,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
							loading: "lazy"
						}), /* @__PURE__ */ jsx("div", {
							className: "absolute top-4 left-4 rounded-full bg-black/30 px-3 py-1 text-[10px] tracking-[0.2em] uppercase text-white/80 backdrop-blur-sm",
							children: p.code
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-8 lg:p-10 flex flex-col flex-1",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl font-bold tracking-tight",
								children: p.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed",
								children: p.desc
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 space-y-4 text-sm",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "eyebrow mb-2",
									children: "Applications"
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-2 text-foreground/80",
									children: p.apps.map((a) => /* @__PURE__ */ jsxs("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" }), a]
									}, a))
								})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
									className: "eyebrow mb-2",
									children: "Key Benefits"
								}), /* @__PURE__ */ jsx("ul", {
									className: "space-y-2 text-foreground/80",
									children: p.benefits.map((b) => /* @__PURE__ */ jsxs("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" }), b]
									}, b))
								})] })]
							}),
							/* @__PURE__ */ jsxs(Link, {
								to: "/products",
								className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 self-start hover:text-primary transition-colors",
								children: ["Learn More ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					})]
				}, p.name))
			})]
		})
	});
}
var APPS = [
	{
		title: "Automotive",
		img: app_automotive_default,
		tag: "Passenger Car / Truck"
	},
	{
		title: "Motorcycle",
		img: app_motorcycle_default,
		tag: "Performance / Daily"
	},
	{
		title: "Heavy Equipment",
		img: app_heavy_default,
		tag: "Mining / Construction"
	},
	{
		title: "Industrial Machinery",
		img: app_industrial_default,
		tag: "Manufacturing / Hydraulics"
	}
];
function Applications() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-ink text-white",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-wide py-24 lg:py-32",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-end",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-white/60",
						children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
							className: "eyebrow text-white/60",
							children: "Applications"
						})]
					}), /* @__PURE__ */ jsxs("h2", {
						className: "display-section mt-6 text-white",
						children: [
							"Wherever machinery",
							/* @__PURE__ */ jsx("br", {}),
							"demands more."
						]
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "lg:col-span-5 text-base text-white/60 leading-relaxed",
					children: "Engineered for the breadth of Indonesian industry — from a single motorcycle in the city to mining fleets in remote provinces."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",
				children: APPS.map((a) => /* @__PURE__ */ jsxs("div", {
					className: "group relative aspect-[3/4] overflow-hidden rounded-3xl bg-ink shadow-lg ring-1 ring-white/10",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: a.img,
							alt: a.title,
							className: "h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105",
							loading: "lazy"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" }),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute inset-x-0 bottom-0 p-6 lg:p-8",
							children: [/* @__PURE__ */ jsx("div", {
								className: "text-[10px] tracking-[0.2em] uppercase text-primary",
								children: a.tag
							}), /* @__PURE__ */ jsx("div", {
								className: "mt-2 font-display text-2xl font-bold tracking-tight",
								children: a.title
							})]
						})
					]
				}, a.title))
			})]
		})
	});
}
function Manufacturing() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background",
		children: /* @__PURE__ */ jsx("div", {
			className: "container-wide py-24 lg:py-32",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-7 order-2 lg:order-1",
					children: /* @__PURE__ */ jsx("div", {
						className: "aspect-[4/3] lg:aspect-[5/4] overflow-hidden rounded-3xl bg-surface shadow-[0_18px_50px_rgba(15,23,42,0.08)]",
						children: /* @__PURE__ */ jsx("img", {
							src: manufacturing_default,
							alt: "Manufacturing line",
							className: "h-full w-full object-cover",
							loading: "lazy"
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-5 order-1 lg:order-2",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
								className: "eyebrow",
								children: "Manufacturing"
							})]
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "display-section mt-6",
							children: [
								"Manufactured",
								/* @__PURE__ */ jsx("br", {}),
								"with precision."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-8 text-base text-muted-foreground leading-relaxed",
							children: "Every GreenZoil product is engineered through an integrated process — from raw base oil selection and additive blending through automated filling, sealing and laboratory verification."
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-10 divide-y divide-rule border-y border-rule rounded-2xl overflow-hidden bg-background/60 backdrop-blur-sm",
							children: [
								"Production",
								"Quality Control",
								"Research",
								"Packaging",
								"Laboratory"
							].map((c, i) => /* @__PURE__ */ jsxs("li", {
								className: "flex items-center justify-between py-4",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-display text-lg font-semibold",
									children: c
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-xs text-muted-foreground tracking-[0.18em] uppercase",
									children: ["0", i + 1]
								})]
							}, c))
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/about",
							className: "mt-10 inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary hover:text-primary-foreground",
							children: ["Learn About Manufacturing ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})
		})
	});
}
var TIMELINE = [
	{
		year: "2005",
		title: "CV. Makita Founded",
		body: "Beginning of an industrial heritage in Semarang."
	},
	{
		year: "2016",
		title: "Furniture Industry",
		body: "Expanded operations into furniture manufacturing."
	},
	{
		year: "2018",
		title: "Packaging Industry",
		body: "Diversified production into industrial packaging."
	},
	{
		year: "2020",
		title: "GreenZoil Lubricants",
		body: "Launched the GreenZoil lubricant division."
	}
];
function Timeline() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-surface",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-wide py-24 lg:py-32",
			children: [/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-end",
				children: /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
							className: "eyebrow",
							children: "Heritage"
						})]
					}), /* @__PURE__ */ jsxs("h2", {
						className: "display-section mt-6",
						children: [
							"Two decades",
							/* @__PURE__ */ jsx("br", {}),
							"in industry."
						]
					})]
				})
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-16 relative",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute left-0 right-0 top-[3.25rem] h-px bg-foreground/15 hidden lg:block" }), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8",
					children: TIMELINE.map((t, i) => /* @__PURE__ */ jsxs("div", {
						className: "relative rounded-2xl border border-rule bg-background/70 p-6 shadow-sm backdrop-blur-sm",
						children: [/* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute -top-1 left-0 h-3 w-3 rounded-full bg-primary ring-4 ring-surface" }), /* @__PURE__ */ jsxs("div", {
							className: "lg:pt-12",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "font-display text-5xl lg:text-6xl font-bold tracking-tight text-foreground",
									children: t.year
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground",
									children: ["Stage 0", i + 1]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-4 font-display text-xl font-semibold",
									children: t.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-2 text-sm text-muted-foreground leading-relaxed",
									children: t.body
								})
							]
						})]
					}, t.year))
				})]
			})]
		})
	});
}
var ARTICLES = [
	{
		img: article_1_default,
		cat: "Research",
		title: "Inside the GreenZoil laboratory: how we test every batch."
	},
	{
		img: article_2_default,
		cat: "Operations",
		title: "Building a nationwide lubricant supply chain."
	},
	{
		img: article_3_default,
		cat: "Engineering",
		title: "Why viscosity stability matters for heavy duty fleets."
	}
];
function Articles() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "container-wide py-24 lg:py-32",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
						className: "eyebrow",
						children: "Latest Articles"
					})]
				}), /* @__PURE__ */ jsx("h2", {
					className: "display-section mt-6",
					children: "News & insights."
				})] }), /* @__PURE__ */ jsxs(Link, {
					to: "/news",
					className: "inline-flex items-center gap-2 text-sm font-semibold hover:text-primary",
					children: ["All articles ", /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8",
				children: ARTICLES.map((a, i) => /* @__PURE__ */ jsxs("article", {
					className: "group",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "aspect-[4/3] overflow-hidden rounded-3xl bg-surface shadow-sm",
							children: /* @__PURE__ */ jsx("img", {
								src: a.img,
								alt: "",
								className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-primary font-semibold",
									children: a.cat
								}),
								/* @__PURE__ */ jsx("span", { children: "·" }),
								/* @__PURE__ */ jsxs("span", { children: ["0", i + 1] })
							]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-3 font-display text-xl lg:text-2xl font-bold tracking-tight leading-snug group-hover:text-primary",
							children: a.title
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/news",
							className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground/90 hover:text-primary transition-colors",
							children: ["Read More ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}, a.title))
			})]
		})
	});
}
function CallToAction() {
	return /* @__PURE__ */ jsxs("section", {
		className: "bg-ink text-white relative overflow-hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "container-wide py-28 lg:py-40 relative z-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-end",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-8",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-3 text-white/60",
						children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
							className: "eyebrow text-white/60",
							children: "Get in touch"
						})]
					}), /* @__PURE__ */ jsxs("h2", {
						className: "display-hero mt-8 text-white max-w-4xl",
						children: [
							"Need premium lubricants",
							/* @__PURE__ */ jsx("br", {}),
							"for your ",
							/* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "business?"
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-4 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90",
						children: ["Contact Sales ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ jsxs("a", {
						href: "#catalog",
						className: "inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/5",
						children: [/* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }), " Download Catalog"]
					})]
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "absolute -right-20 -bottom-20 font-display text-[16rem] lg:text-[22rem] leading-none text-white/[0.04] select-none pointer-events-none",
			children: "GZ"
		})]
	});
}
//#endregion
export { HomePage as component };
