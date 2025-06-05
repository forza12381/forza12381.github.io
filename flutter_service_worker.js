'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c44baae177a252a626968cd0b3c96a1e",
"assets/AssetManifest.bin.json": "8293c3b2329104df8f40fe04a26206dd",
"assets/AssetManifest.json": "eddaaee5d6bc02df7ef778907c5244e0",
"assets/assets/images/body_back.png": "9febfc15df8706a71cd5970107002730",
"assets/assets/images/calender_days_sheet.png": "4954fbea4325fc0d6ffe134c1d527786",
"assets/assets/images/file.png": "fdddd28bb5253a29c03cf5c410aa8693",
"assets/assets/images/login_background.jpg": "ed1d2e2ee67369a9e741a468342196d5",
"assets/assets/images/person.png": "41725d6231f02db51b5cbf680cb18350",
"assets/assets/images/schedule_background_grid.png": "0f79e3395a31377d3fe531be931298b3",
"assets/assets/images/schedule_item_background.png": "11215e6c0137949074683f7352870b37",
"assets/assets/lottie/celebrate.json": "ff63a9b38d34fece66ab25e011855e49",
"assets/assets/svg/arrow.svg": "700a109eab956a94f76b3828a36f8aed",
"assets/assets/svg/arrow_up.svg": "f6aac57a579ced0801f331448aca7656",
"assets/assets/svg/balance.svg": "50d6b0522e16b27b382ba0e6e5833863",
"assets/assets/svg/barbell.svg": "eb9153fd7df885d4dcdc2976f49d4d29",
"assets/assets/svg/bread.svg": "12ae6baea26918a5cce3b22b773ca4ae",
"assets/assets/svg/calendar-dates.svg": "9dedb3da30481640099db330adab59e6",
"assets/assets/svg/calendar.svg": "3c2f3173e98903b55c5903d6d63046c1",
"assets/assets/svg/camera.svg": "9f80497ede7a3584d9b2413173673858",
"assets/assets/svg/cash.svg": "b76db9d23e34fa2204049227bb8051f6",
"assets/assets/svg/change.svg": "92bebf4762e9b36d17c7ed0d9c8bba66",
"assets/assets/svg/chat.svg": "8feb0d229256bedf825ff6f5c483e957",
"assets/assets/svg/checkbox-circle.svg": "fbd5593e864896ce7e758223534650d9",
"assets/assets/svg/check_list.svg": "67fcd6e6e0dd197203f621dc67358b31",
"assets/assets/svg/clock.svg": "7b3336c3b49d1b7fa2079401524ff361",
"assets/assets/svg/clock_fill.svg": "036f122968a4b9497e251d35a64b92f4",
"assets/assets/svg/clock_timer.svg": "1bfef51d319d6d211c5546eeceba2837",
"assets/assets/svg/comment.svg": "aad6124ef504207d58fcc7b396272c76",
"assets/assets/svg/comment_outline.svg": "4dcf54688abba459b53cbaae1905cfe1",
"assets/assets/svg/confirm_chat.svg": "fcf5eeaa735fd5903562ce44b5350a95",
"assets/assets/svg/country-flag.svg": "b853a6e80a879c65b95424c828b4ea0e",
"assets/assets/svg/country_flag.svg": "ee9ae32b417b68375ae101b19a80e901",
"assets/assets/svg/cup.svg": "bdc6e0a217abf8c7a1371e416fe13327",
"assets/assets/svg/doc_write.svg": "7e82a4cab13d6800a563e6095c732de7",
"assets/assets/svg/drink.svg": "86f947f604d913b8e16a4aff07c5e63c",
"assets/assets/svg/dropdown.svg": "27d29c7e6d3f126fc537faab621c5e6a",
"assets/assets/svg/dumble.svg": "3f33f76cbcdb8a8c5593f3465ebd446d",
"assets/assets/svg/edit.svg": "416baa8bc2d20f0a49a6614de439bbe1",
"assets/assets/svg/ellipse.svg": "2c8aaf5a45598c846bea5c39d39340f2",
"assets/assets/svg/email.svg": "1b9bfb8f85be7388d5d8da7df709945c",
"assets/assets/svg/exp.svg": "d216824304b26ad14f1dcb07b50ce774",
"assets/assets/svg/export.svg": "d73d727ff3436ce4f1b79c5f7d0e7938",
"assets/assets/svg/female.svg": "4be7b4bd6b8be66288090cd93a4b0edc",
"assets/assets/svg/filter.svg": "06ddc3efe834bedb8ad0f257edd28e1b",
"assets/assets/svg/fire.svg": "3880661457eb5d3f5fd55842b8d56780",
"assets/assets/svg/fit_talk.svg": "7fc4b7dca2eff6ddeb96e012da46beaf",
"assets/assets/svg/food-time.svg": "9dd61613fe59ba1b08b650e2cd3e23c3",
"assets/assets/svg/fork-and-spoon.svg": "a79a6e7db9680e518ddd2d8444afc4be",
"assets/assets/svg/gender_male.svg": "e7f18d3abccb5f468bef709979e7e94a",
"assets/assets/svg/height.svg": "7568b75cc2d3e72d5bae6cfc0b61a37f",
"assets/assets/svg/history_list.svg": "3c7c566bc236b977adee06308981921c",
"assets/assets/svg/home.svg": "f2f75406e21296aedb395a83c724281d",
"assets/assets/svg/like.svg": "bcda912640f7349782f4ff8c0f298796",
"assets/assets/svg/like_active.svg": "eedc96a1c883abaf82428aa5dcddd9ab",
"assets/assets/svg/like_unactive.svg": "5aa83621351ccf71f11bc414951d8207",
"assets/assets/svg/location_map.svg": "d6957bbf3ee3f92edf3211b44d3dc49e",
"assets/assets/svg/lock.svg": "e920e0df7c01e22d71c04e26fb5b9996",
"assets/assets/svg/logo.svg": "febae1af8f2430270eba093c68ed76b8",
"assets/assets/svg/logout.svg": "b6cb3243405dfff80b28972e4de978d9",
"assets/assets/svg/logo_white.svg": "34ead939725976e4edabe3981d2c3a4f",
"assets/assets/svg/male.svg": "e1bfeb473bab7b5d21328d37f2ac36f3",
"assets/assets/svg/notifications.svg": "255ca249db75ddfcb39d947a2bf4a96c",
"assets/assets/svg/olive_oil.svg": "e7bb05e184867d0550875434867776aa",
"assets/assets/svg/phone.svg": "23b431e2025f8e0b26e53f52864dcb61",
"assets/assets/svg/player_calendar.svg": "9395a169d83b7661903ee136c5500654",
"assets/assets/svg/protein.svg": "447cc727e5b8c3e67da8fe32400ffb32",
"assets/assets/svg/questions.svg": "ec4dc5b218fb69051dfba8e7a9537115",
"assets/assets/svg/report.svg": "60317b9a7d02137113ef5c04561880e6",
"assets/assets/svg/reports.svg": "e5d491398e2bdd674f0ff64f4341286a",
"assets/assets/svg/search.svg": "770e2a7f132657d5852dce949cc88b4b",
"assets/assets/svg/seen.svg": "e6195d6f943d80e1dc4a822a772e8d2d",
"assets/assets/svg/Send.svg": "c2dc4443dbd52b4e811275d4f9215775",
"assets/assets/svg/sent.svg": "b1b4f17c1f1b18f2f521ae3c44ae3df1",
"assets/assets/svg/settings.svg": "f9cd65e7ee481f1e32ecf70637a9e148",
"assets/assets/svg/share.svg": "d849f7530b3f3be38ca6004047c2d487",
"assets/assets/svg/statics.svg": "eada05f62e1b75e3880a828f36e4cab7",
"assets/assets/svg/timer_clock.svg": "50dbdb6fd50845ed2f35f2e9b542b231",
"assets/assets/svg/trash.svg": "6499de6cf8beb461c54fa207c8aedcc6",
"assets/assets/svg/trash_outline.svg": "f600ea024ffa713c76d6b0e2401d217a",
"assets/assets/svg/user.svg": "c9c11b07f8f0b05fb7642805bd948c44",
"assets/assets/svg/users.svg": "1e90189943ef6ac3bfb4f9e913718926",
"assets/assets/svg/volume-active.svg": "4bba861c29a6d539f6e169394c81aa45",
"assets/assets/svg/volume-mute.svg": "a0d87395934c1195e6828a435f647303",
"assets/assets/svg/weight.svg": "1f6e377f4bf69e157e09849f12c8a56c",
"assets/assets/temp/banner_ex.png": "7dda6659126e94d9e64b67b7ca303289",
"assets/assets/temp/exercise_temp.jpg": "0f50ca6f79cbc6f5f08fdee4aee0e154",
"assets/assets/temp/fit_talk_video_ex.png": "02d640c96557844140c48d048d248952",
"assets/FontManifest.json": "7021e32cfae85e448aaf690082c1ce75",
"assets/fonts/MaterialIcons-Regular.otf": "801442d0f8eb3a8680ea09286389ce57",
"assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/NOTICES": "0eb614027d8a523e70a8e94665f563db",
"assets/packages/any_link_preview/lib/assets/giphy.gif": "b0db8189c4cfba8340d61b1e72b1acdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"favicon.ico": "c75f3934411040756ada701cd2f2028f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "ef791f3bdef0be78c73ee6dcfad2647c",
"icons/apple-touch-icon.png": "69bcb91b87d983df1851d56e0d342487",
"icons/icon-192-maskable.png": "64a0979423565ab4e55d16e84f5b6ff0",
"icons/icon-192.png": "38daf5a953fa06ffbec7cb68832d99bf",
"icons/icon-512-maskable.png": "9af6ef4104e95fc9c4b2755244bfda39",
"icons/icon-512.png": "0990b9d0bb5d44e250284aaf83ed649e",
"index.html": "39137d4cb4563ff7bf543814992db56b",
"/": "39137d4cb4563ff7bf543814992db56b",
"main.dart.js": "579a6689c6f07985248e9233f0e05915",
"manifest.json": "22e08f9d2575714b8b36f6288e43d2f5",
"version.json": "659b40ed72dbe89aba872660d044ad0a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
