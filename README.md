 UserAgent.js [![Build Status](https://travis-ci.org/uupaa/UserAgent.js.svg)](https://travis-ci.org/uupaa/UserAgent.js)

[![npm](https://nodei.co/npm/uupaa.useragent.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.useragent.js/)

Detect the OS, Browser and WebView from UserAgent String.


This module made of [WebModule](https://github.com/uupaa/WebModule).

## Documentation
- [Spec](https://github.com/uupaa/UserAgent.js/wiki/)
- [API Spec](https://github.com/uupaa/UserAgent.js/wiki/UserAgent)

## Browser, NW.js and Electron

```js
<script src="UserAgent.js/lib/WebModule.js"></script>
<script src="UserAgent.js/node_modules/uupaa.webgldetector.js/lib/WebGLDetector.js"></script>
<script src="UserAgent.js/lib/UserAgent.js"></script>
<script>

var ua = new UserAgent();

ua.OS               // -> "iOS"
ua.OS_VERSION       // -> "8.1.0"
ua.PC               // -> false
ua.MOBILE           // -> true
ua.BROWSER          // -> "Safari"
ua.BASE_BROWSER     // -> "WebKit"
ua.BROWSER_VERSION  // -> "8.0.0"
ua.USER_AGENT       // -> "Mozilla/5.0 (iPhone; CPU iPhone OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12B411 Safari/600.1.4"
ua.LANGUAGE         // -> "ja"
ua.WEB_VIEW         // -> false
ua.DEVICE           // -> "iPhone 5"
ua.TOUCH_3D         // -> false
ua.CARRIER          // -> ""
ua.FEATURE_PHONE    // -> false
ua.ES5              // -> true
ua.ES6              // -> false
ua.ES2015           // -> false
// --- OS ---
ua.iOS              // -> true
ua.Mac              // -> false
ua.macOS            // -> false
ua.Android          // -> false
ua.Windows          // -> false
// --- browser ---
ua.IE               // -> false
ua.Edge             // -> false
ua.Firefox          // -> false
ua.Chrome           // -> false
ua.Safari           // -> true
ua.Silk             // -> false
ua.AOSP             // -> false
ua.WebKit           // -> true
ua.Chromium         // -> false
// --- device ---
ua.iPod             // -> false
ua.iPad             // -> false
ua.iPhone           // -> true
ua.Kindle           // -> false
</script>
```

## WebWorkers

```js
importScripts("UserAgent.js/lib/WebModule.js");
importScripts("UserAgent.js/node_modules/uupaa.webgldetector.js/lib/WebGLDetector.js");
importScripts("UserAgent.js/lib/UserAgent.js");

```

## Node.js

```js
require("UserAgent.js/lib/WebModule.js");
require("UserAgent.js/node_modules/uupaa.webgldetector.js/lib/WebGLDetector.js");
require("UserAgent.js/lib/UserAgent.js");
```

