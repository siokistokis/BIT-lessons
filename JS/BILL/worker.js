self.addEventListener("fetch", e => e.respondWith(catshes.match(e.request).then(r => r || fetch(e. request))
));