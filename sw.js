importScripts('/prettier-php-playground/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/prettier-php-playground/_nuxt/480acd5a0d015ccbf4df.worker.js",
    "revision": "04052ca031ab55d3e2794da0a940d005"
  },
  {
    "url": "/prettier-php-playground/_nuxt/4a02dac1e03753ac0e2c.js",
    "revision": "9425f1c8927c0bd0da3d5d0a7279d1de"
  },
  {
    "url": "/prettier-php-playground/_nuxt/4dc550d722d3883980c6.js",
    "revision": "b4d451a09d3c25d85f254b6bb3996e5d"
  },
  {
    "url": "/prettier-php-playground/_nuxt/70d685a6c0f52f7b08e3.js",
    "revision": "a4aa60b290156df50db6947356cf9a4c"
  },
  {
    "url": "/prettier-php-playground/_nuxt/d20b86461db290907f5f.js",
    "revision": "b396bdcee6edbda8660f800a98fd2684"
  },
  {
    "url": "/prettier-php-playground/_nuxt/eae44a77ad3b83db43b8.js",
    "revision": "4db9017ff336b1e78406bfb71c804f50"
  },
  {
    "url": "/prettier-php-playground/_nuxt/f427df88d6a9f2af016c.js",
    "revision": "5a7575a27f17400f4aa0fbb69d8d82de"
  }
], {
  "cacheId": "prettier-php-playground",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/prettier-php-playground/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/prettier-php-playground/.*'), workbox.strategies.networkFirst({}), 'GET')
