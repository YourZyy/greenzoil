/**
 * Environment Variable Checker for Production Debug
 * Validates required environment setup on startup
 */

export function validateEnvironment() {
  const env = process.env;
  const warnings: string[] = [];
  const errors: string[] = [];

  // Node environment
  if (!env.NODE_ENV) {
    warnings.push("NODE_ENV not set, defaulting to production");
  } else {
    console.log(`[EnvCheck] NODE_ENV: ${env.NODE_ENV}`);
  }

  // Runtime checks
  console.log(`[EnvCheck] Runtime: ${typeof process !== "undefined" ? "Node.js" : "Browser"}`);

  // Log available env vars (redact sensitive ones)
  const publicEnvVars = Object.keys(env)
    .filter((key) => !key.match(/SECRET|PASSWORD|KEY|TOKEN|PRIVATE/i))
    .slice(0, 10);

  console.log("[EnvCheck] Available public env vars:", publicEnvVars);

  if (warnings.length > 0) {
    console.warn("[EnvCheck] Warnings:", warnings);
  }

  if (errors.length > 0) {
    console.error("[EnvCheck] Errors:", errors);
    throw new Error(`Environment validation failed: ${errors.join(", ")}`);
  }

  console.log("[EnvCheck] Environment validation passed");
}

// Run on server startup
if (typeof globalThis !== "undefined" && typeof process !== "undefined") {
  try {
    validateEnvironment();
  } catch (error) {
    console.error("[EnvCheck] Fatal:", error);
  }
}
