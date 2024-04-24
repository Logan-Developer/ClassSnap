'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"index.html": "7195e61f8c11dde248484289599adcc3",
"/": "7195e61f8c11dde248484289599adcc3",
".git/logs/HEAD": "ef63a58b8842008af5cc6d2be4d83f93",
".git/logs/refs/heads/main": "959c9256c601a2b09556aa47d0fec086",
".git/logs/refs/remotes/origin/main": "5bfee9a9d2cc2081b71337732452d95c",
".git/COMMIT_EDITMSG": "a77fd6dfda40793f016e6a8135260e8b",
".git/hooks/pre-commit.sample": "3e3b74d84228df7679307b963c138758",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/sendemail-validate.sample": "c4c26785acacb2553117cf802723d09f",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/FETCH_HEAD": "f39632fb74b65fa70e073fd9a369e68a",
".git/refs/heads/main": "9e319d325cdf0d9c6cbfa97895e0e872",
".git/refs/remotes/origin/main": "9e319d325cdf0d9c6cbfa97895e0e872",
".git/objects/a7/a2d9a96ab05515af9f47b7442c5182b37a6557": "b98325221f0be4fda52b302961590367",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "574f3275cfb36d347891f606327a40cd",
".git/objects/bc/6d2f9e9595e6860f32e6863ca494ee8eb137ca": "b0e24fbbe05259d2ab8ed90b40bde6ec",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fdff41aa40e3ad173d53724e172ee224",
".git/objects/88/db9cfdc418c9bd3e181a2c0b3e58d43fa66308": "472ed4e255437e9abb267f6136db8d47",
".git/objects/da/736b06aae7b78972ce55e109d7212411bc7dac": "9ec52df499735efa3781a0f29d395ce8",
".git/objects/d1/4ff689166236db5cc991462d869634da600c69": "931552f31b03b87f7332be32cf866fc8",
".git/objects/pack/pack-780969d90ceed110bb7432b08649bad44ffb9bb4.idx": "7726d67f9384d1bb8398b6df9ee0a03d",
".git/objects/pack/pack-780969d90ceed110bb7432b08649bad44ffb9bb4.rev": "41c59c2b39b27b8235f9d9046d33818d",
".git/objects/pack/pack-780969d90ceed110bb7432b08649bad44ffb9bb4.pack": "c3ea26d2c60e7e3b169e03b15fac9621",
".git/objects/a8/3e7875c504cd0f5d1558ae582b3f5f42e7fd2e": "dc75afb585f74e4e5243b64c72014b44",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/8c/fcb7d9660b874182433b4a5c4c4856d72872fa": "690ac22d32fd5c41172331c9ef3c2827",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "c0245ee3ff96770aae8bf794a219cd27",
".git/objects/51/7ee1fc3839656cb1e824847b35348f99d3e820": "f273e5fe973fabbfa6eae158153927e7",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "4ec620b2791ffa6adeb03f6df96105bd",
".git/objects/66/1832142ac2e699b000f262a7a42e01094aa2ba": "3b5fedec4021c9c05b1736359048c253",
".git/objects/6c/30a060da384aeb516d38fc7aeb831e174130bb": "ac18ade16ae1fe323dc77bb1de9cb35a",
".git/objects/dd/8342eecb5a29956eb8cbe533f0b0bf210a3dbb": "8cb92872a77b337d1b9f5399f9c4791d",
".git/objects/dd/f0a829a8d4337d38ef4031c54feec8ddfb52d8": "4971c81e4bc6e9cb00d29182107f6836",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ce3bf4d6ba67f43fae5ab3246ea80034",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "53f60bb3cbcd13e11424c1b9d724d5a5",
".git/objects/a1/90dc7e872a022a5c879dca8192dcac80bd3599": "c15dda9def19dd5fe675cdb8fc05081d",
".git/objects/bf/b29fd1dc1a4d02b45aad45ce7d788fa1cd7306": "298f650a7caf5b94bcd0b5add3cd059f",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "5650f19870cf7742bf423016efe2a7bf",
".git/objects/14/1d1997775a9545f6f88ba0952887288080d96c": "3b929f33dddaefb908bbad205d8b5a5b",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "183b3cd1360ee521e6c84b706a825bff",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "1c34a5c86359066bf70904c84c80f83d",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "c61ceb44f47795673069b0e0790197aa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "c61efd0b2feea66b7e3396ea660bc62b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "245a422a284004e104940c5fab52cbe0",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "1b76853e549b114701f491ee6abc73f3",
".git/objects/25/62e42f856f870aaaff475de078542c41099ea4": "af983753461140ad5b421b220fa65777",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "53e88805a26dae798984354efa4db472",
".git/objects/fa/94eb098870788d32bffb18495e70cce9321a56": "d88f3f74d2d4a8ace4e31026bd242bf1",
".git/objects/fa/941732d62341ddfa973e24ec164912cd5ccfcc": "db68c394dc663e2f813a04e3cdb896dc",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "855e39ca04899d67d425292f10703e3a",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "805688d757976c3b1ee7d3edf81db981",
".git/objects/03/79f92129c72e0e94ff2ce35c0bbd841ae5a14f": "77fc0159a9683105f90ff8523a361502",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "5074ea5008e8675b842cfb37ec3761ac",
".git/objects/f9/a1dafd574b0f51076da4048dd851971b1b9e14": "4c82f098676c51c77f9cab96d8fdf447",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "5df352722db8170831596b16500db59d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/83/2a5c46526de0305e5f561ee4e4e659f81b64e1": "f3c53c7c7ce9c30cd224ae99309488dd",
".git/objects/57/6bfe9b815b5eeb0ca8ebf342047692ba58b0e5": "0aa52279c72bdb3fca013d4d4b1240cd",
".git/objects/21/c67950e2f11201d9426b47c7ea710dc93f6503": "bf6902e851f53f51969aee54c27a7b49",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "0a960cd41a5d0b89adb9f7e475e86d20",
".git/objects/b5/a32a3ebb6d6f14b934e8aa2055b9ca991ca06c": "5a110446c7238665fcf20b3af819dfc8",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "1c7b50645bc0bc6e5893e13afc225572",
".git/objects/b2/522d07c2e34e45c8d04124943f36791ff73c4b": "d7f2d3403a021d42037ffa845f1a9c69",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/44/75e99a3ae2fb05229b1f733062132fcb95412e": "bbe231eda83379993767be29e1b1f4f7",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "bf9630e0c33e9725006f7abd0fb86aea",
".git/config": "0d3c9f3e5598810d08eaa6618d944b89",
".git/index": "ac74ffad21817a2c121922ff57b7bdad",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/ORIG_HEAD": "9e319d325cdf0d9c6cbfa97895e0e872",
"sqflite_sw.js": "3b4e93c65e8b107b962d9b2da163a8db",
"icons/Icon-maskable-192.png": "16f87c5027dc871790e90f0c6ecb405d",
"icons/Icon-512.png": "cf3a7fb2bc578478a38ea00940e9338b",
"icons/Icon-192.png": "16f87c5027dc871790e90f0c6ecb405d",
"icons/Icon-maskable-512.png": "cf3a7fb2bc578478a38ea00940e9338b",
"assets/AssetManifest.bin.json": "c1b0e3c11fab5dbe5acdd27a825fdc19",
"assets/fonts/MaterialIcons-Regular.otf": "fce33ba9337d90439c68e1d305f41f66",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/AssetManifest.bin": "0ff7542116cad7dd26e2292e8dffacec",
"assets/assets/no_data.jpg": "37f263bd044a508e0c896d151cfd1a98",
"assets/no_data.jpg": "37f263bd044a508e0c896d151cfd1a98",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "2245072e0896ed46c90cf02e17aef9a3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.json": "d60d0b5bb7c2b3e6075ba3f00b83a4b4",
"version.json": "8becb79e7a9f699c77367a980d0a0e75",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "3b6488439129ad9ddac0f6ee66dd507b",
"main.dart.js": "6f445afafdc55c74885c56152ef8a8e0",
"manifest.json": "1b96656fed110b0b4396247032c42df2",
"sqlite3.wasm": "f08450f1d5a088a01cec0eb541c3aeca"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
