'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a96ccd798e989e45cd575fe41085ee73",
"assets/AssetManifest.bin.json": "17e3b3c2380e267207b7e39e12b6bfaf",
"assets/AssetManifest.json": "b67b6f4b58531db105927b0ec5f2d81e",
"assets/assets/images/auth_back_groud.png": "98b1db16c23d79c83ed14973f499e719",
"assets/assets/images/auth_back_samples.png": "f8cd26c395a07fddf4821c688a5ca379",
"assets/assets/images/auth_register_back.png": "b471808bd7d883453beef7b8aaedf6a1",
"assets/assets/images/body_back.png": "9febfc15df8706a71cd5970107002730",
"assets/assets/images/calender_days_sheet.png": "6d07c8fc761fba11f663c93ac022cee8",
"assets/assets/images/file.png": "fdddd28bb5253a29c03cf5c410aa8693",
"assets/assets/images/home_back.png": "97cb2f1021a5dae7cb30b26bc017d988",
"assets/assets/images/on_boarding_first.png": "9b729e52463b5f7c934c3a1f7f647292",
"assets/assets/images/on_boarding_second.png": "96a4a7c1b92cc5e533c137af63fd7c98",
"assets/assets/images/on_boarding_third.png": "ec54a1e1796c58278fd1913a13699ad4",
"assets/assets/images/person.png": "41725d6231f02db51b5cbf680cb18350",
"assets/assets/images/schedule_item_background.png": "f7e62740d7e94c663b48b46f4cd0db14",
"assets/assets/lottie/celebrate.json": "ff63a9b38d34fece66ab25e011855e49",
"assets/assets/svg/arrow.svg": "700a109eab956a94f76b3828a36f8aed",
"assets/assets/svg/arrow_up.svg": "f46194fd8d901ccfd6aafb787e613f23",
"assets/assets/svg/balance.svg": "50d6b0522e16b27b382ba0e6e5833863",
"assets/assets/svg/barbell.svg": "eb9153fd7df885d4dcdc2976f49d4d29",
"assets/assets/svg/bread.svg": "12ae6baea26918a5cce3b22b773ca4ae",
"assets/assets/svg/calendar-dates.svg": "9dedb3da30481640099db330adab59e6",
"assets/assets/svg/calendar.svg": "3c2f3173e98903b55c5903d6d63046c1",
"assets/assets/svg/camera.svg": "9f80497ede7a3584d9b2413173673858",
"assets/assets/svg/cash.svg": "b76db9d23e34fa2204049227bb8051f6",
"assets/assets/svg/change.svg": "92bebf4762e9b36d17c7ed0d9c8bba66",
"assets/assets/svg/chat.svg": "8feb0d229256bedf825ff6f5c483e957",
"assets/assets/svg/check_list.svg": "67fcd6e6e0dd197203f621dc67358b31",
"assets/assets/svg/clock.svg": "7b3336c3b49d1b7fa2079401524ff361",
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
"assets/assets/temp/banner_ex.png": "7dda6659126e94d9e64b67b7ca303289",
"assets/assets/temp/fit_talk_video_ex.png": "02d640c96557844140c48d048d248952",
"assets/assets/temp/saudi_arabia.png": "a5744a04f799d6fdc9f6bae6815bf8c4",
"assets/FontManifest.json": "7021e32cfae85e448aaf690082c1ce75",
"assets/fonts/MaterialIcons-Regular.otf": "7ccc75cd994d92f4c77db7464267d95c",
"assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/NOTICES": "3e6949d56b98fd81be8dd7a33f67b162",
"assets/packages/any_link_preview/lib/assets/giphy.gif": "b0db8189c4cfba8340d61b1e72b1acdc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "378e223ec3bf7d199a8235aab727ddc4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "da5ac0cb9bafad91e7eaca5c7abd6bee",
"/": "da5ac0cb9bafad91e7eaca5c7abd6bee",
"main.dart.js": "76e8538d4c1ca1bb7132cfcc180ee12f",
"manifest.json": "14e5b409dc7e3f3073742d4504358aac",
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
