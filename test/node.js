// UserAgent test

require("../lib/WebModule.js");

//publish to global. eg: window.WebModule.Class -> window.Class
WebModule.publish = true;


require("./wmtools.js");
require("../lib/UserAgent.js");
require("../release/UserAgent.n.min.js");
require("./testcase.js");

