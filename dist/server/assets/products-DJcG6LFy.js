import { t as PageShell } from "./PageShell-Cie3hzS1.js";
import { n as product_gpower_default, r as product_gturbo_default, t as product_ghydro_default } from "./product-ghydro-BlhnQMPE.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/products.tsx?tsr-split=component
var PRODUCTS = [
	{
		name: "GreenZoil G-Turbo",
		code: "G-01",
		img: product_gturbo_default,
		desc: "High-performance turbo engine oil engineered for forced-induction powertrains.",
		specs: [
			"SAE 5W-40 / 10W-40",
			"API SN / CF",
			"Synthetic blend"
		]
	},
	{
		name: "GreenZoil G-Power",
		code: "G-02",
		img: product_gpower_default,
		desc: "Heavy-duty motor oil formulated for commercial fleets and high-load operation.",
		specs: [
			"SAE 15W-40 / 20W-50",
			"API CI-4 / SL",
			"Mineral premium"
		]
	},
	{
		name: "GreenZoil G-Hydro",
		code: "G-03",
		img: product_ghydro_default,
		desc: "Industrial hydraulic fluid designed for precision machinery and heavy equipment.",
		specs: [
			"ISO VG 32 / 46 / 68",
			"DIN 51524 Part 2",
			"Anti-wear AW"
		]
	}
];
function ProductsPage() {
	return /* @__PURE__ */ jsx(PageShell, {
		eyebrow: "Portfolio",
		title: /* @__PURE__ */ jsx(Fragment, { children: "Premium product portfolio." }),
		intro: "Three engineered product lines covering passenger, commercial and industrial applications across Indonesia.",
		children: /* @__PURE__ */ jsx("div", {
			className: "space-y-24",
			children: PRODUCTS.map((p, i) => /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: `lg:col-span-6 ${i % 2 ? "lg:order-2" : ""}`,
					children: /* @__PURE__ */ jsx("div", {
						className: "aspect-[4/5] bg-ink overflow-hidden",
						children: /* @__PURE__ */ jsx("img", {
							src: p.img,
							alt: p.name,
							className: "h-full w-full object-cover"
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: `lg:col-span-6 ${i % 2 ? "lg:order-1" : ""}`,
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "text-xs tracking-[0.2em] uppercase text-primary",
							children: p.code
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "display-section mt-4",
							children: p.name
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 text-muted-foreground leading-relaxed",
							children: p.desc
						}),
						/* @__PURE__ */ jsx("ul", {
							className: "mt-8 divide-y divide-rule border-y border-rule",
							children: p.specs.map((s) => /* @__PURE__ */ jsxs("li", {
								className: "py-4 flex justify-between text-sm",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-muted-foreground",
									children: "Specification"
								}), /* @__PURE__ */ jsx("span", {
									className: "font-medium",
									children: s
								})]
							}, s))
						})
					]
				})]
			}, p.code))
		})
	});
}
//#endregion
export { ProductsPage as component };
