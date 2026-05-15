// Hasenfutter Service Worker
// Strategie:
//   - Network-First für HTML/JS/CSS/JSON (damit Updates sofort sichtbar sind)
//   - Cache-First für Bilder (für Offline und schnelles Laden)
//   - Network-First für CSV (damit neue Rezepte im Sheet sofort durchkommen)

const CACHE_VERSION = 'hasenfutter-v2';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './images/cover.jpg',
  './images/icon-192.png',
  './images/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_SHELL).catch(() => {}))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isImage = /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(url.pathname);

  // Bilder: Cache-First (für Offline und Speed)
  if (isImage) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(res => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE_VERSION).then(c => c.put(event.request, copy));
          }
          return res;
        }).catch(() => cached);
      })
    );
    return;
  }

  // Alles andere (HTML, JS, CSV, Sheets): Network-First mit Cache-Fallback
  event.respondWith(
    fetch(event.request).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(CACHE_VERSION).then(c => c.put(event.request, copy));
      }
      return res;
    }).catch(() => caches.match(event.request))
  );
});
