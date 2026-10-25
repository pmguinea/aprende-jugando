/* Aprende Jugando — service worker
   Guarda el juego en el móvil para que funcione sin conexión.
   IMPORTANTE: al subir una versión nueva del juego, cambia el número de CACHE
   (v1 → v2). Si no, los móviles seguirán usando la copia guardada. */

const CACHE = 'aprende-jugando-v3';

// Lo mínimo para que arranque sin red
const BASE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(BASE))
      .then(() => self.skipWaiting())
      .catch(() => {})
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if(req.method !== 'GET') return;

  // No guardar las llamadas de estadísticas
  if(req.url.includes('goatcounter') || req.url.includes('gc.zgo.at')) return;

  e.respondWith(
    caches.match(req).then(hit => {
      // Hay copia: se sirve al instante y se refresca por detrás
      if(hit){
        fetch(req).then(res => {
          if(res && res.status === 200) caches.open(CACHE).then(c => c.put(req, res.clone()));
        }).catch(() => {});
        return hit;
      }
      // No hay copia: red, y se guarda para la próxima (también Tailwind y las fuentes)
      return fetch(req).then(res => {
        if(res && (res.status === 200 || res.type === 'opaque')){
          const copia = res.clone();
          caches.open(CACHE).then(c => c.put(req, copia)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
