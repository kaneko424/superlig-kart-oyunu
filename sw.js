const CACHE='kart-oyunu-json-v1'; const ASSETS=['.','index.html','manifest.json','teams.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE&&caches.delete(k))))) });
self.addEventListener('fetch',e=>{ e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request).then(resp=>{ return caches.open(CACHE).then(c=>{c.put(e.request, resp.clone()); return resp;}); }).catch(()=>caches.match('index.html')))) });