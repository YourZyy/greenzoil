import server from "../src/server";

export const config = {
  runtime: "nodejs",
};

export default async function handler(request: Request) {
  try {
    console.log(`[API] ${request.method} ${new URL(request.url).pathname}`);
    const response = await server.fetch(request, undefined, undefined);
    console.log(`[API] Response status: ${response.status}`);
    return response;
  } catch (error) {
    console.error("[API] Request Error:", {
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
      url: request.url,
      method: request.method,
    });
    
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : "Unknown error",
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
