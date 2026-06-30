const CACHE_NAME = "lu-doces-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/churrasco.html",
  "/css/styles-doces.css",
  "/css/styles-churrasco.css",
  "/js/script.js",
  "/js/pwa.js",
  "/img/logo.png",
  "/img/cupcakes.jpg",
  "/img/bolo.jpg",
  "/img/pao-de-mel.jpg",
  "/img/churrasco.jpg",
  "/img/carne1.jpg",
  "/img/carne2.jpg",
  "/img/carne3.jpg"
];

// Instalação
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Arquivos em cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativação
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch (offline first)
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() =>
        new Response("Você está offline e o recurso não foi encontrado no cache.")
      );
    })
  );
});

