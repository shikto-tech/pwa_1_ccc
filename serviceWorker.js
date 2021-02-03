self.addEventListener("install", e => {
    console.log("install");
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./a.js",
                "https://raw.githubusercontent.com/shikto-tech/pwa_1_ccc/main/manifest.json",
                "./index.html",
                "https://cdn.glitch.com/9c614cc7-3ede-4741-a5ec-749e59f7d477%2Fimage.png?v=1612338724119"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});

let deferredPrompt;

