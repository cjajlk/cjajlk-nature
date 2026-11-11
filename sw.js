const CACHE = 'cjajlk-nature-v1-4-catalogue-2026-11-10';
const ASSETS = ['./','./index.html','./style.css','./data.js','./app.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('cjajlk-nature-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(req).then(cached => cached || fetch(req).then(response => {
    if (response.ok && new URL(req.url).pathname.startsWith(new URL(self.registration.scope).pathname)) {
      const copy=response.clone(); caches.open(CACHE).then(cache => cache.put(req,copy));
    }
    return response;
  }).catch(() => caches.match('./index.html'))));
});
