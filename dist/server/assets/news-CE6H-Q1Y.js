import { t as PageShell } from "./PageShell-Cie3hzS1.js";
import { n as article_2_default, r as article_1_default, t as article_3_default } from "./article-3-DY8FQTrz.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight } from "lucide-react";
//#region src/routes/news.tsx?tsr-split=component
var POSTS = [
	{
		img: article_1_default,
		cat: "Research",
		date: "Jun 2026",
		title: "Inside the GreenZoil laboratory: how we test every batch."
	},
	{
		img: article_2_default,
		cat: "Operations",
		date: "May 2026",
		title: "Building a nationwide lubricant supply chain."
	},
	{
		img: article_3_default,
		cat: "Engineering",
		date: "Apr 2026",
		title: "Why viscosity stability matters for heavy duty fleets."
	}
];
function NewsPage() {
	return /* @__PURE__ */ jsx(PageShell, {
		eyebrow: "News & Insights",
		title: /* @__PURE__ */ jsx(Fragment, { children: "Latest from GreenZoil." }),
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 md:grid-cols-3 gap-10",
			children: POSTS.map((p) => /* @__PURE__ */ jsxs("article", {
				className: "group",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "aspect-[4/3] overflow-hidden bg-surface",
						children: /* @__PURE__ */ jsx("img", {
							src: p.img,
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
								children: p.cat
							}),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: p.date })
						]
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-3 font-display text-xl font-bold leading-snug",
						children: p.title
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold border-b border-foreground pb-1",
						children: ["Read More ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
					})
				]
			}, p.title))
		})
	});
}
//#endregion
export { NewsPage as component };
