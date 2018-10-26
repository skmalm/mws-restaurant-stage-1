console.log('SW registered!');
let cacheID = 'rest-rev-cache-v1';

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

self.addEventListener('install', function(evt) {
  evt.waitUntil(
    caches.open(cacheID).then(function(cache) {
      return cache.addAll(cacheFiles);
    }).catch(function(error) {
      console.log(error);
    })
  );
});

// let cacheID = 'v1';
//
// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(cacheID).then(cache => {
//       return cache.addAll([
//         '/',
//         '/index.html'
//       ])
//       .catch
//     })
//   )
// })
