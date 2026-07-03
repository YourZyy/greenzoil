import server from "../dist/server/server.js";

export const config = {
  runtime: "nodejs",
};

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
    // Ensure server is initialized
    const srv = await initializeServer();

    if (!srv || !srv.fetch) {
      throw new Error("Server instance is invalid or fetch method not available");
    }

    // Call server handler
    const response = await srv.fetch(request, undefined, undefined);

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
