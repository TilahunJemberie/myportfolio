const cacheName = "tilahun-portfolio-v1";

const filesToCache = [
"/myportfolio/",
"/myportfolio/style.css",
"/myportfolio/script.js",
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