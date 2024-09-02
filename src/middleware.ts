import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

import { defaultLocale, locales } from "./i18n.config";

export default function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Log the URL being requested
  console.log(`Middleware intercepted request to: ${url.pathname}`);

  // Intercept the request to /sw.js
  if (url.pathname === "/sw.js") {
    console.log(
      "/sw.js request intercepted, returning script to unregister Service Worker",
    );

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

  // Log that the request is being handled by next-intl middleware
  console.log("Request being handled by next-intl middleware");

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
