(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("UserAgent", function moduleClosure(global) {
"use strict";

// Microsoft Edge   - https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
// Firefox          - https://developer.mozilla.org/ja/docs/Gecko_user_agent_string_reference
// WebView          - https://developer.chrome.com/multidevice/user-agent#webview_user_agent
//                  - https://developer.chrome.com/multidevice/webview/overview#does_the_new_webview_have_feature_parity_with_chrome_for_android_

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
var BROWSER_ENGINES = {
    "Chrome":           "Blink",
    "Firefox":          "Gecko",
    "IE":               "Trident",
    "Edge":             "Trident",
    "AOSP":             "WebKit",
    "Safari":           "WebKit",
    "WebKit":           "WebKit",
    "Chrome for iOS":   "WebKit",
};

// --- class / interfaces ----------------------------------
function UserAgent(userAgent, // @arg String = navigator.userAgent
                   options) { // @arg Object = {} - { FULL_SCREEN, FILE_SYSTEM }
    var ua              = userAgent || (global["navigator"] || {})["userAgent"] || "";
    var os              = _detectOS(ua);
    var osVersion       = _detectOSVersion(ua, os);
    var browser         = _detectUserAgentName(ua);
    var browserVersion  = _detectUserAgentVersion(ua, browser);

    this._OS                = os;
    this._OS_VERSION        = osVersion;
    this._BROWSER           = browser;
    this._BROWSER_ENGINE    = BROWSER_ENGINES[browser] || "";
    this._BROWSER_VERSION   = browserVersion;
    this._USER_AGENT        = ua;
    this._WEB_VIEW          = _isWebView(ua, os, browser, browserVersion, options || {});
    this._AOSP              = _isAOSP(ua, os, browser, parseFloat(browserVersion));
}
UserAgent["USER_AGENT"]  = null;
UserAgent["FULL_SCREEN"] = null;
UserAgent["FILE_SYSTEM"] = null;
UserAgent["repository"]  = "https://github.com/uupaa/UserAgent.js";
UserAgent["prototype"] = Object.create(UserAgent, {
    "constructor":      { "value": UserAgent  }, // new UserAgent():UserAgent
    "OS":               { "get":   function()  { return this._OS;               } }, // "Android", "iOS", "Windows", "Mac", "Firefox", "Chrome OS", ""
    "OS_VERSION":       { "get":   function()  { return this._OS_VERSION;       } }, // Semver. "{{Major}},{{Minor}},{{Patch}}"
    "BROWSER":          { "get":   function()  { return this._BROWSER;          } }, // "Chrome for iOS", "Edge", "Chrome", "Firefox", "AOSP", "IE", "Safari", "WebKit", ""
    "BROWSER_ENGINE":   { "get":   function()  { return this._BROWSER_ENGINE;   } }, // "Blink", "Gecko", "Trident", "WebKit", ""
    "BROWSER_VERSION":  { "get":   function()  { return this._BROWSER_VERSION;  } }, // Semver. "{{Major}},{{Minor}},{{Patch}}"
    "USER_AGENT":       { "get":   function()  { return this._USER_AGENT;       } }, // UserAgent.
    "WEB_VIEW":         { "get":   function()  { return this._WEB_VIEW;         } }, // is WebView.
    "AOSP":             { "get":   function()  { return this._AOSP;             } }, // is AOSP Stock UserAgent.
});

// --- implements ------------------------------------------
function _detectOS(ua) {
    switch (true) {
    case /Android/.test(ua):            return "Android";
    case /iPhone|iPad|iPod/.test(ua):   return "iOS";
    case /Windows/.test(ua):            return "Windows";
    case /Mac OS X/.test(ua):           return "Mac";
    case /CrOS/.test(ua):               return "Chrome OS";
    case /Firefox/.test(ua):            return "Firefox OS";
    }
    return "";
}

function _detectOSVersion(ua, os) {
    switch (os) {
    case "Android":                     return _getVersion(ua, "Android");
    case "iOS":                         return _getVersion(ua, /OS /);
    case "Windows":                     return _getVersion(ua, /Phone/.test(ua) ? /Windows Phone (?:OS )?/
                                                                                : /Windows NT/);
    case "Mac":                         return _getVersion(ua, /Mac OS X /);
    }
    return "0.0.0";
}

function _detectUserAgentName(ua) {
    switch (true) {
    case /CriOS/.test(ua):              return "Chrome for iOS"; // https://developer.chrome.com/multidevice/user-agent
    case /Edge/.test(ua):               return "Edge";
    case /Chrome/.test(ua):             return "Chrome";
    case /Firefox/.test(ua):            return "Firefox";
    case /Android/.test(ua):            return "AOSP"; // AOSP stock browser
    case /MSIE|Trident/.test(ua):       return "IE";
    case /Safari/.test(ua):             return "Safari";
    case /AppleWebKit/.test(ua):        return "WebKit";
    }
    return "";
}

function _detectUserAgentVersion(ua, browser) {
    switch (browser) {
    case "Chrome for iOS":              return _getVersion(ua, "CriOS/");
    case "Edge":                        return _getVersion(ua, "Edge/");
    case "Chrome":                      return _getVersion(ua, "Chrome/");
    case "Firefox":                     return _getVersion(ua, "Firefox/");
    case "AOSP":                        return _getVersion(ua, /Silk/.test(ua) ? "Silk/" : "Version/");
    case "IE":                          return /IEMobile/.test(ua) ? _getVersion(ua, "IEMobile/")
                                             : /MSIE/.test(ua)     ? _getVersion(ua, "MSIE ") // IE 10
                                                                   : _getVersion(ua, "rv:");  // IE 11
    case "Safari":                      return _getVersion(ua, "Version/");
    case "WebKit":                      return _getVersion(ua, "WebKit/");
    }
    return "0.0.0";
}

function _getVersion(ua, token) { // @ret SemverString - "0.0.0"
    try {
        return _normalizeSemverString( ua.split(token)[1].trim().split(/[^\w\.]/)[0] );
    } catch ( o_O ) {
        // ignore
    }
    return "0.0.0";
}

function _normalizeSemverString(version) { // @arg String - "Major.Minor.Patch"
                                           // @ret SemverString - "Major.Minor.Patch"
    var ary = version.split(/[\._]/); // "1_2_3" -> ["1", "2", "3"]
                                      // "1.2.3" -> ["1", "2", "3"]
    return ( parseInt(ary[0], 10) || 0 ) + "." +
           ( parseInt(ary[1], 10) || 0 ) + "." +
           ( parseInt(ary[2], 10) || 0 );
}

function _isAOSP(ua, os, browser, version) { // @ret Boolean - is AOSP Stock UserAgent
    if (os === "Android" && browser === "AOSP") {
        if (!/Silk/.test(ua)) {
            if (version >= 4.0 && version < 4.4) {
                return true;
            }
        }
    }
    return false;
}

function _isWebView(ua, os, browser, version, options) { // @ret Boolean - is WebView
    switch (os + browser) {
    case "iOSSafari":
    case "iOSWebKit":       return !_isFullScreenReady(options);
    case "AndroidAOSP":     return false; // can not accurately detect
    case "AndroidChrome":   return parseFloat(version) >= 42 ? /; wv/.test(ua)
                                 : /\d{2}\.0\.0/.test(version) ? true // 40.0.0, 37.0.0, 36.0.0, 33.0.0, 30.0.0
                                 : !_isFileSystemReady(options);
    }
    return false;
}

function _isFullScreenReady(options) { // @arg Object - { FULL_SCREEN }
    // Chrome 15++, Safari 5.1++, IE11, Edge, Firefox10++
    // Android 5.0 ChromeWebView 30: false
    // Android 5.0 ChromeWebView 33: false
    // Android 5.0 ChromeWebView 36: false
    // Android 5.0 ChromeWebView 37: false
    // Android 5.0 ChromeWebView 40: false
    // Android 5.0 ChromeWebView 42: ?
    // Android 5.0 ChromeWebView 44: true
    var document = (global["document"] || {});

    if ("FULL_SCREEN" in options) {
        return options["FULL_SCREEN"];
    }
    return "fullscreenEnabled"       in document ||
           "webkitFullscreenEnabled" in document || false;
}

function _isFileSystemReady(options) { // @arg Object - { FILE_SYSTEM }
    // Chrome 8++
    // Android 5.0 ChromeWebView 30: false
    // Android 5.0 ChromeWebView 33: false
    // Android 5.0 ChromeWebView 36: false
    // Android 5.0 ChromeWebView 37: false
    // Android 5.0 ChromeWebView 40: false
    // Android 5.0 ChromeWebView 42: false
    // Android 5.0 ChromeWebView 44: false
    if ("FILE_SYSTEM" in options) {
        return options["FILE_SYSTEM"];
    }
    return "requestFileSystem"       in global ||
           "webkitRequestFileSystem" in global || false;
}

return UserAgent; // return entity

});

