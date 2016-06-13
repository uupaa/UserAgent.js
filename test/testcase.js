var ModuleTestUserAgent = (function(global) {

var test = new Test(["UserAgent"], { // Add the ModuleName to be tested here (if necessary).
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     false,  // enable worker test.
        node:       false,  // enable node test.
        nw:         true,  // enable nw.js test.
        el:         true,  // enable electron (render process) test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
            console.error(error.message);
        }
    });

if (IN_BROWSER || IN_NW || IN_EL || IN_WORKER || IN_NODE) {
    test.add([
        testUserAgent,
        testUserAgent_shorthands,
        testUserAgent_manyCases,
        testUserAgent_LANGUAGE,
        testUserAgent_MOBILE,
        testUserAgent_genericAccessor,
        testUserAgent_ES,
        testUserAgent_manyCases,
        testUserAgent_FP,
//
        testUserAgent_PC,
        testUserAgent_BASE_BROWSER,
        testUserAgent_IE,
        testUserAgent_Edge,
        testUserAgent_WebKit,
        testUserAgent_Firefox,
        testUserAgent_Chromium,
        testUserAgent_BROWSER_ENGINE,
    ]);
}

var userAgents = {
    Mac: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
        },
        OS: "Mac",
        OS_VERSION: "10.8.5",
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 31.0,
        DEVICE: "",
        Mac: true,
    },
    Chrome: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
        },
        OS: "Mac",
        OS_VERSION: "10.8.5",
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 31.0,
        DEVICE: "",
    },
    Blink: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36",
        },
        OS: "Mac",
        OS_VERSION: "10.8.5",
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 31.0,
        DEVICE: "",
    },
    "iPhone 6s Plus(iOS 10)": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 736,
            DISPLAY_SHORT: 414,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9 GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 10.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPhone 6s Plus",
        iPhone: true,
    },
    "iPhone 6s Plus": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 736,
            DISPLAY_SHORT: 414,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9 GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 9.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPhone 6s Plus",
        iPhone: true,
    },
    "iPhone 6s": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 667,
            DISPLAY_SHORT: 375,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9 GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 9.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPhone 6s",
        iPhone: true,
    },
    iPadMini4: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A8 GPU - 50.6.10)"
        },
        OS: "iOS",
        OS_VERSION: 9.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPad mini 4",
        iPad: true,
    },
    iPadAir2: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPad; CPU OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A8X GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 8.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
        DEVICE: "iPad Air 2",
        iPad: true,
    },
    iPhone6Plus: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 736,
            DISPLAY_SHORT: 414,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A8 GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 8.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
        DEVICE: "iPhone 6 Plus",
        iPhone: true,
    },
    iPhone6: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 667,
            DISPLAY_SHORT: 375,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A8 GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 8.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
        DEVICE: "iPhone 6",
        iPhone: true,
    },
    "Nexus5 Android 4.4 Chromium based WebView": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            WEB_VIEW: false,
        },
        OS: "Android",
        OS_VERSION: 4.4,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: "30.0.0",
        DEVICE: "Nexus 5",
        WEB_VIEW: true,
        Android: true,
    },
    Nexus7_2013: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JWR66N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.111 Safari/537.36",
            DISPLAY_DPR: 2
        },
        OS: "Android",
        OS_VERSION: 4.3,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: "27.0.1453",
        DEVICE: "Nexus 7 2nd",
        Android: true,
    },
    FirefoxMobileForAndroid: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0",
        },
        OS: "Android",
        BROWSER: "Firefox",
        BROWSER_ENGINE: "Gecko",
        BROWSER_VERSION: 13.0,
        DEVICE: "",
    },
    FirefoxOS: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0",
        },
        BROWSER: "Firefox",
        BROWSER_ENGINE: "Gecko",
        BROWSER_VERSION: 18.0,
        DEVICE: "",
    },
    INFOBAR_A01: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S6160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1",
        },
        OS: "Android",
        OS_VERSION: "2.3.3",
        BROWSER: "AOSP",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 4.0,
        DEVICE: "INFOBAR A01",
        AOSP: true,
        Android: true,
    },
    WindowsPhone8S: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8S by HTC)",
        },
        OS: "Windows",
        OS_VERSION: 8.0,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 10.0,
        DEVICE: "",
        Windows: true,
    },
    WindowsPhoneLumia920: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)",
        },
        OS: "Windows",
        OS_VERSION: 8.0,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 10.0,
        DEVICE: "",
        Windows: true,
    },
    Kindle: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.4 Mobile Safari/535.19 Silk-Accelerated=true",
        },
        OS: "Android",
        OS_VERSION: "4.0.3",
        BROWSER: "AOSP",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 3.4,
        DEVICE: "KFTT",
        AOSP: true,
        Android: true,
    },
    GooglePlayEdition: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; HTC6500LVW 4G Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
        },
        OS: "Android",
        OS_VERSION: "4.2.2",
        BROWSER: "AOSP",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 4.0,
        DEVICE: "HTC6500LVW",
        AOSP: true,
        Android: true,
    },
    IE11Preview: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko",
        },
        OS: "Windows",
        OS_VERSION: 6.1,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 11.0,
        DEVICE: "",
        Windows: true,
    },
    IE10: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)",
        },
        OS: "Windows",
        OS_VERSION: 6.1,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 10.0,
        DEVICE: "",
        Windows: true,
    },
    IE9: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)",
        },
        OS: "Windows",
        OS_VERSION: 6.1,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 9.0,
        DEVICE: "",
        Windows: true,
    },
    IE8: {
        CONDITION: {
            USER_AGENT: "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)",
        },
        OS: "Windows",
        OS_VERSION: 6.1,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 8.0,
        DEVICE: "",
        Windows: true,
    },
    "WP7.5": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)",
        },
        OS: "Windows",
        OS_VERSION: 7.5,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 9.0,
        DEVICE: "",
        Windows: true,
    },
    WP7: {
        CONDITION: {
            USER_AGENT: "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0)",
        },
        OS: "Windows",
        OS_VERSION: 7.0,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 7.0,
        DEVICE: "",
        Windows: true,
    },
    OperaNext: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.0.4; L-01D Build/IMM76D) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.123 Mobile Safari/537.22 OPR/14.0.1025.53005",
        },
        OS: "Android",
        OS_VERSION: 4.0,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 25.0,
        DEVICE: "L-01D",
    },
    LGL25: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Mobile; LGL25; rv:32.0) Gecko/32.0 Firefox/32.0",
        },
        OS: "Firefox OS",
        OS_VERSION: "0.0.0",
        BROWSER: "Firefox",
        BROWSER_ENGINE: "Gecko",
        BROWSER_VERSION: 32.0,
        DEVICE: "",
    },
    Firefox16: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:16.0) Gecko/20100101 Firefox/16.0",
        },
        OS: "Windows",
        OS_VERSION: 6.1,
        BROWSER: "Firefox",
        BROWSER_ENGINE: "Gecko",
        BROWSER_VERSION: 16.0,
        DEVICE: "",
    },
    Firefox11: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:11.0) Gecko/20100101 Firefox/11.0",
        },
        OS: "Windows",
        OS_VERSION: 6.1,
        BROWSER: "Firefox",
        BROWSER_ENGINE: "Gecko",
        BROWSER_VERSION: 11.0,
        DEVICE: "",
    },
    FirefoxMobile: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0",
        },
        OS: "Android",
        OS_VERSION: 0.0,
        BROWSER: "Firefox",
        BROWSER_ENGINE: "Gecko",
        BROWSER_VERSION: 13.0,
        DEVICE: "",
    },
    FirefoxTablet: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Android; Tablet; rv:13.0) Gecko/13.0 Firefox/13.0",
        },
        OS: "Android",
        OS_VERSION: 0.0,
        BROWSER: "Firefox",
        BROWSER_ENGINE: "Gecko",
        BROWSER_VERSION: 13.0,
        DEVICE: "",
    },
    Safari6: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_4) AppleWebKit/536.30.1 (KHTML, like Gecko) Version/6.0.5 Safari/536.30.1",
        },
        OS: "Mac",
        OS_VERSION: 10.8,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
        DEVICE: "",
        Mac: true,
    },
    "Android Browser": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; U; Android 4.2.2; ja-jp; SonySOL23 Build/14.1.C.0.467) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30",
            //                                  ~~~~~~~~~~~~~  ~~~~~  ~~~~~~~~~ ~~~~~                                                                  ~~~~~~ 
        },
        OS: "Android",
        OS_VERSION: 4.2,
        BROWSER: "AOSP",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 4.0,
        AOSP: true,
        DEVICE: "SOL23",
        Android: true,
    },
    "Android Browser WebView": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30",
            //                                  ~~~~~~~~~~~~~  ~~~~~  ~~~~~                                                        |(not Mobile)
        },
        OS: "Android",
        OS_VERSION: 4.1,
        BROWSER: "AOSP",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 4.0,
        AOSP: true,
        DEVICE: "",
        Android: true,
    },
    "S Browser": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.2.2; ja-jp; SC-04E Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19",
            //                               ~~~~~~~~~~~~~  ~~~~~  ~~~~~~ ~~~~~                                                           ~~~~~~~~~~~          ~~~~~~
        },
        OS: "Android",
        OS_VERSION: 4.2,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 18.0,
        DEVICE: "SC-04E",
        Android: true,
    },
    "Android KitKat Chrome WebView": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            //                               ~~~~~~~~~~~  ~~~~~~~ ~~~~~                                                             ~~~~~~~~~~~     ~~~~~~
        },
        OS: "Android",
        OS_VERSION: 4.4,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 30.0,
        DEVICE: "Nexus 5",
    },
    "Kindle": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.0.3; en-us; KFTT    Build/IML74K)  AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.4 Mobile Safari/535.19 Silk-Accelerated=true",
            //                               ~~~~~~~~~~~~~         ~~~~~~~ ~~~~~                                                 ~~~~~~~~
        },
        OS: "Android",
        OS_VERSION: 4.0,
        BROWSER: "AOSP",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 3.4,
        DEVICE: "KFTT",
    },
    "Nexus7 Android 4.2 Chrome 18": {
        CONDITION: {
            DISPLAY_DPR: 1.333,
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.2; Nexus 7 Build/JOP40C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19",
            //                               ~~~~~~~~~~~  ~~~~~~~ ~~~~~                                                ~~~~~~~~~~~         |(not Mobile)
        },
        OS: "Android",
        OS_VERSION: 4.2,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 18.0,
        DEVICE: "Nexus 7",
    },
    "Xperia X10": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; U; Android 1.6; en-gb; SonyEricssonX10i Build/R1AA040) AppleWebKit/528.5+ (KHTML, like Gecko) Version/3.1.2 Mobile Safari/525.20.1",
        },
        OS: "Android",
        OS_VERSION: 1.6,
        BROWSER: "AOSP",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 3.1,
        DEVICE: "X10i",
    },
    "iPhone 5 iOS 7 beta 6": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/6.0 Mobile/11A4449d Safari/9537.53.25",
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 IMGSGX543-113.3)",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 568,
            DISPLAY_SHORT: 1,
        },
        OS: "iOS",
        OS_VERSION: 7.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
        DEVICE: "iPhone 5",
    },
    "iPhone 4s iOS 7.0.3": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_3 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11B511 Safari/9537.53",
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 IMGSGX543-113.3)",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 480,
            DISPLAY_SHORT: 1,
        },
        OS: "iOS",
        OS_VERSION: 7.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPhone 4s",
    },
    "iPad 2 iOS 6 beta": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3",
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 IMGSGX543-113.3)",
            DISPLAY_DPR: 1,
        },
        OS: "iOS",
        OS_VERSION: 5.1,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 5.1,
        DEVICE: "iPad 2",
    },
    "Xbox One": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Xbox; Xbox One)",
            //                                                       ~~~~~~ don't look
        },
        OS: "Windows",
        OS_VERSION: 6.2,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 10.0,
        DEVICE: "",
    },
    "Xbox 360": { // IEMobile Based Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; Xbox)",
            //                                                            ~~~~~~ don't look
        },
        OS: "Windows",
        OS_VERSION: 7.5,
        BROWSER: "IE",
        BROWSER_ENGINE: "Trident",
        BROWSER_VERSION: 9.0,
        DEVICE: "",
    },
    "PS 4": { // WebKit Based Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (PlayStation 4 1.52) AppleWebKit/536.26 (KHTML, like Gecko)",
            //                                    ~~~~~~ don't look
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "WebKit",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 536.26,
        DEVICE: "",
    },
    "PS 3(WebKit)": { // WebKit Based Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (PLAYSTATION 3 4.10) AppleWebKit/531.22.8 (KHTML, like Gecko)",
            //                                    ~~~~~~ don't look
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "WebKit",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 531.22,
        DEVICE: "",
    },
    "PS 3": { // Sony Original Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (PLAYSTATION 3; 2.50) + Flash 9",
            //                                    ~~~~~~~ don't look
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "",
        BROWSER_ENGINE: "",
        BROWSER_VERSION: 0.0,
        DEVICE: "",
    },
    "PS 2": { // NetFront Based Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/4.0 (PS2; PlayStation BB Navigator 1.0) NetFront/3.0",
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "",
        BROWSER_ENGINE: "",
        BROWSER_VERSION: 0.0,
        DEVICE: "",
    },
    "PSP": { // NetFront Based Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/4.0 (PSP PlayStation Portable); 2.00)",
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "",
        BROWSER_ENGINE: "",
        BROWSER_VERSION: 0.0,
        DEVICE: "",
    },
    "PS Vita": { // WebKit Based Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (PlayStation Vita 1.50) AppleWebKit/531.22.8 (KHTML, like Gecko) Silk/3.2",
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "WebKit",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 531.22,
        DEVICE: "",
    },
    "Wii": { // Opera Browser.
        CONDITION: {
            USER_AGENT: "Opera/9.30 (Nintendo Wii; U; ; 3642; ja) with Flash Lite 3.1",
            //                                          ~~~~~ don't look
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "",
        BROWSER_ENGINE: "",
        BROWSER_VERSION: 0.0,
        DEVICE: "",
    },
    "Wii U": { // NetFrontNX Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Nintendo WiiU) AppleWebKit/536.28 (KHTML, like Gecko) NX/*** NintendoUserAgent/***.JP",
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "WebKit",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 536.28,
        DEVICE: "",
    },
    "3DS": { // NetFront Based Browser.
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Nintendo 3DS; U; ; ja) Version/1.7412.JP",
            //                                                       ~~~~~~~~~ don't look
        },
        OS: "",
        OS_VERSION: 0.0,
        BROWSER: "",
        BROWSER_ENGINE: "",
        BROWSER_VERSION: 0.0,
        DEVICE: "",
    },
    "ChromeOS": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (X11; CrOS armv7l 4537.56.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/30.0.1599.38 Safari/537.36",
        },
        OS: "Chrome OS",
        OS_VERSION: "0.0.0",
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: "30.0.1599",
        DEVICE: "",
    },
    "iPhone4s WebView Facebook": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143 [FBAN/FBIOS;FBAV/36.1.0.43.231;FBBV/13557860;FBDV/iPhone4,1;FBMD/iPhone;FBSN/iPhone OS;FBSV/8.4;FBSS/2; FBCR/ソフトバンクモバイル;FBID/phone;FBLC/ja_JP;FBOP/5]",
            WEB_VIEW: true,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 IMGSGX543-113.3)",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 480,
            DISPLAY_SHORT: 1,
        },
        OS: "iOS",
        OS_VERSION: 8.4,
      //BROWSER: "WebKit", // not Safari (WebView では BROWSER は不定なため、BROWSER_ENGINE で判別する必要がある
        BROWSER_ENGINE: "WebKit",
      //BROWSER_VERSION:
        WEB_VIEW: true,
        DEVICE: "iPhone 4s",
    },
    "iPhone4s WebView Twitter": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143 Twitter for iPhone",
            WEB_VIEW: true,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 IMGSGX543-113.3)",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 480,
            DISPLAY_SHORT: 1,
        },
        OS: "iOS",
        OS_VERSION: 8.4,
      //BROWSER: "WebKit", // not Safari (WebView では BROWSER は不定なため、BROWSER_ENGINE で判別する必要がある
        BROWSER_ENGINE: "WebKit",
      //BROWSER_VERSION:
        WEB_VIEW: true,
        DEVICE: "iPhone 4s",
    },
    "iPhone4s WebView Line": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_4 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12H143 Safari Line/5.2.1",
            WEB_VIEW: true,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 IMGSGX543-113.3)",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 480,
            DISPLAY_SHORT: 1,
        },
        OS: "iOS",
        OS_VERSION: 8.4,
      //BROWSER: "Safari", // not WebKit (WebView では BROWSER は不定なため、BROWSER_ENGINE で判別する必要がある
        BROWSER_ENGINE: "WebKit",
      //BROWSER_VERSION:
        WEB_VIEW: true,
        DEVICE: "iPhone 4s",
    },
    "HTV31 Android 5.0.2 Facebook": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 5.0.2; HTV31 Build/LRX22G; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/44.0.2403.90 Mobile Safari/537.36 [FB_IAB/FB4A;FBAV/40.0.0.24.199;]",
            WEB_VIEW: true,
        },
        OS: "Android",
        OS_VERSION: "5.0.2",
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 44.0,
        WEB_VIEW: true,
        DEVICE: "HTV31",
    },
    "HTC23 Android 4.4.4 Chromium WebView": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.4.4; HTL23 Build/KTU84P) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/33.0.0.0 Mobile Safari/537.36",
            WEB_VIEW: true,
        },
        OS: "Android",
        OS_VERSION: "4.4.4",
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: "33.0.0",
        WEB_VIEW: true,
        DEVICE: "HTL23",
    },
    "Nexus 5 Android 4.4 Chromium WebView": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            WEB_VIEW: true,
        },
        OS: "Android",
        OS_VERSION: 4.4,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: "30.0.0",
        WEB_VIEW: true,
        DEVICE: "Nexus 5",
    },
    "SC-04E Android 4.2.2 S Browser": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.2.2; ja-jp; SC-04E Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19",
        },
        OS: "Android",
        OS_VERSION: "4.2.2",
        BROWSER: "Chrome", // S Browser
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 18.0,
        DEVICE: "SC-04E",
    },
    "HTL21 Android 4.1.1 Chrome": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.1.1; HTL21 Build/JRO03C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.136 Mobile Safari/537.36",
        },
        OS: "Android",
        OS_VERSION: "4.1.1",
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 33.0,
        DEVICE: "HTL21",
    },
    "Nexus 7 Android 4.2 Chrome": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.2; Nexus 7 Build/JOP40C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19",
            DISPLAY_DPR: 1.333,
        },
        OS: "Android",
        OS_VERSION: 4.2,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: 18.0,
        DEVICE: "Nexus 7",
    },
    "UNKNOWN BROWSER": {
        CONDITION: {
            USER_AGENT: "hoge foo bar piyo",
        },
        OS: "",
        OS_VERSION: "0.0.0",
        BROWSER: "",
        BROWSER_ENGINE: "",
        BROWSER_VERSION: "0.0.0",
        DEVICE: "",
    },
    // "iPhone 6 Plus" + zoom -> "iPhone 6"
    "iPhone6Plus zoom": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 3,
          //DISPLAY_LONG: 736,
            DISPLAY_LONG: 667,
          //DISPLAY_SHORT: 414,
            DISPLAY_SHORT: 375,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A8 GPU - 50.6.10)",
            ZOOM: true,
        },
        OS: "iOS",
        OS_VERSION: 8.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
      //DEVICE: "iPhone 6 Plus"
        DEVICE: "iPhone 6"
    },
    // "iPhone 6" + zoom -> "iPhone 6"
    "iPhone6 zoom": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
          //DISPLAY_LONG: 667,
            DISPLAY_LONG: 568,
          //DISPLAY_SHORT: 375,
            DISPLAY_SHORT: 320,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A8 GPU - 50.6.10)",
            ZOOM: true,
        },
        OS: "iOS",
        OS_VERSION: 8.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
      //DEVICE: "iPhone 6",
        DEVICE: "iPhone 6"
    },
    // "iPhone 6s Plus" + zoom -> "iPhone 6s"
    "iPhone6sPlus zoom": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 3,
          //DISPLAY_LONG: 736,
            DISPLAY_LONG: 667,
          //DISPLAY_SHORT: 414,
            DISPLAY_SHORT: 375,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9 GPU - 50.6.10)",
            ZOOM: true,
        },
        OS: "iOS",
        OS_VERSION: 9.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
      //DEVICE: "iPhone 6s Plus"
        DEVICE: "iPhone 6s"
    },
    // "iPhone 6s" + zoom -> "iPhone SE"
    "iPhone6s zoom": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
          //DISPLAY_LONG: 667,
            DISPLAY_LONG: 568,
          //DISPLAY_SHORT: 375,
            DISPLAY_SHORT: 320,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9 GPU - 50.6.10)",
            ZOOM: true,
        },
        OS: "iOS",
        OS_VERSION: 9.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
      //DEVICE: "iPhone 6s",
        DEVICE: "iPhone SE"
    },
    iPhoneSE: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 568,
            DISPLAY_SHORT: 320,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9 GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 9.3,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPhone SE",
    },
    "iPadPro": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 1366,
            DISPLAY_SHORT: 1024,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9X GPU - 50.6.10)"
        },
        OS: "iOS",
        OS_VERSION: 9.1,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPad Pro",
    },
    "iPadPro9.7": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPad; CPU OS 9_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/7.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 1024,
            DISPLAY_SHORT: 768,
            WEBGL_VERSION: "WebGL 1.0 (OpenGL ES 2.0 Apple A9X GPU - 50.6.10)",
        },
        OS: "iOS",
        OS_VERSION: 9.3,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 7.0,
        DEVICE: "iPad Pro 9.7",
    },
};

