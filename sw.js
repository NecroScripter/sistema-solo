self.addEventListener('fetch', function(event) {
  // Nada complexo por enquanto, apenas permite o funcionamento básico
  event.respondWith(fetch(event.request));
});