import server from "../dist/server/server.js";

export const config = {
  runtime: "nodejs",
};

function getAbsoluteUrl(request: Request): string {
  const rawUrl = request.url;

  if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) {
    return rawUrl;
  }

  const headers = request.headers;
  const host =
    headers.get("x-forwarded-host") ??
    headers.get("host") ??
    process.env.VERCEL_URL ??
    "localhost:3000";

  const protocol = headers.get("x-forwarded-proto") ?? "https";
  const pathname = rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`;
  return `${protocol}://${host}${pathname}`;
}

function normalizeRequest(request: Request): Request {
  const absoluteUrl = getAbsoluteUrl(request);

  if (request.url === absoluteUrl) {
    return request;
  }

  return new Request(absoluteUrl, request);
}

let serverInstance: any = null;
let initError: Error | null = null;

async function initializeServer() {
  if (serverInstance) return serverInstance;
  if (initError) throw initError;

  try {
    serverInstance = server;
    return serverInstance;
  } catch (error) {
    initError = error as Error;
    console.error("[API] Server initialization failed:", initError);
    throw initError;
  }
}

export default async function handler(request: Request): Promise<Response> {
  try {
    const normalizedRequest = normalizeRequest(request);

    // Ensure server is initialized
    const srv = await initializeServer();

    if (!srv || !srv.fetch) {
      throw new Error("Server instance is invalid or fetch method not available");
    }

    // Call server handler
    const response = await srv.fetch(normalizedRequest, undefined, undefined);

    // Ensure response is valid
    if (!response || !(response instanceof Response)) {
      throw new Error("Server returned invalid response");
    }

    return response;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error("[API] Request failed", {
      error: errorMessage,
      stack: errorStack,
      url: request.url,
      method: request.method,
      timestamp: new Date().toISOString(),
    });

    // Return proper error response
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: errorMessage,
      }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
          "cache-control": "no-cache, no-store, must-revalidate",
        },
      }
    );
  }
}
