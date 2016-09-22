(function moduleExporter(name, closure) {
"use strict";

var entity = GLOBAL["WebModule"]["exports"](name, closure);

entity["extend"](GLOBAL, entity["5"]);
entity["extend"](GLOBAL, entity["6"]);
entity["extend"](GLOBAL, entity["7"]);
//entity["extend"](GLOBAL, entity["x"]);

if (typeof module !== "undefined") {
    module["exports"] = entity;
}
return entity;

})("ES", function moduleClosure(global, WebModule, VERIFY, VERBOSE) {
"use strict";

// --- technical terms / data structure --------------------
/*
- implement ES6 final draft
    - http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#final_draft
    - http://people.mozilla.org/~jorendorff/es6-draft.html
 */

// --- dependency modules ----------------------------------
// --- import / local extract functions --------------------
// --- define / local variables ----------------------------
var native_Object_defineProperty = null; // Native Object.defineProperty function.

// --- class / interfaces ----------------------------------
var ES = {
    "repository":   "https://github.com/uupaa/ES.js",
    "extend":       extend,                             // ES.extend(target:Object, constructors:ConstructorObject, override:Boolean = false):void
    "5": {
//{@es5
        "Object": {
            "keys":             Object_keys,            // Object.keys(obj:Object|Function|Array):KeyStringArray
            "create":           Object_create,          // Object.create(proto:Object, properties:Object):Object
            "defineProperty":   Object_defineProperty,  // Object.defineProperty(obj:Object, prop:String, descriptor:Object):Object
            "defineProperties": Object_defineProperties,// Object.defineProperties(obj:Object, props:Object):Object
            "seal":             function(o) { return o;     }, // Object.seal(obj:Object):Object
            "freeze":           function(o) { return o;     }, // Object.freeze(obj:Object):Object
            "isFrozen":         function()  { return false; }, // Object.isFrozen(obj:Object):Boolean
            "isSealed":         function()  { return false; }, // Object.isSealed(obj:Object):Boolean
            "isExtensible":     function()  { return true;  }, // Object.isExtensible(obj:Object):Boolean
            "preventExtensions":function(o) { return o;     }, // Object.preventExtensions(obj:Object):Object
        },
        "String": {
            "prototype": {
                "trim":         String_trim,            // String#trim():String
            }
        },
        "Date": {
            "now":              Date_now,               // Date.now():Integer
            "prototype": {
                "toJSON":       Date_toJSON,            // Date#toJSON():JSONObject
            }
        },
        "Function": {
            "prototype": {
                "bind":         Function_bind,          // Function#bind(context:that, ...:Any):Function
            }
        },
        "JSON": {
            "parse":            JSON_parse,             // JSON.parse(str:String):Any
            "stringify":        JSON_stringify,         // JSON.stringify(obj:Any):Object
        },
        "Array": {
            "isArray":          Array_isArray,          // Array.isArray(obj:Any):Boolean
            "prototype": {
                "indexOf":      Array_indexOf,          // Array#indexOf(obj:Any, index:Integer = 0):Integer
                "lastIndexOf":  Array_lastIndexOf,      // Array#lastIndexOf(obj:Any, index:Integer = 0):Integer
                "forEach":      Array_forEach,          // Array#forEach(fn:Function, that:this):void
                "map":          Array_map,              // Array#map(fn:Function, that:this):Array
                "some":         Array_some,             // Array#some(fn:Function, that:this):Boolean
                "every":        Array_every,            // Array#every(fn:Function, that:this):Boolean
                "filter":       Array_filter,           // Array#filter(fn:Function, that:this):Array
                "reduce":       Array_reduce,           // Array#reduce(fn:Function, initialValue:Any):Any
                "reduceRight":  Array_reduceRight       // Array#reduceRight(fn:Function, initialValue:Any):Any
            }
        }
//}@es5
    },
    "6": {
//{@es6
        "Object": {
            "assign":           Object_assign,          // Object.assign(target:Object, sources ...):Object
            "is":               Object_is,              // Object.is(value1:Any, value2:Any):Boolean
        },
        "Array": {
            "of":               Array_of,               // Array.of(values ...):Array
            "from":             Array_from,             // Array.from(items:Arguments|NodeList|ArrayLike, mapFn:Function = null, thisArg = null):Array
            "prototype": {
                "entries":      Array_entries,          // Array#entries():ArrayIterator
                "keys":         Array_keys,             // Array#keys():ArrayIterator
                "fill":         Array_fill,             // Array#fill(value:Any, start:Integer = 0, end:Integer = this.length):this
                "find":         Array_find,             // Array#find(predicate:Function, thisArg:Object = null):Any
                "findIndex":    Array_findIndex,        // Array#findIndex(predicate:Function, thisArg:Object = null):Any
                "values":       Array_values,           // Array#values():ArrayIterator
                "copyWithin":   Array_copyWithin,       // Array#copyWithin(target:Integer, start:Integer, end:Integer = this.length):this
            }
        },
        "String": {
          //"raw":              String_raw              // String.raw(template, substitutions...)
            "fromCodePoint":    String_fromCodePoint,   // String.fromCodePoint(codePoints ...):String
            "prototype": {
                "repeat":       String_repeat,          // String#repeat(count:Integer):String
                "codePointAt":  String_codePointAt,     // String#codePointAt(pos:Integer = 0):Integer
                "has":          String_includes,        // String#has(searchString:String, position:Integer = 0):Boolean
                "includes":     String_includes,        // String#includes(searchString:String, position:Integer = 0):Boolean
              //"normalize":    String_normalize,       // String#normalize(form:String):String
                "startsWith":   String_startsWith,      // String#startsWith(searchString:String, position:Integer = 0):Boolean
                "endsWith":     String_endsWith,        // String#endWith(searchString:String, endPosition:Integer = 0):Boolean
            }
        },
        "Number": {
            "isNaN":            Number_isNaN,           // Number.isNaN(number:Any):Boolean
            "isFinite":         Number_isFinite,        // Number.isFinite(number:Any):Boolean
            "isInteger":        Number_isInteger,       // Number.isInteger(number:Any):Boolean
            "isSafeInteger":    Number_isSafeInteger,   // Number.isSafeInteger(number:Any):Boolean
            "parseInt":         global.parseInt,        // Number.parseInt(string:String, radix:Integer):Integer
            "parseFloat":       global.parseFloat,      // Number.parseFloat(string:String):Number
            "NaN":              global.NaN,
            "EPSILON":          2.2204460492503130808472633361816E-16,
            "MAX_VALUE":        1.7976931348623157E+308,
            "MIN_VALUE":        5E-324,
            "MAX_SAFE_INTEGER": 9007199254740991,
            "MIN_SAFE_INTEGER": -9007199254740991,
            "POSITIVE_INFINITY":Infinity,
            "NEGATIVE_INFINITY":-Infinity,
        },
        "Math": {
            "acosh":            function(x) { return                       Math.log(x + Math.sqrt(x * x - 1)); },
            "asinh":            function(x) { return x === -Infinity ? x : Math.log(x + Math.sqrt(x * x + 1)); },
            "atanh":            function(x) { return Math.log( (1 + x) / (1 - x) ) / 2; },
            "cbrt":             function(x) { var y = Math.pow( Math.abs(x), 1 / 3 ); return x < 0 ? -y : y; },
            "clz32":            Math_clz32,
            "cosh":             function(x) { var y = Math.exp(x); return (y + 1 / y) / 2; },
            "expm1":            function(x) { return Math.exp(x) - 1; },
            "fround":           Math_fround,
            "hypot":            Math_hypot,
            "imul":             Math_imul,
            "log10":            function(x) { return Math.log(x) / Math.LN10; },
            "log1p":            function(x) { return Math.log(1 + x); },
            "log2":             function(x) { return Math.log(x) / Math.LN2; },
            "sign":             function(x) { var y = Number(x); return (y === 0 || isNaN(y)) ? y : (y > 0 ? 1 : -1); },
            "sinh":             function(x) { var y = Math.exp(x); return (y - 1 / y) / 2; },
            "tanh":             Math_tanh,
            "trunc":            function(x) { return x < 0 ? Math.ceil(x) : Math.floor(x); },
            "LOG2E":            1.442,
            "LOG10E":           0.4342944819032518,
        },
        "Set":                  Set,
        "WeakSet":              WeakSet,
        "Map":                  Map,
        "WeakMap":              WeakMap,
//}@es6
    },
    "7": {
//{@es7
        "Object": {
            "values":           Object_values,          // Object.values(source:Object|Function|Array):ValueAnyArray
            "entries":          Object_entries,         // Object.entries(source:Object|Function|Array):KeyValueArrayArray
            "prototype": {
    //          "observe":          Object_observe,
    //          "unobserve":        Object_unobserve,
            }
        },
        "Array": {
            "prototype": {
    //          "observe":          Array_observe,
    //          "unobserve":        Array_unobserve,
                "has":              Array_includes,
                "includes":         Array_includes,
            }
        }
//}@es7
    },
    "x": {
//{@esx
        "Object": {
            "toArray":          Object_toArray,         // Object.toArray(source:Array|ArrayLikeObject):Array
        },
        "Array": {
            "toObject":         Array_toObject,         // Array.toObject(source):Object
            "prototype": {
                "flatten":      Array_flatten,          // Array#flatten():Array
            }
        }
//}@esx
    }
};

//{@es5
if (Object.defineProperty && !Object.defineProperties) { // [IE8]
    // override Object.defineProperty function
    native_Object_defineProperty = Object.defineProperty;
    Object.defineProperty        = Object_defineProperty;
    Object.defineProperties      = Object_defineProperties;
}
//}@es5

//{@es6
if (Function.prototype.name === undefined) {
    Object.defineProperty(Function.prototype, "name", {
        "configurable": true, // false is immutable
        "enumerable": false,  // false is invisible(for in loop)
        "get": function() {
            // function MyClass() {}
            //          ~~~~~~~
            return this.toString().split(" ")[1].split(/[^\w$]/)[0];
        }
    });
}
if (/a/i["flags"] !== "i") { // if (RegExp.prototype.flags === undefined) {} -> step on a bug in Chrome
    Object.defineProperty(RegExp.prototype, "flags", {
        "configurable": true, // false is immutable
        "enumerable": false,  // false is invisible(for in loop)
        "get": function() {
            return this.toString().match(/[gimuy]*$/)[0];
        }
    });
}

function Set(iterable) { // @arg Array|Iterator = null
    Set_constructor.call(this, iterable);
}
Set["prototype"] = (Object.create || Object_create)(Set, {
    "constructor":  { "value": Set              }, // new Set(iterable:Iterator|Array = null):this
    "size":         { "get":   Set_size         }, // Set#size:Integer
    "add":          { "value": Set_add          }, // Set#add(value:Any):this
    "has":          { "value": Set_has          }, // Set#has(value:Any):Boolean
    "values":       { "value": Set_values       }, // Set#values():ValueIterator
    "entries":      { "value": Set_entries      }, // Set#entries():KeyValueIterator
    "forEach":      { "value": Set_forEach      }, // Set#forEach(callbackFn:Function, thisArg:Object):void
    "delete":       { "value": Set_delete       }, // Set#delete(value:Any):Boolean
    "clear":        { "value": Set_clear        }, // Set#clear():undefined
    "@@iterator":   { "value": Set_entries      }, // Set#@@iterator():KeyValueIterator
});

function WeakSet(iterable) { // @arg Array|Iterator = null
    WeakSet_constructor.call(this, iterable);
}
WeakSet["prototype"] = (Object.create || Object_create)(WeakSet, {
    "constructor":  { "value": WeakSet          }, // new WeakSet(iterable:Iterator|Array = null):this
    "add":          { "value": WeakSet_add      }, // WeakSet#add(value:Any):this
    "has":          { "value": WeakSet_has      }, // WeakSet#has(value:Any):Boolean
    "delete":       { "value": WeakSet_delete   }, // WeakSet#delete(value:Any):Boolean
});

function Map(iterable) { // @arg Array|Iterator = null
    Map_constructor.call(this, iterable);
}
Map["prototype"] = (Object.create || Object_create)(Map, {
    "constructor":  { "value": Map              }, // new Map(iterable:Iterator|Array = null):this
    "size":         { "get":   Map_size         }, // Map#size:Integer
    "get":          { "value": Map_get          }, // Map#get(key:Object):Any|undefined
    "set":          { "value": Map_set          }, // Map#set(key:Object, value:Any):void
    "has":          { "value": Map_has          }, // Map#has(key:Object):Boolean
    "keys":         { "value": Map_keys         }, // Map#keys():KeyIterator
    "values":       { "value": Map_values       }, // Map#values():ValueIterator
    "entries":      { "value": Map_entries      }, // Map#entries():KeyValueIterator
    "forEach":      { "value": Map_forEach      }, // Map#forEach(callbackFn:Function, thisArg:Object):void
    "delete":       { "value": Map_delete       }, // Map#delete(key:Object):Boolean
    "clear":        { "value": Map_clear        }, // Map#clear():undefined
    "@@iterator":   { "value": Map_entries      }, // Map#@@iterator():KeyValueIterator
});

function WeakMap(iterable) { // @arg Array|Iterator = null
    WeakMap_constructor.call(this, iterable);
}
WeakMap["prototype"] = (Object.create || Object_create)(WeakMap, {
    "constructor":  { "value": WeakMap          }, // new WeakMap(iterable:Iterator|Array = null):this
    "get":          { "value": WeakMap_get      }, // WeakMap#get(key:Object, defaultValue:Any):Any
    "set":          { "value": WeakMap_set      }, // WeakMap#set(key:Object, value:Any):undefined
    "has":          { "value": WeakMap_has      }, // WeakMap#has(key:Object):Boolean
    "delete":       { "value": WeakMap_delete   }, // WeakMap#delete(key:Object):Boolean
});
//}@es6

// --- implements ------------------------------------------
function extend(target,       // @arg Object - global
                constructors, // @arg ConstructorObject - { "Object": { keys: Object_keys, ... }, ... }
                override) {   // @arg Boolean = false
//{@dev
    if (!global["BENCHMARK"]) {
        $valid($type(constructors, "Object"),       extend, "constructors");
        $valid($type(override,     "Boolean|omit"), extend, "override");
    }
//}@dev

    override = override || false;

    for (var klass in constructors) { // Object, Array, String, Function, ...
        if ( !(klass in target) ) {
            target[klass] = constructors[klass];
        }
        _extend(target[klass], constructors[klass]);
    }

    function _extend(extendTarget, object) {
        for (var key in object) { // "keys", "prototype", ...
            if (key === "prototype") {
                // --- extend Object.property ---
                if (!(key in extendTarget)) { // extendTarget has prototype?
                    extendTarget[key] = {};   // extendTarget["prototype"] = {}
                }
                for (var prop in object[key]) {
                    _defineProperty(extendTarget[key], prop, object[key][prop]);
                }
            } else {
                _defineProperty(extendTarget, key, object[key]);
            }
        }
    }

    function _defineProperty(obj, key, value) {
        if ( override || !(key in obj) ) {
            Object.defineProperty(obj, key, {
                "configurable": true, // false is immutable
                "enumerable": false,  // false is invisible(for in loop)
                "writable": true,     // false is read-only
                "value": value
            });
        }
    }
}

//{@es5
// === Object ==============================================
function Object_keys(obj) { // @arg Object|Function|Array
                            // @ret KeyStringArray [key, ... ]
    var result = [], key, i = 0;

    // [IE6][IE7][IE8] host-objects has not hasOwnProperty
    if ( !("hasOwnProperty" in obj) ) {
        for (key in obj) {
            result[i++] = key;
        }
    } else {
        for (key in obj) {
            if ( obj["hasOwnProperty"](key) ) {
                result[i++] = key;
            }
        }
    }
    return result;
}

function Object_create(obj,          // @arg Object
                       properties) { // @arg Object = null;
                                     // @ret Object - new Object
    function VoidClass() {}
    VoidClass.prototype = obj;

    var result = new VoidClass();

    if (properties) {
        Object.defineProperties(result, properties);
    }
    return result;
}

function Object_defineProperty(obj,          // @arg Object
                               prop,         // @arg String - property name
                               descriptor) { // @arg Object - { writable, get, set, value, enumerable, configurable }
                                             // @ret Objec
    if (native_Object_defineProperty && obj["nodeType"]) { // [IE8]
        return native_Object_defineProperty(obj, prop, descriptor); // call original function
    }
    // data descriptor.
    if ("value" in descriptor) {
        obj[prop] = descriptor["value"];
    }
    // accessor descriptor.
    if (descriptor["get"] && obj["__defineGetter__"]) {
        obj["__defineGetter__"](prop, descriptor["get"]);
    }
    if (descriptor["set"] && obj["__defineSetter__"]) {
        obj["__defineSetter__"](prop, descriptor["set"]);
    }
    return obj;
}

function Object_defineProperties(obj,     // @arg Object
                                 props) { // @arg Object - { key: prop, ... }
                                          // @ret Object
    for (var key in props) {
        Object.defineProperty(obj, key, props[key]);
    }
    return obj;
}

// === String ==============================================
function String_trim() { // @ret String
    return this.replace(/^\s+/, "").replace(/\s+$/, "");
}

// === Date ================================================
function Date_now() { // @ret Integer - milli seconds
    return +new Date();
}

function Date_toJSON() { // @ret String - "2000-01-01T00:00:00.000Z"
    var dy = this["getUTCFullYear"]();         // 1970 -
    var dm = this["getUTCMonth"]() + 1;        //    1 - 12
    var dd = this["getUTCDate"]();             //    1 - 31
    var th = this["getUTCHours"]();            //    0 - 23
    var tm = this["getUTCMinutes"]();          //    0 - 59
    var ts = this["getUTCSeconds"]();          //    0 - 59
    var tms = this["getUTCMilliseconds"]();    //    0 - 999

    return dy + "-" + (dm < 10 ? "0" : "") + dm + "-" +
                      (dd < 10 ? "0" : "") + dd + "T" +
                      (th < 10 ? "0" : "") + th + ":" +
                      (tm < 10 ? "0" : "") + tm + ":" +
                      (ts < 10 ? "0" : "") + ts + "." +
                      ("00" + tms).slice(-3) + "Z";
}

// === Function ============================================
function Function_bind(context      // @arg that - context
                       /* ... */) { // @var_args Any - arguments
                                    // @ret Function
    var that = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var VoidClass = function() {};

    var result = function(/* ... */) { // @var_args Any - bound arguments
                return that.apply(this instanceof VoidClass ? this : context,
                            Array.prototype.concat.call(
                                    args,
                                    Array.prototype.slice.call(arguments)));
            };

    VoidClass.prototype = that.prototype;

    result.prototype = new VoidClass();
    return result;
}

// === JSON ================================================
function JSON_parse(jsonString) { // @arg String - JSON String
                                  // @ret Any
                                  // @throw SyntaxError("Unexpected token: ...")
    var unescaped = jsonString.trim().replace(/"(\\.|[^"\\])*"/g, "");

    if (/[^,:{}\[\]0-9\.\-+Eaeflnr-u \n\r\t]/.test(unescaped)) {
        throw new SyntaxError("Unexpected token:" + jsonString);
    }
    return (new Function("return " + jsonString))(); // raise error
}

function JSON_stringify(obj) { // @arg Any
                               // @ret JSONString
                               // @see http://developer.mozilla.org/En/Using_native_JSON
                               // @throw TypeError("Converting circular structure to JSON")
    return _jsonStringify(obj, 0);
}

function _jsonStringify(value,   // @arg Any
                        depth) { // @arg Number
                                 // @ret String
                                 // @recursive
    if (depth >= 100) {
        throw new TypeError("Converting circular structure to JSON");
    }
    switch ( Object.prototype.toString.call(value) ) {
    case "[object Null]":   return "null";
    case "[object Boolean]":
    case "[object Number]": return "" + value;
    case "[object Date]":   return value["toJSON"]();
    case "[object String]": return '"' + _jsonString(value) + '"';
    case "[object Array]":  return "[" + _jsonArray(value, depth).join(",") + "]";
    case "[object Object]": return "{" + _jsonObject(value, depth).join(",") + "}";
    }
    return "";
}

function _jsonArray(value, depth) {
    var result = [];

    for (var i = 0, iz = value.length; i < iz; ++i) {
        result.push( _jsonStringify(value[i], depth + 1) );
    }
    return result;
}

function _jsonObject(value, depth) {
    var result = [];
    var ary = Object.keys(value);

    for (var i = 0, iz = ary.length; i < iz; ++i) { // uupaa-looper
        result.push('"' + _jsonString( ary[i] ) + '":' +
                          _jsonStringify(value[ ary[i] ], depth + 1));
    }
    return result;
}

function _jsonString(str) {
    var JSON_ESCAPE = {
            '\b': '\\b',    // backspace       U+0008
            '\t': '\\t',    // tab             U+0009
            '\n': '\\n',    // line feed       U+000A
            '\f': '\\f',    // form feed       U+000C
            '\r': '\\r',    // carriage return U+000D
            '"':  '\\"',    // quotation mark  U+0022
            '\\': '\\\\'    // reverse solidus U+005C
        };

    return str.replace(/(?:[\b\t\n\f\r\"]|\\)/g, function(_) {
                return JSON_ESCAPE[_];
            }).replace(/(?:[\x00-\x1f])/g, function(_) {
                return "\\u00" + ("0" + _.charCodeAt(0).toString(16)).slice(-2);
            });
}

// === Array ===============================================
function Array_isArray(obj) { // @arg Any
                              // @ret Boolean
    return Object.prototype.toString.call(obj) === "[object Array]";
}

function Array_indexOf(obj,     // @arg Any - search element
                       index) { // @arg Integer = 0 - from index
                                // @ret Integer - found index or -1
    var i = index || 0, iz = this.length;

    i = (i < 0) ? i + iz : i;
    for (; i < iz; ++i) {
        if (i in this && this[i] === obj) {
            return i;
        }
    }
    return -1;
}

function Array_lastIndexOf(obj,     // @arg Any - search element
                           index) { // @arg Integer = this.length - from index
                                    // @ret Integer - found index or -1
    var i = index, iz = this.length;

    i = (i < 0) ? i + iz + 1 : iz;
    while (--i >= 0) {
        if (i in this && this[i] === obj) {
            return i;
        }
    }
    return -1;
}

function Array_forEach(fn,     // @arg Function
                       that) { // @arg this = undefined - fn this
    var i = 0, iz = this.length;

    for (; i < iz; ++i) {
        if (i in this) {
            fn.call(that, this[i], i, this);
        }
    }
}

function Array_map(fn,     // @arg Function
                   that) { // @arg this = undefined - fn this
                           // @ret Array [element, ... ]
    var result = [];
    var i = 0, iz = this.length;

    for (; i < iz; ++i) {
        if (i in this) {
            result[i] = fn.call(that, this[i], i, this);
        }
    }
    return result;
}

function Array_some(fn,     // @arg Function
                    that) { // @arg this = undefined - fn this
                            // @ret Boolean
    var i = 0, iz = this.length;

    for (; i < iz; ++i) {
        if (i in this && fn.call(that, this[i], i, this)) {
            return true;
        }
    }
    return false;
}

function Array_every(fn,     // @arg Function
                     that) { // @arg this = undefined - fn this
                             // @ret Boolean
    var i = 0, iz = this.length;

    for (; i < iz; ++i) {
        if (i in this && !fn.call(that, this[i], i, this)) {
            return false;
        }
    }
    return true;
}

function Array_filter(fn,     // @arg Function
                      that) { // @arg this = undefined - fn this
                              // @ret Array [value, ... ]
    var result = [];
    var value;
    var i = 0, iz = this.length;

    for (; i < iz; ++i) {
        if (i in this) {
            value = this[i];
            if (fn.call(that, value, i, this)) {
                result.push(value);
            }
        }
    }
    return result;
}

function Array_reduce(fn,             // @arg Function
                      initialValue) { // @arg Any = undefined - initial value
                                      // @ret Any
//{@dev
    if (!global["BENCHMARK"]) {
        if (!this.length && initialValue === undefined) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
    }
//}@dev

    var result = initialValue;
    var i  = 0;
    var iz = this.length;

    if (result === undefined) {
        for (; i < iz; ++i) {
            if (i in this) {
                result = this[i++];
                break;
            }
        }
    }

    for (; i < iz; ++i) {
        if (i in this) {
            result = fn(result, this[i], i, this);
        }
    }
    return result;
}

function Array_reduceRight(fn,             // @arg Function
                           initialValue) { // @arg Any = undefined - initial value
                                           // @ret Any
//{@dev
    if (!global["BENCHMARK"]) {
        if (!this.length && initialValue === undefined) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
    }
//}@dev

    var result = initialValue;
    var i  = this.length - 1;

    if (result === undefined) {
        for (; i >= 0; --i) {
            if (i in this) {
                result = this[i--];
                break;
            }
        }
    }

    for (; i >= 0; --i) {
        if (i in this) {
            result = fn(result, this[i], i, this);
        }
    }
    return result;
}
//}@es5

//{@es6
// === Object ==============================================
function Object_assign(target               // @arg Object
                       /* sources ... */) { // @var_args Object - sources objects
                                            // @ret Object - return target
                                            // @desc mixin
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

    var args = arguments;

    for (var i = 1, iz = args.length; i < iz; ++i) {
        var source = args[i];

        if (source) {
            var keys = Object.keys(source);

            for (var k = 0, kz = keys.length; k < kz; ++k) {
                var key  = keys[k];
                var desc = Object.getOwnPropertyDescriptor(source, key);

                if (desc && desc["enumerable"]) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
}

function Object_is(value1,   // @arg Any
                   value2) { // @arg Any
                             // @ret Boolean
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

    if (typeof value1 !== typeof value2) {
        return false;
    }
    if (isNaN(value1)) {
        return isNaN(value2);
    }
    if (value1 === 0 && value2 === 0) {
        return (1 / value1) === (1 / value2); // Object.is(-0, +0) -> false
    }
    return value1 === value2;
}

// === Array ===============================================
function Array_of(/* values ... */) { // @var_args Any - values
                                      // @ret Array
                                      // @desc Array.of(1, 2, 3) -> [1, 2, 3]
    return Array.prototype.slice.call(arguments);
}

function Array_from(items,     // @arg Arguments|NodeList|ArrayLike
                    mapFn,     // @arg Function = null - Array#map like function
                    thisArg) { // @arg Object = null - mapFn this
                               // @ret Array
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
    if (!mapFn) {
        return [].slice.call(items);
    }
    var that = thisArg || null;
    var result = [];
    for (var i = 0, iz = items.length; i < iz; ++i) {
        result.push( mapFn.call(that, items[i], i, items) );
    }
    return result;
}

function ArrayIterator(data, nextFn) {
    this._data = data;
    this._cursor = -1;
    this["next"] = nextFn;
}
function ArrayIterator_keys() {
    var index = ++this._cursor;
    var done  = index >= this._data.length;

    return done ? { "value": undefined, "done": true  }
                : { "value": index,     "done": false };
}
function ArrayIterator_values() {
    var index = ++this._cursor;
    var done  = index >= this._data.length;

    return done ? { "value": undefined,         "done": true  }
                : { "value": this._data[index], "done": false };
}
function ArrayIterator_keyAndValues() {
    var index = ++this._cursor;
    var done  = index >= this._data.length;

    return done ? { "value": undefined,                    "done": true  }
                : { "value": [ index, this._data[index] ], "done": false };
}

function Array_entries() { // @ret KeyValueIterator
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.entries
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
    return new ArrayIterator(this, ArrayIterator_keyAndValues);
}

function Array_keys() { // @ret KeyIterator
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.keys
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
    return new ArrayIterator(this, ArrayIterator_keys);
}

function Array_fill(value, // @arg Any
                    start, // @arg Integer = 0
                    end) { // @arg Integer = this.length
                           // @ret this
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.fill
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill

    start = start >> 0;
    end   = end === undefined ? this.length : end >> 0;

    var iz    = this.length;
    var i     = start < 0 ? Math.max(start + iz, 0) : Math.min(start, iz);
    var final = end   < 0 ? Math.max(end   + iz, 0) : Math.min(end,   iz);

    for (; i < final; ++i) {
        this[i] = value;
    }
    return this;
}

function Array_find(predicate, // @arg Function predicate(value:Any, index:Integer, array:Object):Boolean
                    thisArg) { // @arg Object = null
                               // @ret Any
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.find
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    var result = this["findIndex"](predicate, thisArg);

    return result === -1 ? undefined : this[result];
}

function Array_findIndex(predicate, // @arg Function predicate(value:Any, index:Integer, array:Object):Boolean
                         thisArg) { // @arg Object = null
                                    // @ret Integer
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.findindex
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    for (var i = 0, iz = this.length; i < iz; ++i) {
        var result = predicate.call(thisArg, this[i], i, this);

        if (result) {
            return i;
        }
    }
    return -1; // not found
}

function Array_values() { // @ret ValueIterator
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.values
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
    return new ArrayIterator(this, ArrayIterator_values);
}

function Array_copyWithin(target, // @arg Integer
                          start,  // @arg Integer
                          end) {  // @arg Integer = this.length
                                  // @ret this
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.prototype.copywithin
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin

    target = target >> 0;
    start  = start  >> 0;
    end    = end === undefined ? this.length : end >> 0;

    var iz    = this.length;
    var to    = target < 0 ? Math.max(target + iz, 0) : Math.min(target, iz);
    var from  = start  < 0 ? Math.max(start  + iz, 0) : Math.min(start,  iz);
    var final = end    < 0 ? Math.max(end    + iz, 0) : Math.min(end,    iz);
    var count = Math.min(final - from, iz - to);

    if (from < to && to < (from + count)) {
        // reverse direction
        for (; count > 0; --from, --to, --count) {
            if (from in this) {
                this[to] = this[from];
            } else {
                delete this[to];
            }
        }
    } else {
        // forward direction
        for (; count > 0; ++from, ++to, --count) {
            if (from in this) {
                this[to] = this[from];
            } else {
                delete this[to];
            }
        }
    }
    return this;
}

// === String ==============================================
function String_fromCodePoint(/* codePoints ... */) { // @var_args Integer - [UNICODECodePoint, ...]
                                                      // @ret String
    var args = arguments;
    var result = [];

    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.fromcodepoint
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint
    // https://github.com/uupaa/UTF8.js/wiki/UTF8-convert-table
    for (var i = 0, az = args.length; i < az; ++i) {
        var codePoint = args[i];

        if (codePoint < 0x10000) {
            result.push(codePoint);
        } else {
            var offset = codePoint - 0x10000;

            result.push(0xD800 + (offset >> 10),
                        0xDC00 + (offset & 0x3FF));
        }
    }
    return String.fromCharCode.apply(null, result);
}

function String_repeat(count) { // @arg Integer repeat count. negative is 0
                                // @ret String repeated string
                                // @desc repeat strings
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.repeat
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
    count = count | 0;
    return (this.length && count > 0) ? new Array(count + 1).join(this) : "";
}

function String_codePointAt(pos) { // @arg Integer = 0
                                   // @ret Integer|undefined
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.codepointat
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
    pos = pos || 0;

    var iz = this.length;
    var first = this.charCodeAt(pos); // Integer or NaN

    if ( isNaN(first) ) {
        return undefined;
    }
    if (first < 0xD800 || first > 0xDBFF || pos + 1 >= iz) {
        return first;
    }
    var second = this.charCodeAt(pos + 1);
    if (second < 0xDC00 || second > 0xDFFF) {
        return first;
    }
    return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
}

function String_includes(searchString, // @arg String
                         position) {   // @arg Integer = 0
                                       // @ret Boolean
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.includes
    return this.indexOf(searchString, position) >= 0;
}

function String_startsWith(searchString, // @arg String
                           position) {   // @arg Integer = 0
                                         // @ret Boolean
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.startswith
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
    position = position || 0;
    return this.lastIndexOf(searchString, position) === position;
}

function String_endsWith(searchString,  // @arg String
                         endPosition) { // @arg Integer = this.length
                                        // @ret Boolean
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.endswith
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    var position = (endPosition || this.length) - searchString.length;
    var lastIndex = this.lastIndexOf(searchString);

    return lastIndex !== -1 && lastIndex === position;
}

// === Number ==============================================
function Number_isNaN(number) { // @arg Any
                                // @ret Boolean
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isnan
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
    return typeof number === "number" && number !== number;
}

function Number_isFinite(number) { // @arg Any
                                   // @ret Boolean
    return typeof number === "number" && isFinite(number);
}

function Number_isInteger(number) { // @arg Any
                                    // @ret Boolean
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
    return typeof number === "number" && isFinite(number) &&
           Math.floor(number) === number;
}

function Number_isSafeInteger(number) { // @arg Any
                                        // @ret Boolean
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
    return typeof number === "number" && isFinite(number) &&
           Math.floor(number) === number &&
           number <= Number["MAX_SAFE_INTEGER"] &&
           number >= Number["MIN_SAFE_INTEGER"];
}

// === Math ================================================
function Math_clz32(x) { // @arg Number
                         // @ret Number
                         // @desc count leading zero
    // (0xffffffff).toString(2) -> 0b11111111111111111111111111111111
    // (0x00001234).toString(2) -> 0b00000000000000000001001000110100
    // Math.clz32(0x1234) = 19       ~~~~~~~~~~~~~~~~~~~
    var u32 = Number(x) >>> 0;
    return u32 ? 32 - u32.toString(2).length : 32;
}

function Math_fround(x) { // @arg Number|Float64|Float32
                          // @ret Float32 - (Single-precision floating-point format. binary32)
    // http://jsperf.com/math-fround-with-float32array -> is not real (probably not correct)
    // http://en.wikipedia.org/wiki/Single-precision_floating-point_format
    return new Float32Array([x])[0]; // 64bit double to 32bit float format (cpu optimization)
}

function Math_hypot(/* values ... */) { // @var_args Number
    // http://people.mozilla.org/~jorendorff/es6-draft.html#sec-math.hypot
    var args = arguments;
    var y    = 0;

    if (args.length === 0) { return 0; }

    for (var i = 0, iz = args.length; i < iz; ++i) {
        var value = args[i];

        if (value === Infinity || value === -Infinity) {
            return Infinity;
        }
        if ( isNaN(value) ) {
            return NaN;
        }
        y += value * value;
    }
    return Math.sqrt(y);
}

function Math_imul(a,   // @arg Uint32|Uint64 - value a
                   b) { // @arg Uint32|Uint64 - value b
                        // @ret Uint32 - the C-like 32-bit multiplication of the two parameters.
    var a_high = (a >>> 16) & 0xffff;
    var a_low  =  a         & 0xffff;
    var b_high = (b >>> 16) & 0xffff;
    var b_low  =  b         & 0xffff;

    return ((a_low * b_low) + (((a_high * b_low + a_low * b_high) << 16) >>> 0) | 0);
}

function Math_tanh(x) { // @arg Number
    if (x === Infinity) {
        return 1;
    } else if (x === -Infinity) {
        return -1;
    }
    var y = Math.exp(2 * x);

    return (y - 1) / (y + 1);
}

// === CollectionIterator ==================================
function CollectionIterator(keys, values, nextFn) {
    var that = this;

    this._keys   = keys;
    this._values = values;
    this["next"] = nextFn;
    this._cursor = -1;

    if (global["Symbol"]) { // ES2015 Spec
        this[global["Symbol"]["iterator"]] = function() {
            return that;
        };
    }
}
function CollectionIterator_keys() {
    var cursor = ++this._cursor;
    var done   = cursor >= this._keys.length;

    return done ? { "value": undefined,          "done": true  }
                : { "value": this._keys[cursor], "done": false };
}
function CollectionIterator_values() {
    var cursor = ++this._cursor;
    var done   = cursor >= this._keys.length;

    return done ? { "value": undefined,            "done": true  }
                : { "value": this._values[cursor], "done": false };
}
function CollectionIterator_keyAndValues() {
    var cursor = ++this._cursor;
    var done   = cursor >= this._keys.length;

    return done ? { "value": undefined,              "done": true  }
                : { "value": [this._keys[cursor],
                              this._values[cursor]], "done": false };
}

// === Set =================================================
function Set_constructor(iterable) { // @arg Iterator|Array = null
    this._value = [];

    var that = this;

    if (Array.isArray(iterable)) {
        iterable.forEach(function(value) {
            that["add"](value);
        });
    } else if (iterable && iterable["next"]) {
        var result = null;

        while ( (result = iterable["next"]()) ) {
            if (result["done"]) {
                break;
            }
            this["add"](result["value"]);
        }
    }
}

function Set_size() { // @ret Integer
    return this._value.length;
}

function Set_add(value) { // @arg Any
                          // @ret this
    this._value.push(value);
    return this;
}

function Set_has(value) { // @arg Object
                          // @ret Boolean
    return this._value.indexOf(value) >= 0;
}

function Set_values() { // @ret ValueIterator
    return new CollectionIterator(this._value, this._value, CollectionIterator_values);
}

function Set_entries() { // @ret KeyValueIterator
    return new CollectionIterator(this._value, this._value, CollectionIterator_keyAndValues);
}

function Set_forEach(callbackFn, // @arg Function
                     thisArg) {  // @arg Object = null

    thisArg = thisArg || null;
    for (var i = 0, iz = this.size; i < iz; ++i) {
        callbackFn.call(thisArg, this._value[i], this._value[i], this);
    }
}

function Set_delete(value) { // @arg Any
                             // @ret Boolean
    var index = this._value.indexOf(value);

    if (index < 0) {
        return false;
    }
    this._value.splice(index, 1);
    return true;
}

function Set_clear() {
    this._value = [];
}

// === WeakSet ============================================
function WeakSet_constructor(iterable) { // @arg Iterator|Array = null
    this._value = [];

    var that = this;

    if (Array.isArray(iterable)) {
        iterable.forEach(function(value) {
            that["add"](value);
        });
    } else if (iterable && iterable["next"]) {
        var result = null;

        while ( (result = iterable["next"]()) ) {
            if (result["done"]) {
                break;
            }
            this["add"](result["value"]);
        }
    }
}

function WeakSet_add(value) { // @arg Any
                              // @ret this
    this._value.push(value);
    return this;
}

function WeakSet_has(value) { // @arg Object
                              // @ret Boolean
    return this._value.indexOf(value) >= 0;
}

function WeakSet_delete(value) { // @arg Any
                                 // @ret Boolean
    var index = this._value.indexOf(value);

    if (index < 0) {
        return false;
    }
    this._value.splice(index, 1);
    return true;
}

// === Map =================================================
function Map_constructor(iterable) { // @arg Iterator|Array = null
    this._index = [];
    this._value = [];

    var that = this;

    if (Array.isArray(iterable)) {
        iterable.forEach(function(value) {
            that["set"](value[0], value[1]);
        });
    } else if (iterable && iterable["next"]) {
        var result = null;

        while ( (result = iterable["next"]()) ) {
            if (result["done"]) {
                break;
            }
            this["set"](result["value"][0], result["value"][1]);
        }
    }
}

function Map_size() { // @ret Integer
    return this._index.length;
}

function Map_get(key) { // @arg Object
                        // @ret Any|undefined
    var index = this._index.indexOf(key);

    if (index < 0) {
        return undefined;
    }
    return this._value[index];
}

function Map_set(key,     // @arg Object
                 value) { // @arg Any
    var index = this._index.indexOf(key);

    if (index < 0) {
        this._index.push(key);
        this._value.push(value);
    } else {
        this._value[index] = value;
    }
}

function Map_has(key) { // @arg Object
                        // @ret Boolean
    return this._index.indexOf(key) >= 0;
}

function Map_keys() { // @ret KeyIterator
    return new CollectionIterator(this._index, this._value, CollectionIterator_keys);
}

function Map_values() { // @ret ValueIterator
    return new CollectionIterator(this._index, this._value, CollectionIterator_values);
}

function Map_forEach(callbackFn, // @arg Function
                     thisArg) {  // @arg Object = null

    thisArg = thisArg || null;
    for (var i = 0, iz = this.size; i < iz; ++i) {
        callbackFn.call(thisArg, this._value[i], this._index[i], this);
    }
}

function Map_entries() { // @ret KeyValueIterator
    return new CollectionIterator(this._index, this._value, CollectionIterator_keyAndValues);
}

function Map_delete(key) { // @arg Object
                           // @ret Boolean
    var index = this._index.indexOf(key);

    if (index < 0) {
        return false;
    }
    this._index.splice(index, 1);
    this._value.splice(index, 1);
    return true;
}

function Map_clear() {
    this._index = [];
    this._value = [];
}

// === WeakMap =============================================
function WeakMap_constructor(iterable) { // @arg Iterator|Array = null
    this._index = [];
    this._value = [];

    var that = this;

    if (Array.isArray(iterable)) {
        iterable.forEach(function(value) {
            that["set"](value[0], value[1]);
        });
    } else if (iterable && iterable["next"]) {
        var result = null;

        while ( (result = iterable["next"]()) ) {
            if (result["done"]) {
                break;
            }
            this["set"](result["value"][0], result["value"][1]);
        }
    }
}

function WeakMap_get(key,            // @arg Object
                     defaultValue) { // @arg Any
    var index = this._index.indexOf(key);

    if (index < 0) {
        return defaultValue;
    }
    return this._value[index];
}

function WeakMap_set(key,     // @arg Object
                     value) { // @arg Any
                              // @ret undefined
    var index = this._index.indexOf(key);

    if (index < 0) {
        this._index.push(key);
        this._value.push(value);
    } else {
        this._value[index] = value;
    }
}

function WeakMap_has(key) { // @arg Object
                            // @ret Boolean
    return this._index.indexOf(key) >= 0;
}

function WeakMap_delete(key) { // @arg Object
                               // @ret Boolean
    var index = this._index.indexOf(key);

    if (index < 0) {
        return false;
    }
    this._index.splice(index, 1);
    this._value.splice(index, 1);
    return true;
}
//}@es6

//{@es7
// === Object ==============================================
function Object_values(source) { // @arg Object|Function|Array
                                 // @ret ValueAnyArray [key, ... ]
    var keys = Object.keys(source);
    var i = 0, iz = keys.length;
    var result = new Array(iz);

    for (; i < iz; ++i) {
        result[i] = source[keys[i]];
    }
    return result;
}

function Object_entries(source) { // @arg Object|Function|Array
                                  // @ret KeyValueArrayArray [ ["key", value], ... ]
    var keys = Object.keys(source);
    var i = 0, iz = keys.length;
    var result = new Array(iz);

    for (; i < iz; ++i) {
        result[i] = [ keys[i], source[keys[i]] ];
    }
    return result;
}

// === Array ===============================================
function Array_includes(searchElement, // @arg Any
                        position) {    // @arg Integer = 0
                                       // @ret Boolean
    position = position || 0;
    var iz = this.length;

    if (iz === 0) {
        return false;
    }

    var i = 0;

    if (position >= 0) {
        i = position;
    } else {
        i = position + iz;
        if (i < 0) {
            i = 0;
        }
    }

    if (searchElement === searchElement) {
        for (; i < iz; ++i) {
            if (this[i] === searchElement) {
                return true;
            }
        }
    } else if (isNaN(searchElement)) {
        for (; i < iz; ++i) {
            if (isNaN(this[i])) {
                return true;
            }
        }
    } else { // maybe Symble, ... etc
        throw TypeError("Unsupported type");
    }
    return false;
}
//}@es7

//{@esx
// === Object ==============================================
function Object_toArray(source) { // @arg Array|ArrayLikeObject
                                  // @ret Array
    return Array.prototype.slice.call(source);
}

// === Array ===============================================
function Array_toObject(source) { // @arg Array
                                  // @ret Object
    return Object.keys(source).reduce(function(result, key) {
        result[key] = source[key];
        return result;
    }, {});
}

function Array_flatten() { // @ret Array
    return Array.prototype.concat.apply([], this);
}
//}@esx

return ES; // return entity

});

