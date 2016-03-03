// UserAgent test

require("../../lib/WebModule.js");

WebModule.verify  = true;
WebModule.verbose = true;
WebModule.publish = true;

require("../../node_modules/uupaa.es.js/lib/ES.js");
require("../wmtools.js");
require("../../lib/UserAgent.js");
require("../../release/UserAgent.n.min.js");
require("../testcase.js");

