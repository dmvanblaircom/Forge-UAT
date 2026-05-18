const CACHE_NAME = 'grind-v2';
const ASSETS = ['./', './index.html', './manifest.json', './icon-512.svg', './icon-192.svg', './apple-touch-icon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(cached => { if(cached){fetch(e.request).then(fresh=>{if(fresh&&fresh.status===200)caches.open(CACHE_NAME).then(c=>c.put(e.request,fresh));}).catch(()=>{});return cached;} return fetch(e.request).catch(()=>caches.match('./index.html')); })); });
