self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map((cacheName) => caches.delete(cacheName)),
      );

      const registration = await self.registration.unregister();
      console.log("Service Worker unregistred:", registration);
    })(),
  );
});
