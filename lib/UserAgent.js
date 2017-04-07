(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("UserAgent", function moduleClosure(global /*, WebModule, VERIFY, VERBOSE */) {
"use strict";

// --- technical terms / data structure --------------------
// Microsoft Edge   - https://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx
// Firefox          - https://developer.mozilla.org/ja/docs/Gecko_user_agent_string_reference
// WebView          - https://developer.chrome.com/multidevice/user-agent#webview_user_agent
//                  - https://developer.chrome.com/multidevice/webview/overview#does_the_new_webview_have_feature_parity_with_chrome_for_android_
// Kindle Silk      - http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html

// --- dependency modules ----------------------------------
// --- import / local extract functions --------------------
// --- define / local variables ----------------------------
var BROWSER_ENGINES = {
    "Chromium":         "Blink",
    "Firefox":          "Gecko",
    "IE":               "Trident",
    "Edge":             "EdgeHTML",
    "WebKit":           "WebKit",
};

var BASE_BROWSERS = {
    "Chrome":           "Chromium",
    "Firefox":          "Firefox",
    "IE":               "IE",
    "Edge":             "Edge",
    "AOSP":             "WebKit",
    "Safari":           "WebKit",
    "WebKit":           "WebKit",
    "Chrome for iOS":   "WebKit",
    "Silk":             "WebKit", // or "Blink" if version >= 4.4
};

// --- class / interfaces ----------------------------------
function UserAgent(userAgent, // @arg String = navigator.userAgent
                   options) { // @arg Object = {} - { WEB_VIEW, DISPLAY_DPR, DISPLAY_LONG, DISPLAY_SHORT }
    if (!UserAgent["cache"]) {
        UserAgent["cache"] = UserAgent_parse(userAgent, options || {});
    }
    return UserAgent["cache"];
}

UserAgent["cache"]       = null;
UserAgent["parse"]       = UserAgent_parse; // UserAgent.parse(ua:UserAgent:String = navigator.userAgent, options:Object = {}):Object
UserAgent["repository"]  = "https://github.com/uupaa/UserAgent.js";
UserAgent["prototype"] = Object.create(UserAgent, {
    "constructor":      { "value": UserAgent  }, // new UserAgent(...):Object
});

// --- implements ------------------------------------------
function UserAgent_parse(userAgent, // @arg String = navigator.userAgent
                         options) { // @arg Object = {} - { WEB_VIEW, DISPLAY_DPR, DISPLAY_LONG, DISPLAY_SHORT }
                                    // @options.WEB_VIEW Boolean = false
                                    // @options.DISPLAY_DPR Number = window.devicePixelRatio || 1.0
                                    // @options.DISPLAY_LONG Number = Math.max(screenWidth, screenHeight)
                                    // @options.DISPLAY_SHORT Number = Math.min(screenWidth, screenHeight)
                                    // @ret Object
    options = options || {};

    var nav                 = global["navigator"] || {};
    var ua                  = userAgent || nav["userAgent"] || "";
    var carrier             = _detectFeaturePhoneCarrier(ua);
    var os                  = _detectOS(ua);
    var osVersion           = _detectOSVersion(ua, os);
    var browser             = _detectBrowser(ua);
    var browserVersion      = _detectBrowserVersion(ua, browser);
    var baseBrowser         = _detectBaseBrowser(browser, parseFloat(osVersion));
    var browserEngine       = BROWSER_ENGINES[baseBrowser] || "";
    var device              = _detectDevice(ua, os, osVersion, options, carrier);
    var lang                = _detectLanguage(nav);
    var mobile              = carrier ? true : (/Android|iOS/.test(os) || /Windows Phone/.test(ua));
    var iOS                 = os === "iOS";
    var android             = os === "Android";
    var webView             = _isWebView(ua, os, browser, browserVersion, options);
    var touch3D             = /^(iPhone 6s|iPhone 7)/.test(device) ||
                              parseFloat(osVersion) >= 10 && /^iPad Pro/.test(device);
    var es5                 = /native/.test(Object["keys"] + "");
    var es6                 = /native/.test(String["raw"]  + "");

    var result = {
        "OS":               os,                         // OS String.      "iOS", "Mac", "Android", "Windows", "Firefox", "Chrome OS", ""
        "OS_VERSION":       osVersion,                  // Semver String.  "{{Major}},{{Minor}},{{Patch}}"
        "PC":              !mobile,                     // is PC.          Windows, Mac, Chrome OS
        "MOBILE":           mobile,                     // is Mobile.      Android, iOS, WindowsPhone
        "BROWSER":          browser,                    // Browser Name.   "Chrome", "Firefox", "IE", "Edge", "AOSP", "Safari", "WebKit", "Chrome for iOS", "Silk", ""
        "BASE_BROWSER":     baseBrowser,                // Base Name.      "Chromium", "Firefox", "IE", "Edge", "WebKit"
        "BROWSER_ENGINE":   browserEngine,              // Engine Name.    "Blink", "Gecko", "Trident", "EdgeHTML", "WebKit", ""
        "BROWSER_VERSION":  browserVersion,             // Semver String.  "{{Major}},{{Minor}},{{Patch}}"
        "USER_AGENT":       ua,                         // UserAgent String.
        "LANGUAGE":         lang,                       // Language String. "en", "ja", ...
        "WEB_VIEW":         webView,                    // is WebView.
        "DEVICE":           device,                     // Device name String.
        "TOUCH_3D":         touch3D,                    // Device has 3D touch function.
        "CARRIER":          carrier,                    // Telecom carrier. "DOCOMO", "KDDI", "SOFTBANK", ""
        "FEATURE_PHONE":  !!carrier,                    // is Feature Phone.
        "ES5":              es5,                        // ES5, support Object.keys
        "ES6":              es6,                        // ES6, support String.raw
        "ES2015":           es6,                        // ES2015, support String.raw [alias]
        // --- OS ---
        "iOS":              iOS,                        // is iOS.      (iPhone, iPad, iPod)
        "Mac":              os === "Mac",               // is Mac OS X. [alias]
        "macOS":            os === "Mac",               // is macOS.
        "Android":          android,                    // is Android.
        "Windows":          os === "Windows",           // is Windows.  (Windows, WindowsPhone)
        // --- browser and flavor ---
        "IE":               browser     === "IE",       // is IE
        "Edge":             browser     === "Edge",     // is Edge
        "Firefox":          browser     === "Firefox",  // is Firefox
        "Chrome":           browser     === "Chrome",   // is Chrome
        "Safari":           browser     === "Safari",   // is Safari
        "Silk":             browser     === "Silk",     // is Kindle Silk Browser. (WebKit or Blink based browser)
        "AOSP":             browser     === "AOSP",     // is AOSP Stock Browser. (WebKit based browser)
        "WebKit":           baseBrowser === "WebKit",   // is WebKit based browser
        "Chromium":         baseBrowser === "Chromium", // is Chromium based browser
        // --- device ---
        "iPod":             iOS && /iPod/.test(ua),     // is iPod
        "iPad":             iOS && /iPad/.test(ua),     // is iPad
        "iPhone":           iOS && /iPhone/.test(ua),   // is iPhone
        "Kindle":           browser     === "Silk",     // is Kindle
        // --- accessor for ES3 browsers ---
        "get":              function(k)    { return this["_" + k];       }, // get(key:String):Any
        "set":              function(k, v) {        this["_" + k] = v;   }, // set(key:String, value:Any):void
    };
    return result;
}

function _detectLanguage(nav) {
    var lang = nav["language"] || "en";

    if (nav["languages"] && Array.isArray(nav["languages"])) {
        lang = nav["languages"][0] || lang;
    }
    return lang.split("-")[0]; // "en-us" -> "en"
}

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
    var android = /Android/.test(ua);

    switch (true) {
    case /CriOS/.test(ua):              return "Chrome for iOS"; // https://developer.chrome.com/multidevice/user-agent
    case /Edge/.test(ua):               return "Edge";
    case android && /Silk\//.test(ua):  return "Silk"; // Kidle Silk browser
    case /Chrome/.test(ua):             return "Chrome";
    case /Firefox/.test(ua):            return "Firefox";
    case android:                       return "AOSP"; // AOSP stock browser
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
    case "Silk":                        return _getVersion(ua, "Silk/");
    case "AOSP":                        return _getVersion(ua, "Version/");
    case "IE":                          return /IEMobile/.test(ua) ? _getVersion(ua, "IEMobile/")
                                             : /MSIE/.test(ua)     ? _getVersion(ua, "MSIE ") // IE 10
                                                                   : _getVersion(ua, "rv:");  // IE 11
    case "Safari":                      return _getVersion(ua, "Version/");
    case "WebKit":                      return _getVersion(ua, "WebKit/");
    }
    return "0.0.0";
}

function _detectBaseBrowser(browser, osVer) {
    if (browser === "Silk" && osVer >= 4.4) {
        return "Blink";
    }
    return BASE_BROWSERS[browser] || "";
}

function _detectDevice(ua, os, osVersion, options, carrier) {
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
    return carrier ? _detectFeaturePhoneDevice(ua, carrier) : "";
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

    if ("detect" in WebGLDetector) {
        WebGLDetector["detect"]();
    }

    // see: https://github.com/uupaa/WebGLDetector.js/wiki/Examples
    var glVersion  = WebGLDetector["WEBGL_VERSION"] || "";
    var glRenderer = WebGLDetector["WEBGL_RENDERER"] || "";
  //var SGX535     = /535/.test(glVersion);         // iPhone 3GS, iPhone 4
    var SGX543     = /543/.test(glVersion);         // iPhone 4s/5/5c, iPad 2/3, iPad mini
    var SGX554     = /554/.test(glVersion);         // iPad 4
    var A7         = /A7 /.test(glVersion);         // iPhone 5s, iPad mini 2/3, iPad Air
    var A8X        = /A8X/.test(glVersion);         // A8X: iPad Air 2
    var A8         = /A8 /.test(glVersion);         // A8:  iPhone 6/6+, iPad mini 4, iPod touch 6
    var A9X        = /A9X/.test(glVersion);         // A9X: iPad Pro, iPad Pro 9.7
    var A9         = /A9 /.test(glVersion);         // A9:  iPhone 6s/6s+/SE, iPad 5
    var Metal      = /Metal/.test(glVersion);       // A10: iPhone 7/7+
    var simulator  = /Software/.test(glRenderer);   // Simulator: "Apple Software Renderer"

    //
    // | UserAgent#DEVICE             | zoomed | longEdge | width x height |
    // |------------------------------|--------|----------|----------------|
    // | iPhone 3/3GS                 |        | 480      |   320 x 480    |
    // | iPhone 4/4s/5/5c/5s/SE       |        | 568      |   320 x 568    |
    // | iPhone 6/6s/7                | YES    | 568      |   320 x 568    |
    // | iPhone 6/6s/7                |        | 667      |   375 x 667    |
    // | iPhone 6+/6s+/7+             | YES    | 667      |   375 x 667    |
    // | iPhone 6+/6s+/7+             |        | 736      |   414 x 736    |
    // | iPad 1/2/mini                |        | 1024     |   768 x 1024   |
    // | iPad 3/4/5/Air/mini2/Pro 9.7 |        | 1024     |   768 x 1024   |
    // | iPad Pro                     |        | 1366     |  1024 x 1366   |

    if (/iPhone/.test(ua)) {

        // | UserAgent#DEVICE | zoomed | detected device width x height |
        // |------------------|--------|--------------------------------|
        // | "iPhone 6"       | YES    | iPhone 6  (320 x 568)          |
        // | "iPhone 6s"      | YES    | iPhone 6s (320 x 568)          |
        // | "iPhone 7"       | YES    | iPhone 7  (320 x 568)          |
        // | "iPhone 6 Plus"  | YES    | iPhone 6  (375 x 667) [!]      |
        // | "iPhone 6s Plus" | YES    | iPhone 6s (375 x 667)          |
        // | "iPhone 7 Plus"  | YES    | iPhone 7  (375 x 667) [!]      |
        if (simulator) {
            return "iPhone Simulator";
        }
        return !retina         ? "iPhone 3GS"
             : longEdge <= 480 ? (SGX543 || osVersion >= 8 ? "iPhone 4s" : "iPhone 4") // iPhone 4 stopped in iOS 7.
             : longEdge <= 568 ? (Metal  ? "iPhone 7"   :            // iPhone 7  (zoomed)
                                  A9     ? "iPhone SE"  :            // iPhone 6s (zoomed) or iPhone SE [!!]
                                  A8     ? "iPhone 6"   :            // iPhone 6  (zoomed)
                                  A7     ? "iPhone 5s"  :            // iPhone 5s
                                  SGX543 ? "iPhone 5"                // iPhone 5   or iPhone 5c
                                         : "iPhone x")               // Unknown device
             : longEdge <= 667 ? (Metal  ? "iPhone 7"   :            // iPhone 7   or iPhone 7+  (zoomed)
                                  A9     ? "iPhone 6s"  :            // iPhone 6s  or iPhone 6s+ (zoomed)
                                  A8     ? "iPhone 6"                // iPhone 6   or iPhone 6+  (zoomed)
                                         : "iPhone x")               // Unknown device
             : longEdge <= 736 ? (Metal  ? "iPhone 7 Plus"  :        // iPhone 7+
                                  A9     ? "iPhone 6s Plus" :        // iPhone 6s+
                                  A8     ? "iPhone 6 Plus"           // iPhone 6+
                                         : "iPhone x")               // Unknown device (maybe new iPhone)
             : "iPhone x";
    } else if (/iPad/.test(ua)) {
        if (simulator) {
            return "iPad Simulator";
        }
        return !retina         ? "iPad 2" // iPad 1/2, iPad mini
             : SGX543          ? "iPad 3"
             : SGX554          ? "iPad 4"
             : A7              ? "iPad mini 2" // iPad mini 3, iPad Air
             : A8X             ? "iPad Air 2"
             : A8              ? "iPad mini 4"
             : A9X             ? (longEdge <= 1024 ? "iPad Pro 9.7" : "iPad Pro")
             : A9              ? "iPad 5"
                               : "iPad x"; // Unknown device (maybe new iPad)
    } else if (/iPod/.test(ua)) {
        if (simulator) {
            return "iPod Simulator";
        }
        return longEdge <= 480 ? (retina ? "iPod touch 4" : "iPod touch 3")
                               : (A8     ? "iPod touch 6" : "iPod touch 5");
    }
    return "iPhone x";
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

// --- feature phone ---------------------------------------
function _detectFeaturePhoneCarrier(ua) {
    switch (true) {
    case /DoCoMo/.test(ua):             return "DOCOMO";
    case /KDDI/.test(ua):               return "KDDI";
    case /SoftBank|Vodafone/.test(ua):  return "SOFTBANK";
    }
    return "";
}

function _detectFeaturePhoneDevice(ua, carrier) {
    switch (carrier) {
    case "DOCOMO":
        // DoCoMo/2.0 P07A3(c500;TB;W24H15)
        //            ~~~~~
        return ua.split("DoCoMo/2.0 ")[1].split("(")[0];
    case "KDDI":
        // KDDI-TS3H UP.Browser/6.2_7.2.7.1.K.1.400 (GUI) MMP/2.0
        //      ~~~~
        return ua.split("KDDI-")[1].split(" ")[0];
    case "SOFTBANK":
        // Vodafone/1.0/V905SH/SHJ001[/Serial] Browser/VF-NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1
        //               ~~~~~
        // SoftBank/1.0/301P/PJP10[/Serial] Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1
        //              ~~~~
        if (/^Vodafone/.test(ua)) {
            return ua.split("/")[2].slice(1); // V905SH -> 905SH
        }
        return ua.split("/")[2];
    }
    return "";
}

return UserAgent; // return entity

});

