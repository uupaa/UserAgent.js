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
                   options) { // @arg Object = {} - { WEB_VIEW, DISPLAY_DPR, DISPLAY_LONG, DISPLAY_SHORT }
    options = options || {};

    var nav                 = global["navigator"] || {};
    var ua                  = userAgent || nav["userAgent"] || "";
    var os                  = _detectOS(ua);
    var osVersion           = _detectOSVersion(ua, os);
    var browser             = _detectBrowser(ua);
    var browserVersion      = _detectBrowserVersion(ua, browser);
    var device              = _detectDevice(ua, os, osVersion, options);
    var lang                = (nav["language"] ||
                               nav["userLanguage"] || "en").split("-", 1)[0]; // "en-us" -> "en"
    this._OS                = os;
    this._OS_VERSION        = osVersion;
    this._BROWSER           = browser;
    this._BROWSER_ENGINE    = BROWSER_ENGINES[browser] || "";
    this._BROWSER_VERSION   = browserVersion;
    this._MOBILE            = /Android|iOS/.test(os) || /Windows Phone/.test(ua);
    this._USER_AGENT        = ua;
    this._LANGUAGE          = lang;
    this._WEB_VIEW          = _isWebView(ua, os, browser, browserVersion, options);
    this._DEVICE            = device;
    this._AOSP              = _isAOSP(ua, os, browser, parseFloat(browserVersion));
    this["ES5"]             = /native/.test(Object["keys"] + "");
    this["ES6"]             = /native/.test(String["raw"]  + "");
}
UserAgent["WEB_VIEW"]    = null;
UserAgent["repository"]  = "https://github.com/uupaa/UserAgent.js";
UserAgent["prototype"] = Object.create(UserAgent, {
    "constructor":      { "value": UserAgent  }, // new UserAgent():UserAgent
    "OS":               { "get":   function()  { return this._OS;               } }, // "Android", "iOS", "Windows", "Mac", "Firefox", "Chrome OS", ""
    "OS_VERSION":       { "get":   function()  { return this._OS_VERSION;       } }, // Semver. "{{Major}},{{Minor}},{{Patch}}"
    "MOBILE":           { "get":   function()  { return this._MOBILE;           } }, // is Mobile OS. Android os iOS or WindowsPhone
    "BROWSER":          { "get":   function()  { return this._BROWSER;          } }, // "Chrome for iOS", "Edge", "Chrome", "Firefox", "AOSP", "IE", "Safari", "WebKit", ""
    "BROWSER_ENGINE":   { "get":   function()  { return this._BROWSER_ENGINE;   } }, // "Blink", "Gecko", "Trident", "WebKit", ""
    "BROWSER_VERSION":  { "get":   function()  { return this._BROWSER_VERSION;  } }, // Semver. "{{Major}},{{Minor}},{{Patch}}"
    "USER_AGENT":       { "get":   function()  { return this._USER_AGENT;       } }, // UserAgent.
    "LANGUAGE":         { "get":   function()  { return this._LANGUAGE;         } }, // Language. "en", "ja", ...
    "WEB_VIEW":         { "get":   function()  { return this._WEB_VIEW;         } }, // is WebView.
    "DEVICE":           { "get":   function()  { return this._DEVICE;           } }, // Device name.
    "AOSP":             { "get":   function()  { return this._AOSP;             } }, // is AOSP Stock UserAgent.
    // --- shorthand ---
    "Android":          { "get":   function()  { return this._OS === "Android"; } }, // is Android
    "iOS":              { "get":   function()  { return this._OS === "iOS";     } }, // is iOS
    // --- accessor ---
    "get":              { "value": function(k)    { return this["_" + k];       } }, // UserAgent#get(key:String):Any
    "set":              { "value": function(k, v) {        this["_" + k] = v;   } }, // UserAgent#set(key:String, value:Any):void
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

function _detectBrowser(ua) {
    switch (true) {
    case /CriOS/.test(ua):              return "Chrome for iOS"; // https://developer.chrome.com/multidevice/user-agent
    case /Edge/.test(ua):               return "Edge";
    case /Chrome/.test(ua):             return "Chrome";
    case /Firefox/.test(ua):            return "Firefox";
    case /Android/.test(ua):            return "AOSP"; // AOSP stock browser
    case /MSIE|Trident/.test(ua):       return "IE";
    case /Safari\//.test(ua):           return "Safari";
    case /AppleWebKit/.test(ua):        return "WebKit";
    }
    return "";
}

function _detectBrowserVersion(ua, browser) {
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

function _detectDevice(ua, os, osVersion, options) {
    var screen        = global["screen"] || {};
    var screenWidth   = screen["width"]  || 0;
    var screenHeight  = screen["height"] || 0;
    var dpr           = options["DISPLAY_DPR"]   || global["devicePixelRatio"] || 1.0;
    var long_         = options["DISPLAY_LONG"]  || Math.max(screenWidth, screenHeight);
    var short_        = options["DISPLAY_SHORT"] || Math.min(screenWidth, screenHeight);
    var retina        = dpr >= 2;
    var longEdge      = Math.max(long_, short_); // iPhone 4s: 480, iPhone 5: 568

    switch (os) {
    case "Android":                     return _getAndroidDevice(ua, retina);
    case "iOS":                         return _getiOSDevice(ua, retina, longEdge, osVersion);
    }
    return "";
}

function _getAndroidDevice(ua, retina) {
    if (/Firefox/.test(ua)) { return ""; } // exit Firefox for Android
    try {
        var result = ua.split("Build/")[0].split(";").slice(-1).join().trim().
                     replace(/^SonyEricsson/, "").
                     replace(/^Sony/, "").replace(/ 4G$/, "");
        if (result === "Nexus 7") {
            return retina ? "Nexus 7 2nd" // Nexus 7 (2013)
                          : "Nexus 7";    // Nexus 7 (2012)
        }
        return result;
    } catch ( o__o ) {
        // ignore
    }
    return "";
}

function _getiOSDevice(ua, retina, longEdge, osVersion) {
    var WebGLDetector = global["WebModule"]["WebGLDetector"] || {};
    if ("detect" in WebGLDetector) { WebGLDetector["detect"](); }
    var glVersion = WebGLDetector["WEBGL_VERSION"] || "";
  //var SGX535 = /535/.test(glVersion); // iPhone 3GS, iPhone 4
    var SGX543 = /543/.test(glVersion); // iPhone 4s/5/5c, iPad 2/3, iPad mini
    var SGX554 = /554/.test(glVersion); // iPad 4
    var A7     = /A7/.test(glVersion);  // iPhone 5s, iPad mini 2/3, iPad Air
    var A8X    = /A8X/.test(glVersion); // A8X, iPad Air 2
    var A8     = /A8/.test(glVersion);  // A8,  iPhone 6/6+, iPad mini 4, iPod touch 6
    var A9     = /A9/.test(glVersion);  // A9, A9X, iPhone 6s/6s+, iPad Pro

    if (/iPhone/.test(ua)) {
        return !retina         ? "iPhone 3GS"
             : longEdge <= 480 ? (SGX543 || osVersion >= 8 ? "iPhone 4s" : "iPhone 4") // iPhone 4 stopped in iOS 7.
             : longEdge <= 568 ? (A7 ? "iPhone 5s"      : "iPhone 5") // iPhone 5 or iPhone 5c
             : longEdge <= 667 ? (A9 ? "iPhone 6s"      : "iPhone 6")
             : longEdge <= 736 ? (A9 ? "iPhone 6s Plus" : "iPhone 6 Plus") : "";
    } else if (/iPad/.test(ua)) {
        return !retina         ? "iPad 2" // iPad 1/2, iPad mini
             : SGX543          ? "iPad 3"
             : SGX554          ? "iPad 4"
             : A7              ? "iPad mini 2" // iPad mini 3, iPad Air
             : A8X             ? "iPad Air 2"
             : A8              ? "iPad mini 4"
             : A9              ? "iPad Pro" : "";
    } else if (/iPod/.test(ua)) {
        return longEdge <= 480 ? (retina ? "iPod touch 4" : "iPod touch 3")
                               : (A8     ? "iPod touch 6" : "iPod touch 5");
    }
    return "";
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
    case "iOSSafari":       return false;
    case "iOSWebKit":       return _isWebView_iOS(options);
    case "AndroidAOSP":     return false; // can not accurately detect
    case "AndroidChrome":   return parseFloat(version) >= 42 ? /; wv/.test(ua)
                                 : /\d{2}\.0\.0/.test(version) ? true // 40.0.0, 37.0.0, 36.0.0, 33.0.0, 30.0.0
                                 : _isWebView_Android(options);
    }
    return false;
}

function _isWebView_iOS(options) { // @arg Object - { WEB_VIEW }
                                   // @ret Boolean
    // Chrome 15++, Safari 5.1++, IE11, Edge, Firefox10++
    // Android 5.0 ChromeWebView 30: webkitFullscreenEnabled === false
    // Android 5.0 ChromeWebView 33: webkitFullscreenEnabled === false
    // Android 5.0 ChromeWebView 36: webkitFullscreenEnabled === false
    // Android 5.0 ChromeWebView 37: webkitFullscreenEnabled === false
    // Android 5.0 ChromeWebView 40: webkitFullscreenEnabled === false
    // Android 5.0 ChromeWebView 42: webkitFullscreenEnabled === ?
    // Android 5.0 ChromeWebView 44: webkitFullscreenEnabled === true
    var document = (global["document"] || {});

    if ("WEB_VIEW" in options) {
        return options["WEB_VIEW"];
    }
    return !("fullscreenEnabled"       in document ||
             "webkitFullscreenEnabled" in document || false);
}

function _isWebView_Android(options) { // @arg Object - { WEB_VIEW }
    // Chrome 8++
    // Android 5.0 ChromeWebView 30: webkitRequestFileSystem === false
    // Android 5.0 ChromeWebView 33: webkitRequestFileSystem === false
    // Android 5.0 ChromeWebView 36: webkitRequestFileSystem === false
    // Android 5.0 ChromeWebView 37: webkitRequestFileSystem === false
    // Android 5.0 ChromeWebView 40: webkitRequestFileSystem === false
    // Android 5.0 ChromeWebView 42: webkitRequestFileSystem === false
    // Android 5.0 ChromeWebView 44: webkitRequestFileSystem === false
    if ("WEB_VIEW" in options) {
        return options["WEB_VIEW"];
    }
    return !("requestFileSystem"       in global ||
             "webkitRequestFileSystem" in global || false);
}

return UserAgent; // return entity

});

