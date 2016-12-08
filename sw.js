self.addEventListener('install', function(evt) {
  evt.waitUntil(self.skipWaiting());
  // evt.waitUntil(
  //   caches.open('v1').then(function(cache) {
  //     return cache.addAll([
  //       '/',
  //       '/index.html',
  //       '/master.css',
  //       '/logo.png',
  //     ]);
  //   })
  // );
});

self.addEventListener('activate', function(evt) {
  console.log('SW Activated!');
})

self.addEventListener('fetch', function(evt) {
  // evt.respondWith(fetch(evt.request) /* basic pass-through now*/ );
});
