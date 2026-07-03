import server from "../src/server";

export const config = {
  runtime: "nodejs",
  memory: 1024,
  timeout: 30,
};

export default async function handler(request: Request) {
  try {
    // Log startup
    if (!globalThis.hasOwnProperty("_serverStarted")) {
      console.log("[API] ✓ Handler initialized at", new Date().toISOString());
      (globalThis as any)._serverStarted = true;
    }

    console.log(`[API] ${request.method} ${new URL(request.url).pathname}`);
    
    // Load server - with detailed error tracking
    const response = await server.fetch(request, undefined, undefined);
    console.log(`[API] ✓ Response ${response.status}`);
    return response;
  } catch (error) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : "No stack";
    
    console.error("[API] ✗ FATAL ERROR", {
      message: errorMsg,
      stack: errorStack,
      url: request.url,
      method: request.method,
      time: new Date().toISOString(),
    });
    
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: errorMsg,
        code: "FUNCTION_INVOCATION_FAILED",
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
