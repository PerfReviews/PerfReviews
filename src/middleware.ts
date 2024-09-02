import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./i18n.config";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Intercept the request to /sw.js
  if (url.pathname === "/sw.js") {
    // Return a script that forces the Service Worker to unregister
    return new NextResponse(
      `self.addEventListener('install', function(event) {
         self.skipWaiting();
       });
       self.addEventListener('activate', function(event) {
         event.waitUntil(
           caches.keys().then(function(cacheNames) {
             return Promise.all(
               cacheNames.map(function(cacheName) {
                 return caches.delete(cacheName);
               })
             );
           }).then(function() {
             return self.clients.claim();
           }).then(function() {
             return self.registration.unregister();
           })
         );
       });`,
      {
        status: 200,
        headers: {
          "Content-Type": "application/javascript",
        },
      },
    );
  }

  // Call next-intl middleware to handle localization
  return createMiddleware({
    locales,
    defaultLocale,
    localePrefix: "as-needed",
  })(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/sw.js"],
};
