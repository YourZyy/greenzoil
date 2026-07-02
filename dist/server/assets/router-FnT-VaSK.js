import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-7i8p_oU_.css";
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "GreenZoil · Premium Industrial Lubricants" },
			{
				name: "description",
				content: "GreenZoil is an Indonesian manufacturer of premium automotive and industrial lubricants engineered for superior protection and long-lasting performance."
			},
			{
				name: "author",
				content: "GreenZoil · CV. Makita"
			},
			{
				property: "og:title",
				content: "GreenZoil · Premium Industrial Lubricants"
			},
			{
				property: "og:description",
				content: "Premium lubricants for automotive vehicles and industrial machinery. Engineered for every industry."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "stylesheet",
			href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[
		{
			path: "/",
			changefreq: "weekly",
			priority: "1.0"
		},
		{
			path: "/about",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/products",
			changefreq: "monthly",
			priority: "0.9"
		},
		{
			path: "/applications",
			changefreq: "monthly",
			priority: "0.8"
		},
		{
			path: "/gallery",
			changefreq: "monthly",
			priority: "0.6"
		},
		{
			path: "/news",
			changefreq: "weekly",
			priority: "0.7"
		},
		{
			path: "/contact",
			changefreq: "yearly",
			priority: "0.7"
		}
	].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/products.tsx
var $$splitComponentImporter$6 = () => import("./products-DJcG6LFy.js");
var Route$6 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Products · GreenZoil" },
		{
			name: "description",
			content: "GreenZoil G-Turbo, G-Power and G-Hydro — premium lubricants engineered for automotive and industrial machinery."
		},
		{
			property: "og:title",
			content: "Products · GreenZoil"
		},
		{
			property: "og:description",
			content: "Premium lubricants engineered for automotive and industrial machinery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/news.tsx
var $$splitComponentImporter$5 = () => import("./news-CE6H-Q1Y.js");
var Route$5 = createFileRoute("/news")({
	head: () => ({ meta: [
		{ title: "News & Insights · GreenZoil" },
		{
			name: "description",
			content: "Updates from the GreenZoil laboratory, supply chain and engineering teams."
		},
		{
			property: "og:title",
			content: "News & Insights · GreenZoil"
		},
		{
			property: "og:description",
			content: "Updates from the GreenZoil laboratory, supply chain and engineering teams."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/gallery.tsx
var $$splitComponentImporter$4 = () => import("./gallery-Cbn-eUSs.js");
var Route$4 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery · GreenZoil" },
		{
			name: "description",
			content: "Inside GreenZoil — facility, manufacturing line and product photography."
		},
		{
			property: "og:title",
			content: "Gallery · GreenZoil"
		},
		{
			property: "og:description",
			content: "Inside GreenZoil — facility, manufacturing line and product photography."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-j4aPTQt4.js");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact · GreenZoil" },
		{
			name: "description",
			content: "Contact GreenZoil sales — request a quote, sample, or distributor partnership."
		},
		{
			property: "og:title",
			content: "Contact · GreenZoil"
		},
		{
			property: "og:description",
			content: "Request a quote, sample, or distributor partnership."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/applications.tsx
var $$splitComponentImporter$2 = () => import("./applications-CRHvd7b_.js");
var Route$2 = createFileRoute("/applications")({
	head: () => ({ meta: [
		{ title: "Applications · GreenZoil" },
		{
			name: "description",
			content: "From passenger cars to mining fleets — GreenZoil lubricants serve every corner of Indonesian industry."
		},
		{
			property: "og:title",
			content: "Applications · GreenZoil"
		},
		{
			property: "og:description",
			content: "GreenZoil lubricants serve every corner of Indonesian industry."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-B4hzFOWp.js");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About · GreenZoil" },
		{
			name: "description",
			content: "GreenZoil is the lubricant division of CV. Makita — an Indonesian manufacturer with two decades of industrial heritage."
		},
		{
			property: "og:title",
			content: "About · GreenZoil"
		},
		{
			property: "og:description",
			content: "Indonesian engineering. Industrial excellence."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-Cemw8d_V.js");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "GreenZoil · Engineered for Every Industry" },
		{
			name: "description",
			content: "Premium Indonesian lubricants developed for automotive vehicles and industrial machinery — superior protection, maximum efficiency, long-lasting performance."
		},
		{
			property: "og:title",
			content: "GreenZoil · Engineered for Every Industry"
		},
		{
			property: "og:description",
			content: "Premium Indonesian lubricants for automotive and industrial machinery."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var ProductsRoute = Route$6.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$8
});
var NewsRoute = Route$5.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => Route$8
});
var GalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var ApplicationsRoute = Route$2.update({
	id: "/applications",
	path: "/applications",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$8
	}),
	AboutRoute,
	ApplicationsRoute,
	ContactRoute,
	GalleryRoute,
	NewsRoute,
	ProductsRoute,
	SitemapDotxmlRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
