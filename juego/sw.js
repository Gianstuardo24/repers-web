// ════════════════════════════════════════════════════════════════════
// Service worker de Repers web (17/10, "app independiente"). Solo web:
// main.js lo registra cuando no hay visor nativo y en la versión compilada.
//
// Qué guarda en el teléfono (para abrir rápido y sin depender del Mac):
//  - La página (index.html): primero la red, si no hay red la guardada.
//    Así cada versión nueva llega apenas hay conexión.
//  - assets/ (JS y CSS con huella en el nombre): una vez bajados no cambian;
//    se sirven desde el teléfono.
//  - mediapipe/, glb/, icons/ e imágenes: se guardan la primera vez que se
//    usan (la detección de movimiento y los avatares abren al instante la
//    segunda vez).
//  - Videos (.mp4): no se guardan acá (Safari los pide por pedazos).
//  - Nada de otros sitios (Supabase, analítica): pasa directo a la red.
//
// Para forzar que todos los teléfonos limpien lo guardado, subir VERSION.
// ════════════════════════════════════════════════════════════════════

const VERSION = 'repers-2026-10-17a';
const CACHE_PAGINA = `${VERSION}-pagina`;
const CACHE_ESTATICO = `${VERSION}-estatico`;
const BASE = new URL('./', self.location).pathname;   // carpeta donde vive la app (ej. /juego/)
const INICIALES = ['./', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png'];

self.addEventListener('install', (ev) => {
  ev.waitUntil(caches.open(CACHE_PAGINA).then((c) => c.addAll(INICIALES)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil((async () => {
    const nombres = await caches.keys();
    await Promise.all(nombres.filter((n) => n.startsWith('repers-') && !n.startsWith(VERSION)).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

const esEstatico = (ruta) => /^(assets|mediapipe|glb|icons|img)\//.test(ruta) || /\.(png|jpe?g|webp|svg|glb|task|wasm|woff2?)$/i.test(ruta);

self.addEventListener('fetch', (ev) => {
  const req = ev.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;          // Supabase, analítica, etc.
  if (req.headers.has('range') || /\.mp4$/i.test(url.pathname)) return;   // videos por pedazos
  const ruta = url.pathname.startsWith(BASE) ? url.pathname.slice(BASE.length) : url.pathname.replace(/^\//, '');

  // Página: primero la red, si falla la guardada.
  if (req.mode === 'navigate') {
    ev.respondWith((async () => {
      try {
        const r = await fetch(req);
        if (r.ok) { const c = await caches.open(CACHE_PAGINA); c.put('./', r.clone()); }
        return r;
      } catch (_) {
        return (await caches.match('./')) || Response.error();
      }
    })());
    return;
  }

  // Legales: primero la red (pueden actualizarse sin cambiar de nombre).
  if (ruta.startsWith('legal/')) return;

  // Estático: desde el teléfono si ya está; si no, de la red y se guarda.
  if (esEstatico(ruta)) {
    ev.respondWith((async () => {
      const guardado = await caches.match(req);
      if (guardado) return guardado;
      const r = await fetch(req);
      if (r.ok && r.status === 200) { const c = await caches.open(CACHE_ESTATICO); c.put(req, r.clone()); }
      return r;
    })());
  }
});
