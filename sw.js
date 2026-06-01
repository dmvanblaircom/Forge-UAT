const CACHE = 'forge-v18';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  './landing.png',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  // Only handle same-origin GET requests from cache; let API calls (Supabase) and
  // non-GET requests go straight to the network so live data is never stale.
  if (req.method !== 'GET' || url.origin !== self.location.origin) {
    return; // default browser network handling
  }
  e.respondWith(
    caches.match(req).then(r => r || fetch(req))
  );
});
