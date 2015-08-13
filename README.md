# UserAgent.js [![Build Status](https://travis-ci.org/uupaa/UserAgent.js.svg)](https://travis-ci.org/uupaa/UserAgent.js)

[![npm](https://nodei.co/npm/uupaa.useragent.js.svg?downloads=true&stars=true)](https://nodei.co/npm/uupaa.useragent.js/)

Detect the OS, Browser and WebView from UserAgent String.

- Please refer to [Spec](https://github.com/uupaa/UserAgent.js/wiki/) and [API Spec](https://github.com/uupaa/UserAgent.js/wiki/UserAgent) links.
- The UserAgent.js is made of [WebModule](https://github.com/uupaa/WebModule).

## Browser and NW.js(node-webkit)

```js
<script src="<module-dir>/lib/WebModule.js"></script>
<script src="<module-dir>/lib/UserAgent.js"></script>
<script>

var ua = new UserAgent();

var result = {
    OS:               ua.OS,
    OS_VERSION:       ua.OS_VERSION,
    BROWSER:          ua.BROWSER,
    BROWSER_ENGINE:   ua.BROWSER_ENGINE,
    BROWSER_VERSION:  ua.BROWSER_VERSION,
    USER_AGENT:       ua.USER_AGENT,
    DEVICE:           ua.DEVICE,
    WEB_VIEW:         ua.WEB_VIEW,
    AOSP:             ua.AOSP,
    FULL_SCREEN:      _isFullScreenReady(),
    FILE_SYSTEM:      _isFileSystemReady(),
};

document.body.innerHTML += JSON.stringify(result, null, 2).replace(/\n/g, "<br>");

function _isFullScreenReady() {
    return "fullscreenEnabled"       in document ||
           "webkitFullscreenEnabled" in document || false;
}

function _isFileSystemReady() {
    return "requestFileSystem"       in window ||
           "webkitRequestFileSystem" in window || false;
}
</script>
```

## WebWorkers

```js
importScripts("<module-dir>lib/WebModule.js");
importScripts("<module-dir>lib/UserAgent.js");

```

## Node.js

```js
require("<module-dir>lib/WebModule.js");
require("<module-dir>lib/UserAgent.js");

```

