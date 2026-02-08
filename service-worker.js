const cacheName = 'islamic-lib-v1';
const assets = [
  './',
  './index.html',
  'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap'
];

// انسٹال ایونٹ - فائلیں کیشے کرنا
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// فیچ ایونٹ - آف لائن ہونے پر کیشے سے دکھانا
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
