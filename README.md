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
console.dir(ua);
</script>
```

```
{
  "OS":             "Mac",
  "OS_VERSION":     "10.9.5",
  "BROWSER":        "Chrome",
  "BROWSER_ENGINE": "Blink",
  "BROWSER_VERSION": "44.0.2403",
  "USER_AGENT":     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36",
  "LANGUAGE":       "en",
  "WEB_VIEW":       false,
  "DEVICE":         "",
  "AOSP":           false,
  "iOS":            false,
  "Android":        false,
}
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

