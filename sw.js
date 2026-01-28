const CACHE_NAME = "islamic-lib-v1";
const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];

// انسٹالیشن کے وقت فائلیں کیشے میں محفوظ کرنا
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// نیٹ ورک نہ ہونے پر کیشے سے فائلیں دکھانا
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
