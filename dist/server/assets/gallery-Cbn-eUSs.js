import { t as PageShell } from "./PageShell-Cie3hzS1.js";
import { n as factory_default, t as manufacturing_default } from "./manufacturing-CZ52o_fR.js";
import { i as app_automotive_default, n as app_heavy_default, r as app_motorcycle_default, t as app_industrial_default } from "./app-industrial-BKOa8ugD.js";
import { n as product_gpower_default, r as product_gturbo_default, t as product_ghydro_default } from "./product-ghydro-BlhnQMPE.js";
import { Fragment, jsx } from "react/jsx-runtime";
//#region src/routes/gallery.tsx?tsr-split=component
var IMAGES = [
	factory_default,
	manufacturing_default,
	product_gturbo_default,
	app_automotive_default,
	app_heavy_default,
	product_gpower_default,
	app_industrial_default,
	app_motorcycle_default,
	product_ghydro_default
];
function GalleryPage() {
	return /* @__PURE__ */ jsx(PageShell, {
		eyebrow: "Gallery",
		title: /* @__PURE__ */ jsx(Fragment, { children: "Inside GreenZoil." }),
		intro: "A look at our facility, manufacturing line, products and the machinery we serve.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule",
			children: IMAGES.map((src, i) => /* @__PURE__ */ jsx("div", {
				className: "bg-background aspect-square overflow-hidden",
				children: /* @__PURE__ */ jsx("img", {
					src,
					alt: "",
					className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105",
					loading: "lazy"
				})
			}, i))
		})
	});
}
//#endregion
export { GalleryPage as component };
