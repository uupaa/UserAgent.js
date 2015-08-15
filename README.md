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
    LANGUAGE:         ua.LANGUAGE,
    WEB_VIEW:         ua.WEB_VIEW,
    DEVICE:           ua.DEVICE,
    AOSP:             ua.AOSP,
};

console.dir(result);

/*
{
  "OS": "Mac",
  "OS_VERSION": "10.9.5",
  "BROWSER": "Chrome",
  "BROWSER_ENGINE": "Blink",
  "BROWSER_VERSION": "44.0.2403",
  "USER_AGENT": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36",
  "LANGUAGE": "en",
  "WEB_VIEW": false,
  "DEVICE": "",
  "AOSP": false
}
 */
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

