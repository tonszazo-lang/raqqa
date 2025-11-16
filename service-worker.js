self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
