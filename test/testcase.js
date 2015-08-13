var ModuleTestUserAgent = (function(global) {

global["BENCHMARK"] = false;

var test = new Test("UserAgent", {
        disable:    false, // disable all tests.
        browser:    true,  // enable browser test.
        worker:     true,  // enable worker test.
        node:       true,  // enable node test.
        nw:         true,  // enable nw.js test.
        button:     true,  // show button.
        both:       true,  // test the primary and secondary modules.
        ignoreError:false, // ignore error.
        callback:   function() {
        },
        errorback:  function(error) {
        }
    }).add([
        testUserAgent,
    ]);

if (IN_BROWSER || IN_NW) {
    test.add([
        // browser and node-webkit test
    ]);
} else if (IN_WORKER) {
    test.add([
        // worker test
    ]);
} else if (IN_NODE) {
    test.add([
        // node.js and io.js test
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
    iPhone6Plus: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 3,
            DISPLAY_LONG: 736,
            DISPLAY_SHORT: 414,
        },
        OS: "iOS",
        OS_VERSION: 8.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
        DEVICE: "iPhone 6 Plus"
    },
    iPhone6: {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25",
            DISPLAY_DPR: 2,
            DISPLAY_LONG: 667,
            DISPLAY_SHORT: 375,
        },
        OS: "iOS",
        OS_VERSION: 8.0,
        BROWSER: "Safari",
        BROWSER_ENGINE: "WebKit",
        BROWSER_VERSION: 6.0,
        DEVICE: "iPhone 6",
    },
    "Nexus5 Android 4.4 Chromium based WebView": {
        CONDITION: {
            USER_AGENT: "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36",
            FULL_SCREEN: false,
            FILE_SYSTEM: false,
        },
        OS: "Android",
        OS_VERSION: 4.4,
        BROWSER: "Chrome",
        BROWSER_ENGINE: "Blink",
        BROWSER_VERSION: "30.0.0",
        DEVICE: "Nexus 5",
        WEB_VIEW: true,
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
            FULL_SCREEN: false,
            FILE_SYSTEM: false,
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
            FULL_SCREEN: false,
            FILE_SYSTEM: false,
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
            FULL_SCREEN: false,
            FILE_SYSTEM: false,
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
            FULL_SCREEN: false,
            FILE_SYSTEM: false,
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
            FULL_SCREEN: false,
            FILE_SYSTEM: false,
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
            FULL_SCREEN: false,
            FILE_SYSTEM: false,
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
    }
};

// --- test cases ------------------------------------------
function testUserAgent(test, pass, miss) {
    var result = true;
    var defaultWEBGL_VERSION = WebGLDetector.WEBGL_VERSION;

    for (var key in userAgents) {
        var item = userAgents[key];
        var condition = item.CONDITION;

        if ("WEBGL_VERSION" in condition) {
            WebGLDetector.WEBGL_VERSION = condition.WEBGL_VERSION;
        } else {
            WebGLDetector.WEBGL_VERSION = defaultWEBGL_VERSION;
        }

        var browser = new UserAgent(condition.USER_AGENT, condition);

        console.log(key);

        if ("OS" in item) {
            if (item.OS !== browser.OS) {
                console.log("OS", item.OS, browser.OS);
                test.done(miss());
                return
            }
        }
        if ("BROWSER" in item) {
            if (item.BROWSER !== browser.BROWSER) {
                console.log("BROWSER", item.BROWSER, browser.BROWSER);
                test.done(miss());
                return;
            }
        }
        if ("OS_VERSION" in item) {
            if (typeof item.OS_VERSION === "string") {
                if (item.OS_VERSION !== browser.OS_VERSION) {
                    console.log("OS_VERSION", item.OS_VERSION, browser.OS_VERSION);
                    test.done(miss());
                    return;
                }
            } else if (typeof item.OS_VERSION === "number") {
                if (parseFloat(item.OS_VERSION) !== parseFloat(browser.OS_VERSION)) {
                    console.log("OS_VERSION", item.OS_VERSION, browser.OS_VERSION);
                    test.done(miss());
                    return;
                }
            }
        }
        if ("BROWSER_VERSION" in item) {
            if (typeof item.BROWSER_VERSION === "string") {
                if (item.BROWSER_VERSION !== browser.BROWSER_VERSION) {
                    console.log("BROWSER_VERSION", item.BROWSER_VERSION, browser.BROWSER_VERSION);
                    test.done(miss());
                    return;
                }
            } else if (typeof item.BROWSER_VERSION === "number") {
                if (parseFloat(item.BROWSER_VERSION) !== parseFloat(browser.BROWSER_VERSION)) {
                    console.log("BROWSER_VERSION", item.BROWSER_VERSION, browser.BROWSER_VERSION);
                    test.done(miss());
                    return;
                }
            }
        }
        if ("DEVICE" in item) {
            if (item.DEVICE !== browser.DEVICE) {
                console.log("DEVICE", item.DEVICE, browser.DEVICE);
                test.done(miss());
                return;
            }
        }
        if ("WEB_VIEW" in item) {
            if (item.WEB_VIEW !== browser.WEB_VIEW) {
                console.log("WEB_VIEW", item.WEB_VIEW, browser.WEB_VIEW);
                test.done(miss());
                return;
            }
        }
        if ("AOSP" in item) {
            if (item.AOSP !== browser.AOSP) {
                console.log("AOSP", item.AOSP, browser.AOSP);
                test.done(miss());
                return;
            }
        }
    }
    test.done(pass());
}

return test.run();

})(GLOBAL);

