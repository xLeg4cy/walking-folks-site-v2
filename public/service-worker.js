
// Service Worker for Walking Folks Website
const CACHE_NAME = 'walking-folks-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/og-image.png',
  '/src/main.tsx',
  '/src/index.css',
  '/lovable-uploads/1d6e29f4-c548-4f24-8ec4-75d830188ac3.png', // Logo
  '/lovable-uploads/e92ee987-29bd-48b1-9ef2-a07dc0b8e844.png', // Hero image
];

// Install event - cache critical assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching files');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache');
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - serve from cache first, then network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }
        
        // Not in cache - return the result from the live server
        // and cache for future use
        return fetch(event.request)
          .then((response) => {
            // Return the response but also update cache
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response since we need 
            // to use it in both places
            const responseToCache = response.clone();

            // If request was successful, add it to cache
            if (event.request.method === 'GET') {
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          });
      })
      .catch(() => {
        // If both cache and network fail, serve an offline fallback
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      })
  );
});
