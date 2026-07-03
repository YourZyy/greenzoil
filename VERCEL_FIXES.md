# Vercel Deployment - Perbaikan Error Step-by-Step

## ✅ Masalah 1: Schema Validation Error

### Error yang Muncul:
```
vercel.json schema validation failed: should NOT have additional property 'serverFunctions'
```

### Penyebab:
Property `serverFunctions` tidak valid di `vercel.json` v2. Vercel secara otomatis mendeteksi functions di folder `api/`.

### ✓ Solusi - vercel.json yang Benar:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist/client",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/api/index"
    }
  ]
}
```

**Penjelasan:**
- **version 2**: Format terbaru Vercel
- **buildCommand**: `npm run build` - standard build command
- **outputDirectory**: `dist/client` - client build output (Vercel auto-finds server functions)
- **rewrites**: Redirect semua route ke `/api/index` (TanStack Start pattern)
- **HAPUS**: `serverFunctions`, `installCommand` (default), `env` (gunakan dashboard)

---

## ✅ Masalah 2: 500 FUNCTION_INVOCATION_FAILED

### Error yang Muncul:
```
500: INTERNAL_SERVER_ERROR - FUNCTION_INVOCATION_FAILED
```

### Penyebab Kemungkinan:
1. Server module import gagal
2. Request handling error
3. Invalid response object
4. Memory/environment issue

### ✓ Solusi - api/index.ts Diperbaiki:

**Perbaikan dilakukan:**

1. **Server Instance Caching**
   ```typescript
   let serverInstance: any = null;
   let initError: Error | null = null;
   ```
   - Hindari re-import server setiap request
   - Cache error jika initialization gagal

2. **Validation Response**
   ```typescript
   if (!srv || !srv.fetch) {
     throw new Error("Server instance is invalid...");
   }
   if (!response || !(response instanceof Response)) {
     throw new Error("Server returned invalid response");
   }
   ```
   - Pastikan object valid sebelum return
   - Deteksi error lebih awal

3. **Proper Error Response**
   ```typescript
   return new Response(
     JSON.stringify({ error: "...", message: "..." }),
     {
       status: 500,
       headers: {
         "content-type": "application/json",
         "cache-control": "no-cache, no-store, must-revalidate",
       },
     }
   );
   ```
   - Always return valid Response object
   - Set cache headers untuk debugging

4. **Better Logging**
   ```typescript
   console.error("[API] Request failed", {
     error: errorMessage,
     stack: errorStack,
     url: request.url,
     method: request.method,
     timestamp: new Date().toISOString(),
   });
   ```
   - Structured logging untuk Vercel function logs

---

## 🚀 Deployment Checklist

- [x] Perbaiki vercel.json schema
- [x] Improve error handling di API handler
- [x] Add server instance validation
- [x] Add proper response validation
- [x] Remove invalid config properties

## 📋 Langkah Redeploy:

```bash
# 1. Push perubahan
git add .
git commit -m "Fix: correct vercel.json schema and improve API error handling"
git push

# 2. Vercel akan auto-redeploy

# 3. Check logs di Vercel Dashboard:
#    → Deployments → Latest → Function Logs
```

---

## 🔍 Jika Masih Ada Error:

### Check Vercel Function Logs:
1. Buka Vercel Dashboard
2. Pilih Project → Deployments
3. Klik deployment terbaru
4. Lihat **Function Logs** tab

### Common Issues & Solutions:

| Error | Solusi |
|-------|--------|
| `Cannot find module '@tanstack/react-start'` | `npm install` di Vercel gagal - check build logs |
| `ENOENT: no such file` | Output directory salah - gunakan `dist/client` |
| `TypeError: fetch is not a function` | Server module tidak compatible - check imports |
| `Response is not defined` | Node.js version lama - Vercel uses Node 18+ |

### Debug Locally:
```bash
npm run build
npm run preview
# Akses http://localhost:4173
```

---

## 📝 Files Modified:
- ✅ `vercel.json` - Fixed schema (removed invalid properties)
- ✅ `api/index.ts` - Improved error handling & validation
