// GRIND Service Worker — Offline Support
// Caches the app shell so it loads even without a connection

const CACHE_NAME = 'grind-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-512.svg',
  './icon-192.svg',
  './apple-touch-icon.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      // Return cache hit immediately; also fetch fresh in background
      if (cached) {
        fetch(event.request).then(fresh => {
          if (fresh && fresh.status === 200) {
            caches.open(CACHE_NAME).then(c => c.put(event.request, fresh));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(event.request).catch(() => caches.match('./index.html'));
    })
  );
});
