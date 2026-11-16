const CACHE_NAME = 'securaq-clean-v5';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg',
  './alpine.min.js'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Network-First: Siempre busca la version mas reciente de la red
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request)
      .then((response) => {
        const resClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(e.request, resClone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
