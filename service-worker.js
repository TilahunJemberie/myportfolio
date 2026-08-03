const cacheName = "tilahun-portfolio-v2";

const filesToCache = [
  "/myportfolio/",
  "/myportfolio/index.html",
  "/myportfolio/style.css",
  "/myportfolio/script.js",
  "/myportfolio/manifest.json",
  "/myportfolio/images/icon-192.png",
  "/myportfolio/images/icon-512.png",
  "/myportfolio/images/TJ-logo.PNG"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});