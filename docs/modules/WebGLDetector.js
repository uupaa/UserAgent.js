(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("WebGLDetector", function moduleClosure(/* global */) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
// --- class / interfaces ----------------------------------
var WebGLDetector = {
    "detect":           WebGLDetector_detect,   // WebGLDetector.detect():void
    "DETECTED":         false,                  // WebGLDetector.DETECTED - Boolean
    "WEBGL_CONTEXT":    "",                     // WebGL context.                  eg: "webgl" or "webgl2" or "experimental-webgl", ...
    "WEBGL_VERSION":    "",                     // WebGL version string.           eg: "WebGL 1.0 (OpenGL ES 2.0 Chromium)"
    "WEBGL_VENDOR":     "",                     // WebGL vendor string.            eg: "WebKit"
    "WEBGL_RENDERER":   "",                     // WebGL renderer string.          eg: "WebKit WebGL"
    "WEBGL_SL_VERSION": "",                     // WebGL shading language version. eg: "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)"
    "MAX_TEXTURE_SIZE": 0,                      // MAX_TEXTURE_SIZE (0 or 1024 - 16384)
    "repository":       "https://github.com/uupaa/WebGLDetector.js",
};

// --- implements ------------------------------------------
function WebGLDetector_detect() {
    if (IN_BROWSER || IN_NW || IN_EL) {
        if (!WebGLDetector["DETECTED"]) {
            var canvas = document.createElement("canvas");

            if (canvas &&
                canvas.getContext) { // avoid [IE8]
                var idents = ["webgl2", "experimental-webgl2", "webgl", "experimental-webgl"];

                for (var i = 0, iz = idents.length; i < iz; ++i) {
                    var ctx = idents[i];
                    var gl = canvas.getContext(ctx);

                    if (gl) {
                        WebGLDetector["WEBGL_CONTEXT"]    = ctx;
                        WebGLDetector["WEBGL_VERSION"]    = gl["getParameter"](gl["VERSION"]);
                        WebGLDetector["WEBGL_VENDOR"]     = gl["getParameter"](gl["VENDOR"]);
                        WebGLDetector["WEBGL_SL_VERSION"] = gl["getParameter"](gl["SHADING_LANGUAGE_VERSION"]);
                        WebGLDetector["MAX_TEXTURE_SIZE"] = gl["getParameter"](gl["MAX_TEXTURE_SIZE"]);

                        var info = gl.getExtension("WEBGL_debug_renderer_info");
                        if (info) {
                            WebGLDetector["WEBGL_VENDOR"]   = gl["getParameter"](info["UNMASKED_VENDOR_WEBGL"]);
                            WebGLDetector["WEBGL_RENDERER"] = gl["getParameter"](info["UNMASKED_RENDERER_WEBGL"]);
                        }
                        WebGLDetector["DETECTED"] = true;
                        break;
                    }
                }
            }
        }
    }
}

return WebGLDetector; // return entity

});

