# CLAUDE.md — perf.reviews (root site)

Project-specific guidance for the perf.reviews root Next.js app (next-intl + content-collections).

## Routing: rewrites/redirects and the i18n middleware

When you add any redirect, rewrite, or proxied subpath in `next.config.mjs` (for example serving an external app or static site under `perf.reviews/<path>`), you must **also** add `<path>` to the next-intl middleware `matcher` exclusion in `src/middleware.ts`.

The middleware runs **before** rewrites/redirects. Its matcher is:

```
"/((?!api|_next|_vercel|insights|profile-guide|.*\\..*).*)"
```

It excludes `api`, `_next`, `_vercel`, the named paths, and any path containing a dot. Any bare path (no dot) that is not listed gets swallowed by i18n locale routing and returns a 404 **before the rewrite fires**. Asset URLs (`.css`, `.js`, images) slip through because they contain a dot, so the symptom is misleading: sub-assets return 200 while the bare entry path 404s.

Existing proxied subpaths, both excluded in the matcher: `insights` (the insights app) and `profile-guide` (the Performance Profile field guide). Each is a separate Vercel deployment proxied 1:1 via `rewrites()` in `next.config.mjs`, following the same shape:

```js
{ source: "/<path>", destination: "https://<deploy>.vercel.app/<path>" },
{ source: "/<path>/:path*", destination: "https://<deploy>.vercel.app/<path>/:path*" },
```

### Checklist when adding a proxied subpath

1. Add the two `rewrites()` entries in `next.config.mjs` (mirror the `insights` / `profile-guide` pattern above).
2. Add `<path>` to the `matcher` exclusion in `src/middleware.ts` (this is the step that is easy to forget and produces a confusing 404).
3. Verify the **bare** path (not just its assets) returns 200 in production.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