// --- test cases ------------------------------------------
function testUserAgent(test, pass, miss) {
    if (global["WebGLDetector"]) {
        WebGLDetector.detect();

        var ua = new UserAgent();

        if (global["document"]) {
            document.body.innerHTML += JSON.stringify(ua, null, 2).replace(/\n/g, "<br>");
            var api = {
                "fullscreenEnabled":       "" + document["fullscreenEnabled"],
                "webkitFullscreenEnabled": "" + document["webkitFullscreenEnabled"],
                "requestFileSystem":       "" + global["requestFileSystem"],
                "webkitRequestFileSystem": "" + global["webkitRequestFileSystem"],
                "WebGLDetector.WEBGL_CONTEXT": "" + WebGLDetector.WEBGL_CONTEXT,
                "WebGLDetector.WEBGL_VERSION": "" + WebGLDetector.WEBGL_VERSION,
                "WebGLDetector.MAX_TEXTURE_SIZE": "" + WebGLDetector.MAX_TEXTURE_SIZE,
            };
            document.body.innerHTML += JSON.stringify(api, null, 2).replace(/\n/g, "<br>");

        }
    }
    test.done(pass());
}

function testUserAgent_shorthands(test, pass, miss) {
    var iPhone6 = "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25";
    var Nexus5  = "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36";

    var ua1 = new UserAgent(iPhone6);
    var ua2 = new UserAgent(Nexus5);

    if (ua1.iOS && ua2.Android) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_manyCases(test, pass, miss) {
    var WebGLDetector = global["WebGLDetector"] || {};
    var defaultWEBGL_VERSION = WebGLDetector.WEBGL_VERSION;
    var result = true;

    for (var key in userAgents) {
        var item = userAgents[key];
        var condition = item.CONDITION;

        if ("WEBGL_VERSION" in condition) {
            WebGLDetector.DETECTED = true;
            WebGLDetector.WEBGL_VERSION = condition.WEBGL_VERSION;
        } else {
            WebGLDetector.DETECTED = false;
            WebGLDetector.WEBGL_VERSION = defaultWEBGL_VERSION;
        }

        var detected = new UserAgent(condition.USER_AGENT, condition);

        console.log(key);

        if ("OS" in item) {
            if (item.OS !== detected.OS) {
                console.log("OS", item.OS, detected.OS);
                test.done(miss());
                return
            }
        }
        if ("BROWSER" in item) {
            if (item.BROWSER !== detected.BROWSER) {
                console.log("BROWSER", item.BROWSER, detected.BROWSER);
                test.done(miss());
                return;
            }
        }
        if ("OS_VERSION" in item) {
            if (typeof item.OS_VERSION === "string") {
                if (item.OS_VERSION !== detected.OS_VERSION) {
                    console.log("OS_VERSION", item.OS_VERSION, detected.OS_VERSION);
                    test.done(miss());
                    return;
                }
            } else if (typeof item.OS_VERSION === "number") {
                if (parseFloat(item.OS_VERSION) !== parseFloat(detected.OS_VERSION)) {
                    console.log("OS_VERSION", item.OS_VERSION, detected.OS_VERSION);
                    test.done(miss());
                    return;
                }
            }
        }
        if ("BROWSER_VERSION" in item) {
            if (typeof item.BROWSER_VERSION === "string") {
                if (item.BROWSER_VERSION !== detected.BROWSER_VERSION) {
                    console.log("BROWSER_VERSION", item.BROWSER_VERSION, detected.BROWSER_VERSION);
                    test.done(miss());
                    return;
                }
            } else if (typeof item.BROWSER_VERSION === "number") {
                if (parseFloat(item.BROWSER_VERSION) !== parseFloat(detected.BROWSER_VERSION)) {
                    console.log("BROWSER_VERSION", item.BROWSER_VERSION, detected.BROWSER_VERSION);
                    test.done(miss());
                    return;
                }
            }
        }
        if ("DEVICE" in item) {
            if (item.DEVICE !== detected.DEVICE) {
                console.log("DEVICE", item.DEVICE, detected.DEVICE);
                debugger;
                test.done(miss());
                return;
            }
        }
        if ("WEB_VIEW" in item) {
            if (item.WEB_VIEW !== detected.WEB_VIEW) {
                console.log("WEB_VIEW", item.WEB_VIEW, detected.WEB_VIEW);
                test.done(miss());
                return;
            }
        }
        if ("AOSP" in item) {
            if (item.AOSP !== detected.AOSP) {
                console.log("AOSP", item.AOSP, detected.AOSP);
                test.done(miss());
                return;
            }
        }
    }

    WebGLDetector.WEBGL_VERSION = defaultWEBGL_VERSION;

    test.done(pass());
}

function testUserAgent_LANGUAGE(test, pass, miss) {
    var ua = new UserAgent();

    if (ua.LANGUAGE) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_MOBILE(test, pass, miss) {
    var ua1 = new UserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");
    var ua2 = new UserAgent("Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36");
    var ua3 = new UserAgent("Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.123");

    if (ua1.MOBILE && ua2.MOBILE && ua3.MOBILE) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_genericAccessor(test, pass, miss) {
    var ua = new UserAgent();

    ua.set("LANGUAGE", "hoge");

    if (ua.get("LANGUAGE") === "hoge") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_ES(test, pass, miss) {
    var ua = new UserAgent();

    if ("ES5" in ua && "ES6" in ua) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_FP(test, pass, miss) {
    var ua1 = new UserAgent("DoCoMo/2.0 P07A3(c500;TB;W24H15)");
    var ua2 = new UserAgent("KDDI-TS3H UP.Browser/6.2_7.2.7.1.K.1.400 (GUI) MMP/2.0");
    var ua3 = new UserAgent("Vodafone/1.0/V905SH/SHJ001[/Serial] Browser/VF-NetFront/3.3 Profile/MIDP-2.0 Configuration/CLDC-1.1");
    var ua4 = new UserAgent("SoftBank/1.0/301P/PJP10[/Serial] Browser/NetFront/3.4 Profile/MIDP-2.0 Configuration/CLDC-1.1");

    var result = {
         1: ua1.CARRIER         === "DOCOMO",
         2: ua1.FEATURE_PHONE   === true,
         3: ua1.DEVICE          === "P07A3",
         4: ua1.MOBILE          === true,

        11: ua2.CARRIER         === "KDDI",
        12: ua2.FEATURE_PHONE   === true,
        13: ua2.DEVICE          === "TS3H",
        14: ua2.MOBILE          === true,

        21: ua3.CARRIER         === "SOFTBANK",
        22: ua3.FEATURE_PHONE   === true,
        23: ua3.DEVICE          === "905SH",
        24: ua3.MOBILE          === true,

        31: ua4.CARRIER         === "SOFTBANK",
        32: ua4.FEATURE_PHONE   === true,
        33: ua4.DEVICE          === "301P",
        34: ua4.MOBILE          === true,
    }

    if (/false/.test(JSON.stringify(result))) {
        test.done(miss());
    } else {
        test.done(pass());
    }
}

function testUserAgent_PC(test, pass, miss) {
    var ua1 = new UserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");
    var ua2 = new UserAgent("Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36");
    var ua3 = new UserAgent("Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.123");

    if (!ua1.PC && !ua2.PC && !ua3.PC) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_BASE_BROWSER(test, pass, miss) {
    var ua1 = new UserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");
    var ua2 = new UserAgent("Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36");
    var ua3 = new UserAgent("Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.123");

    if (ua1.BASE_BROWSER === "WebKit"   &&
        ua2.BASE_BROWSER === "Chromium" &&
        ua3.BASE_BROWSER === "Edge") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_IE(test, pass, miss) {
    var ua3 = new UserAgent("Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8S by HTC)");

    if (ua3.BASE_BROWSER === "IE" && ua3.IE) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_Edge(test, pass, miss) {
    var ua3 = new UserAgent("Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.123");

    if (ua3.BASE_BROWSER === "Edge" && ua3.Edge) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_WebKit(test, pass, miss) {
    var ua1 = new UserAgent("Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25");

    if (ua1.BASE_BROWSER === "WebKit" && ua1.WebKit) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_Firefox(test, pass, miss) {
    var ua1 = new UserAgent("Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0");

    if (ua1.BASE_BROWSER === "Firefox" && ua1.Firefox) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_Chromium(test, pass, miss) {
    var ua2 = new UserAgent("Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36");

    if (ua2.BASE_BROWSER === "Chromium" && ua2.Chromium) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testUserAgent_BROWSER_ENGINE(test, pass, miss) {
    var ua3 = new UserAgent("Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.123");

    if (ua3.BROWSER_ENGINE === "EdgeHTML" && ua3.Edge) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

return test.run();

})(GLOBAL);

