# Vercel Deployment Debugging Guide

## Error: 500 FUNCTION_INVOCATION_FAILED

### What to Check:

1. **Vercel Logs** - Go to Vercel Dashboard → Deployments → Function Logs
   - Look for errors in `/api` endpoint logs
   - Check server-side console output

2. **Recent Changes Applied:**
   - ✅ Enhanced error logging in `api/index.ts`
   - ✅ Improved error handling in `src/server.ts`
   - ✅ Environment validation in `src/lib/env-check.ts`
   - ✅ Structured error messages

3. **Common Causes:**

   a) **Module Import Failure**
   ```
   Look for: "Cannot find module" or "Failed to load server entry"
   Solution: Verify all imports are correct, run `npm run build` locally
   ```

   b) **Environment Variables Missing**
   ```
   Look for: Reference to undefined process.env variables
   Solution: Check Vercel Settings → Environment Variables
   ```

   c) **CSS/Asset Loading**
   ```
   Look for: "ENOENT" or 404 errors for CSS files
   Solution: Check `outputDirectory` in vercel.json is correct (dist/client)
   ```

   d) **Route Component Error**
   ```
   Look for: Error in route file imports
   Solution: Check each route file in src/routes/*.tsx
   ```

4. **Next Steps:**
   - Push the updated code
   - Redeploy to Vercel
   - Check Function Logs for new detailed error messages
   - Share the error logs for deeper debugging

5. **Local Testing:**
   ```bash
   npm run build        # Build locally
   npm run preview      # Test production build locally
   ```

## Files Modified:
- `api/index.ts` - Added try/catch with detailed logging
- `src/server.ts` - Improved error capture and logging
- `src/start.ts` - Added env validation
- `src/lib/env-check.ts` - New environment validator

## Vercel Configuration:
```json
{
  "version": 2,
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "dist/client"
}
```
