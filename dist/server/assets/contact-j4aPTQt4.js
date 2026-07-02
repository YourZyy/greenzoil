import { t as PageShell } from "./PageShell-Cie3hzS1.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Clock, Instagram, MapPin, Phone } from "lucide-react";
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(PageShell, {
		eyebrow: "Contact",
		title: /* @__PURE__ */ jsx(Fragment, { children: "Talk to our sales team." }),
		intro: "Whether you operate a single workshop or a national fleet, our team will recommend the right lubricant program for you.",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 lg:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ jsx("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ jsxs("form", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
					onSubmit: (e) => e.preventDefault(),
					children: [
						/* @__PURE__ */ jsx(Field, {
							label: "Full Name",
							name: "name"
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Company",
							name: "company"
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Email",
							name: "email",
							type: "email"
						}),
						/* @__PURE__ */ jsx(Field, {
							label: "Phone",
							name: "phone"
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "sm:col-span-2",
							children: [/* @__PURE__ */ jsx("label", {
								className: "eyebrow block mb-3",
								children: "Message"
							}), /* @__PURE__ */ jsx("textarea", {
								rows: 6,
								className: "w-full border border-rule bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
							})]
						}),
						/* @__PURE__ */ jsxs("button", {
							className: "sm:col-span-2 justify-self-start inline-flex items-center gap-3 bg-ink px-7 py-4 text-sm font-semibold text-white hover:bg-primary hover:text-primary-foreground transition-colors",
							children: ["Send Message ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})
			}), /* @__PURE__ */ jsxs("aside", {
				className: "lg:col-span-5 space-y-8 border-l-0 lg:border-l border-rule lg:pl-12",
				children: [
					/* @__PURE__ */ jsxs(Info, {
						icon: /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
						label: "Address",
						children: [
							"Jl. Terboyo Industri Megah XI No.3",
							/* @__PURE__ */ jsx("br", {}),
							"Terboyo Wetan, Kec. Genuk",
							/* @__PURE__ */ jsx("br", {}),
							"Semarang, Jawa Tengah 50112"
						]
					}),
					/* @__PURE__ */ jsx(Info, {
						icon: /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
						label: "Phone",
						children: /* @__PURE__ */ jsx("a", {
							href: "tel:+6281125955557",
							className: "hover:text-primary",
							children: "+62 811-2595-557"
						})
					}),
					/* @__PURE__ */ jsxs(Info, {
						icon: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
						label: "Business Hours",
						children: [
							"Mon – Fri · 08.00 – 17.00",
							/* @__PURE__ */ jsx("br", {}),
							"Saturday · 08.00 – 16.00",
							/* @__PURE__ */ jsx("br", {}),
							"Sunday · Closed"
						]
					}),
					/* @__PURE__ */ jsxs(Info, {
						icon: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }),
						label: "Social",
						children: [/* @__PURE__ */ jsx("a", {
							href: "https://www.instagram.com/greenzoil_official/",
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-primary block",
							children: "Instagram · @greenzoil_official"
						}), /* @__PURE__ */ jsx("a", {
							href: "https://www.tiktok.com/@greenzoil",
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-primary block",
							children: "TikTok · @greenzoil"
						})]
					})
				]
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "mt-20 border border-rule",
			children: /* @__PURE__ */ jsx("iframe", {
				title: "GreenZoil Location",
				src: "https://www.google.com/maps?q=Jl.+Terboyo+Industri+Megah+XI+No.3,+Terboyo+Wetan,+Genuk,+Semarang&output=embed",
				className: "block w-full h-[420px] grayscale",
				loading: "lazy"
			})
		})]
	});
}
function Field({ label, name, type = "text" }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("label", {
		htmlFor: name,
		className: "eyebrow block mb-3",
		children: label
	}), /* @__PURE__ */ jsx("input", {
		id: name,
		name,
		type,
		className: "w-full border border-rule bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
	})] });
}
function Info({ icon, label, children }) {
	return /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
		className: "flex items-center gap-3 text-primary",
		children: [icon, /* @__PURE__ */ jsx("span", {
			className: "eyebrow text-foreground",
			children: label
		})]
	}), /* @__PURE__ */ jsx("div", {
		className: "mt-3 text-sm text-muted-foreground leading-relaxed",
		children
	})] });
}
//#endregion
export { ContactPage as component };
