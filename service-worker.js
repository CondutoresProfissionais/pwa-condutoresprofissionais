const CACHE_NAME = 'condutores-cache-v1';
const urlsToCache = [
  '/',
  '/?m=1',
  // adicione mais URLs que deseja cachear
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
