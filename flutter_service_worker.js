'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7450a385788ef956ca187fbf00192ebf",
".git/config": "3062a7c6f4d727a227068494dcf4297f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "16810fe2fde0fc8ebc84aacd5e05e4c6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4a1d8d82790c3007351bbaa0650204a",
".git/logs/refs/heads/main": "c165648a0ef0a10bc4f458f7cc4dde15",
".git/logs/refs/remotes/origin/main": "7d5385a79aa87e78cb1202fb9afab871",
".git/objects/02/26e2a639d4e06f30cf8bf7f36ec2cb8ed3e9e0": "067eb55f1ae15b5ce0cec750a347e667",
".git/objects/07/e827860ecf211487c94afc04881c4bd0b5d4f2": "709b59809904c8f9dc11e132abe8f85e",
".git/objects/08/81edc51c1c59dadfa571c997ff3b9b23d0f740": "fa53d6637e3e4b125efb3159475f54ac",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/13/59964015eabe2f607f24d812193c4828c7fb5c": "4ddb987858c7c490d0ed23b205a02823",
".git/objects/16/74fccb9d27b0c156af26da31f729cde9cf8db2": "54976d1e24c218abae5fdb882f8879ea",
".git/objects/17/d3f84a2b734433a5f61246db4e6462de2ed687": "a7d794e2258c1642ad19b2dbba68c274",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/1f/8f8c3f2ad051b501be3e5e54f7f54623015d64": "e0b06a36568ceaaabb71d845b70a3703",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/76cffcc89d9e328ffa77924992e3c34aaac1f9": "6a8f6faaac8d35c1b36782f1e81d9141",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/0893506321784774b685ea646b3170d4476c6f": "39a83f58872934383ff6d329908357c2",
".git/objects/34/560280b7258395c77eb63618209870f34a83d1": "6917e20eef96891fdd60472ae4d04b29",
".git/objects/34/6aefe3ad9dbb43c9a1918b8f4e5619bccc1d84": "d6c58cee700423db4143531e649609f7",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/36/e4d6380f54971b2c9fb4f7e0ab9a8932975e24": "ea3b8d397e85b40dac658c789f74b951",
".git/objects/37/9581c5cc44f2ef69a05aee23e3d4b76829d543": "a336b4173a7440e2de887b8fd395a77a",
".git/objects/4e/266f64cd0b82d5c9c8e8e07f3c35a11927fbbb": "45fd412f6c5cd7d001d946341792dce2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/8c711accad71c0c804efdb10eca1ceeaa074b1": "b15862c829dc7f5a900003a562027302",
".git/objects/53/4329f936784075b7a1ca0583b90f1643602fb2": "6ee96cbd09d6ed997e1e2877d3e01a24",
".git/objects/56/5dcac698cd24a2202f45056fa252f8989ee3e2": "189f67ca98958d2107a65980073591f1",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5b/8f36dd165b4078715de74a19a01b9adbb17ec1": "7dfdb768f0ea8d014cd396de034a2482",
".git/objects/5d/ffa8bac7bfcdfcc0c43727adf0fba2554faa80": "8de935f86c33ead18abd4c1da732a866",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/63/a71f6b358c5b12d2e40a1112d858a32417515e": "1ecd7dd66ccdd40668f605746cb9c162",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/68/cfe879e77250c1ea816d2bcad0c664d314c505": "01d897cf3867e4625b295ff656d812e2",
".git/objects/6a/ba1d763593fab34b26402da543a29147568fed": "a57e8e376982c7957d410bc704a3fcb6",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/10accb7bb848fa7f0f3275e8689c46acc8d4ee": "ac73299588b66efe81bb01e89a8ff7b1",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/70/1a670bc0ce461d39cce37380481f41ff44235a": "9134488e9de0f1ea19427d5239cb141f",
".git/objects/73/baa5bdd72bbcb85ed88215f64dd86f9448bc71": "1e0ee39ee0ada7aa8ca312a21fe5e8ed",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/e491c0de861f91529451bc1760d80a401854ec": "c50652e2a97284d9c42fb32c21a9abea",
".git/objects/77/addf07d850ba809dc79a88ea9cfc619b148885": "243d4b9196db4e910e8096bb4feb5d3a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/be03edf6ad69dad07abcb72ef34019fb64292b": "36498a4a203335be478ae94ad91e96df",
".git/objects/7c/a97a772558495c73a93eb206eb18395333f230": "828a156adfc290ea5b7c94027dc8eb69",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/cdb88f88e6c9a22b098a2a699258e95b551093": "4efe688ff9fdbdd5328a663eab1b4cce",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/95/91be6ef54102ed90a4a4fb8ab5079ca8f25b8e": "6c7a695c8a603b9e7dcc48083fe2297b",
".git/objects/97/ab37067ab4ed102a51264fde142bc8d81d10d0": "b9c2f3e15963066ca0e6e45d46eb9546",
".git/objects/99/f75b243fe6be68c8a66935796a91b7c0a6417b": "e5ebe209ceeb6ca4b941e087617b7fc2",
".git/objects/a0/e9b11df0b134acb6c74893e52a589fea24cadc": "20b6677ec168f447c9787e6b62f5a236",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/aa/5c92705bcc3682f5cc70f949d448f062b319f3": "5a0192ba7dbcee4a46b32a8360de06fd",
".git/objects/ad/df583196fde96abc22eb5e4d4fc97cc9e40d63": "280c2bafd7ffc0398ea7c786ae56e89d",
".git/objects/ae/487bfc113054e77840929ab95f818329b40794": "df996948433949d75d778852c26bbaf5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/887c1213741e6ef972993151b8c5dd152fa501": "0c230e4615bff3207608ac0e37e03c3c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c1/774dade47c5ba923b7b1879bc271cfeed09c98": "13bf72ae9a7028a366a2a5f7de63f0e3",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/cc/1bec6c73faff38f76612aa7ad07615cb3d7991": "2304e70c0feae76b7414d986dcd5ebd4",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d2/6891777aff062bc2d7438a85c066c66edc7440": "bc5aae72639373004ab0197c26452029",
".git/objects/d3/3d0eb2f99650a8abb0415b34d564d552cd2c8e": "f1517f339576b3548a507a58ec84bb2e",
".git/objects/d4/010013127d385ebb0ef992bdd01309eb3ea695": "fe45f67a5977b25d4cae3239e713ebc8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/5454363c901f44f9a79e0f16942076482c0ca2": "264ceec208ad4b2c1dbdf34313eec0f7",
".git/objects/e1/accebca8dcb7d759128dcf40c4f331d59de3b4": "fedc4f769b70ef6ece0ad4f384d71a85",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/8231d30e5490b08c398234e252868c941ef5c3": "65756bc26d8c6ddac90884b7ac67364d",
".git/objects/e9/c6cf5ccf48a93156c311667bb06b267d305f4b": "f83cef5698851ff5f0608635d4c931a1",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/11710cd1afba9b24925e58a9a3a74416e05be4": "32cd9536b8aa62f740acb5e995ce5b4f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/17ab7bbce48426f1f86ee521e97c34d81cbfbb": "a5e59b1344b10a5aa9a3fad610daddb7",
".git/objects/f1/09496aeb40ceedf6cd9ee3d98bcc187e70634d": "c7e5177a84244bffdaa750d8a829faad",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/f5/ec356039d9ce7f83820b56c8c7e665acdaeac2": "529f820affe986807c4f7e8197565931",
".git/objects/f6/8211730793ab23ee071c7ea1aa90a866c0caeb": "fe31512366452f4a55a3d8caf17ed618",
".git/objects/fb/d7353083546789ff71673d5656f8524a3f5f6a": "e86852bcadb1e5b3502e7f766c3a72a4",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/refs/heads/main": "a9af3e7d151b5082af6f3bb4a63ab0e3",
".git/refs/remotes/origin/main": "a9af3e7d151b5082af6f3bb4a63ab0e3",
"assets/AssetManifest.json": "7148fe563da403590e3183969b1e1f00",
"assets/assets/bitcoin1.png": "07b0023bc1f0108e5ff1a9cc95c315a7",
"assets/assets/bitcoin2.png": "2bba88d27482284cc78c585dbd7275cc",
"assets/assets/bmi1.png": "33dbbcddd8c36804f69c70745f47b59e",
"assets/assets/bmi2.png": "8039ecc3eb3f3119fb6f3a20c05e8048",
"assets/assets/chatter1.png": "47b586e7deee3ffe86c4ebc8a887e08a",
"assets/assets/chatter2.png": "8007ae25c43cf396def007cb0b45ea6e",
"assets/assets/chatter3.png": "10ae20711e4e9a0110ed1702ae6de575",
"assets/assets/chatter4.png": "3ba4d4450b5461020ddceffc9b5fe6f9",
"assets/assets/chatter5.png": "181fa863355c34ea413f546a9ded8db8",
"assets/assets/clima1.png": "a4f8ae299bb5e06ff793bfdd01713e36",
"assets/assets/clima2.png": "cd8c2879049dd9a8137afcc2da28adfd",
"assets/assets/email.png": "5eb3c4b86aafbee72b8c471b29413a50",
"assets/assets/flutter1.png": "db9c6248f913cb0bb5899c8d3200a5b3",
"assets/assets/flutter2.png": "dbe9d06a5b2bcf1d1a90a6e9979ca9ce",
"assets/assets/flutter3.png": "3205f6803d53a7c86dd2c337eaa9472f",
"assets/assets/flutter4.png": "e1fe2e9486836b0a95a3867fefb3438e",
"assets/assets/flutter5.png": "2932efbf74094fa3787c6e3b1f7915d8",
"assets/assets/front.jpg": "593431f32cb798945a5650582fe1f0c7",
"assets/assets/front.png": "06c3c7aba093a5e493cc86be021f1479",
"assets/assets/ios.png": "49f79e21da11e96b8cf0e3b8bef6616c",
"assets/assets/kawaii0.png": "c69192d08b102c2cd243efd91d63c88a",
"assets/assets/kawaii1.png": "561e67e485ac10c298b47cdd64b5eb83",
"assets/assets/kawaii2.png": "ab691870df89ce867520bb615768de43",
"assets/assets/kawaii3.png": "d980e0a53457fdfd01ff57661d5c778e",
"assets/assets/laptop.png": "fb49e3c0c36437239db5f8c114b03062",
"assets/assets/mappin.png": "9cc090022ae31337336d2024160714b8",
"assets/assets/phone.png": "45903a1ffa9ede882171aca9f71c4c29",
"assets/assets/skill.png": "adb74946a3db9ebed0131d6c7dc54ee1",
"assets/assets/skyliner1.png": "404e9b093c44a25d40cabb90d3f5cfe8",
"assets/assets/skyliner2.png": "012d168cf7493b81cd5e968b786640ed",
"assets/assets/skyliner3.png": "243c125d90ed24db2d1710f78675d097",
"assets/assets/skyliner4.png": "dc6b7f16df9122dc1e776a8bfc824e81",
"assets/assets/skyliner5.png": "c1c8ba436ec65bb66822b77ea8321504",
"assets/assets/skyliner6.png": "0328433b9b89e3124ff3c74a671b000d",
"assets/assets/whatsapp.png": "426617ad28567da23a2346566d84b5a6",
"assets/FontManifest.json": "25d9110247dae7115a89bb288f1b5ed3",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "42cc0c783a6948b9375eb95b9936655d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons_null_safety/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons_null_safety/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons_null_safety/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons_null_safety/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons_null_safety/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons_null_safety/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons_null_safety/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons_null_safety/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons_null_safety/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons_null_safety/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons_null_safety/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons_null_safety/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons_null_safety/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ebbcefb9210b00eb57ee2f0df801804",
"/": "2ebbcefb9210b00eb57ee2f0df801804",
"main.dart.js": "b63266478464cd2252c11040ed34d49b",
"manifest.json": "99764301e5ff7ada5bce977c172d4572",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
