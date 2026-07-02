import { t as PageShell } from "./PageShell-Cie3hzS1.js";
import { n as factory_default, t as manufacturing_default } from "./manufacturing-CZ52o_fR.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(PageShell, {
		eyebrow: "About",
		title: /* @__PURE__ */ jsxs(Fragment, { children: [
			"Indonesian engineering.",
			/* @__PURE__ */ jsx("br", {}),
			"Industrial excellence."
		] }),
		intro: "GreenZoil is the lubricant division of CV. Makita — engineering premium oils for the country's most demanding fleets, factories and equipment since 2005.",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7 space-y-6 text-base text-muted-foreground leading-relaxed",
				children: [
					/* @__PURE__ */ jsx("p", { children: "Founded in Semarang in 2005, CV. Makita built two decades of manufacturing expertise across furniture, packaging and now lubricants. GreenZoil consolidates that heritage into a single, focused product mission: premium oils for Indonesia." }),
					/* @__PURE__ */ jsx("p", { children: "We blend at our facility in Terboyo Industrial Estate using carefully selected Group II and III base stocks, paired with proven additive chemistries. Every batch is verified in our on-site laboratory before release." }),
					/* @__PURE__ */ jsx("p", { children: "Our products power motorcycles, passenger cars, trucks, hydraulic systems and heavy equipment across the archipelago — supported by a distributor network of more than one hundred partners." })
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ jsx("img", {
					src: factory_default,
					alt: "Factory",
					className: "w-full aspect-[4/5] object-cover"
				})
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",
			children: [/* @__PURE__ */ jsx("img", {
				src: manufacturing_default,
				alt: "Manufacturing",
				className: "lg:col-span-7 w-full aspect-[5/4] object-cover"
			}), /* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "eyebrow",
						children: "Manufacturing"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "display-section mt-4",
						children: "Built in Semarang."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-muted-foreground leading-relaxed",
						children: "Our blending hall, packaging line and quality laboratory operate under a single roof — enabling tight control over every step from raw material to sealed bottle."
					})
				]
			})]
		})]
	});
}
//#endregion
export { AboutPage as component };
