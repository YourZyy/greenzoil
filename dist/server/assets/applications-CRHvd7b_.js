import { t as PageShell } from "./PageShell-Cie3hzS1.js";
import { i as app_automotive_default, n as app_heavy_default, r as app_motorcycle_default, t as app_industrial_default } from "./app-industrial-BKOa8ugD.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/applications.tsx?tsr-split=component
var APPS = [
	{
		title: "Automotive",
		img: app_automotive_default,
		body: "Passenger cars and commercial vehicles operating under daily Indonesian conditions."
	},
	{
		title: "Motorcycle",
		img: app_motorcycle_default,
		body: "From daily commuters to performance machines requiring high-RPM stability."
	},
	{
		title: "Heavy Equipment",
		img: app_heavy_default,
		body: "Excavators, dump trucks and earthmovers for mining and construction."
	},
	{
		title: "Industrial Machinery",
		img: app_industrial_default,
		body: "Hydraulic systems, presses and CNC equipment in manufacturing plants."
	}
];
function ApplicationsPage() {
	return /* @__PURE__ */ jsx(PageShell, {
		eyebrow: "Applications",
		title: /* @__PURE__ */ jsx(Fragment, { children: "Wherever machinery demands more." }),
		intro: "Engineered for the breadth of Indonesian industry — from a single motorcycle in the city to mining fleets in remote provinces.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule",
			children: APPS.map((a) => /* @__PURE__ */ jsxs("div", {
				className: "bg-background",
				children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-[16/10] overflow-hidden",
					children: /* @__PURE__ */ jsx("img", {
						src: a.img,
						alt: a.title,
						className: "h-full w-full object-cover"
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "p-8 lg:p-10",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-2xl font-bold tracking-tight",
						children: a.title
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground leading-relaxed",
						children: a.body
					})]
				})]
			}, a.title))
		})
	});
}
//#endregion
export { ApplicationsPage as component };
