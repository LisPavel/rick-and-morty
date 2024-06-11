const staticCacheKey = "static-site-v2";
const dynamicCacheKey = "dynamic-site-v2";

const ASSETS = ["/", "/index.html"];
// install sw
self.addEventListener("install", async (ev) => {
  const cache = await caches.open(staticCacheKey);
  await cache.addAll(ASSETS);
});

// activate sw
self.addEventListener("activate", async (ev) => {
  const cachesKeysArray = await caches.keys();
  await Promise.all(
    cachesKeysArray
      .filter((k) => k !== staticCacheKey && k !== dynamicCacheKey)
      .map((key) => caches.delete(key)),
  );
});

// fetch event
self.addEventListener("fetch", (ev) => {
  const request = ev.request;
  const response = cacheFirst(request);
  ev.respondWith(response);
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  try {
    return (
      cached ??
      (await fetch(request).then((response) => {
        return networkFirst(request);
      }))
    );
  } catch (error) {
    return networkFirst(request);
  }
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheKey);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    return cached;
  }
}
