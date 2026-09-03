// Service Worker mínimo para cumplir con todos los estándares PWA
const CACHE_NAME = 'proa-erp-pwa-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Peticiones estándar de red
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
