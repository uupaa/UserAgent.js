// UserAgent test

require("../lib/WebModule.js");

//publish to global. eg: window.WebModule.Class -> window.Class
WebModule.publish = true;

require("../node_modules/uupaa.es.js/lib/ES.js");
require("../node_modules/uupaa.webgldetector.js/lib/WebGLDetector.js");
require("./wmtools.js");
require("../lib/UserAgent.js");
require("../release/UserAgent.n.min.js");
require("./testcase.js");

