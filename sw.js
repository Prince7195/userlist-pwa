importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

// Custom Adjestment
workbox.routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  workbox.strategies.cacheFirst()
);

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  workbox.strategies.cacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365
      })
    ]
  })
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "32c55f360738878b51076106be495f7b"
  },
  {
    "url": "index.html",
    "revision": "d6dea752b519b5f20bfbb88fb2a690a8"
  },
  {
    "url": "js/app.js",
    "revision": "5633b8b0f0b7c3f4874e52eb48957342"
  }
]);
