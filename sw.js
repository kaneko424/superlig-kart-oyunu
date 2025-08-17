self.addEventListener('install', (event) => {
  console.log('Service Worker yüklendi.');
});
self.addEventListener('fetch', (event) => {
  console.log('İstek:', event.request.url);
});