const cacheID = 'rest-rev-cache';
const cacheFiles = [
  '/',
  '/index.html',
  '/restaurant.html',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/data/restaurants.json',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'
];

// On SW install, save cacheFiles to cache
self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(cacheID)
    .then(cache => cache.addAll(cacheFiles))
    .catch(logError)
  );
});

// Serve cached items when possible for fetch events
self.addEventListener('fetch', function(evt) {
  evt.respondWith(
    caches.match(evt.request)
    .then(function(response) {
      if (response) return response;
      else {
        return fetch(evt.request)
        .then(function(response) {
          // Clone response to allow re-use
          let clone = response.clone();
          caches.open(cacheID).then(function(cache) {
            cache.put(evt.request, clone);
          });
          return response;
        })
        .catch(logError);
      }
    }).catch(logError)
  );
});

function logError(error) {
  console.log(error);
}
