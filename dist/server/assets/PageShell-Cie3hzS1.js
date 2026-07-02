import { n as Header, t as Footer } from "./Footer-BCmWMN9z.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/site/PageShell.tsx
function PageShell({ eyebrow, title, intro, children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", {
				className: "pt-20",
				children: [/* @__PURE__ */ jsx("section", {
					className: "bg-surface/80 border-b border-rule/80 backdrop-blur-sm",
					children: /* @__PURE__ */ jsxs("div", {
						className: "container-wide py-24 lg:py-32",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-primary" }), /* @__PURE__ */ jsx("span", {
									className: "eyebrow",
									children: eyebrow
								})]
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "display-section mt-6 max-w-4xl",
								children: title
							}),
							intro && /* @__PURE__ */ jsx("p", {
								className: "mt-8 max-w-2xl text-base lg:text-lg text-muted-foreground leading-relaxed",
								children: intro
							})
						]
					})
				}), children && /* @__PURE__ */ jsx("section", {
					className: "bg-background",
					children: /* @__PURE__ */ jsx("div", {
						className: "container-wide py-24 lg:py-32",
						children
					})
				})]
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { PageShell as t };
